import { functions } from '../firebase_utils';
import Talk from '../models/Talk';
import config from '../config.json';
import { firestore, auth } from '../firebase_utils';

export default class ApiHandler {
    private static readonly _addTalk = functions.httpsCallable('addTalk');
    private static readonly _updateTalk = functions.httpsCallable('updateTalk');
    private static readonly _addUser = functions.httpsCallable('addUser');
    private static readonly _updateSchedule = functions.httpsCallable('updateSchedule');
    private static readonly _addTag = functions.httpsCallable('addTag');
    private static readonly _createProgram = functions.httpsCallable('createProgram');
    private static readonly _setActiveProgram = functions.httpsCallable('setActiveProgram');

    // Only calls that update, create or delete entries are done with cloud funcions for authorizing the requests.
    // Other calls can be done with firestore calls for less usage of cloud functions and better caching


    private static _cache = {};

    private static cache(key: string, obj: any) {
        this._cache[key] = obj;
        return obj;
    }

    public static async addTalk(talk: Talk, id?: string) {
        const program_id = id || await this.getDefaultId();
        // Add talks returns updates array of talks so cache can just be updated with res
        return this.cache('talks_' + program_id, await this._addTalk({ 
            talk, id: program_id
        }));
    }

    public static async updateTalk(talk: Talk, id?: string) {
        const program_id = id || await this.getDefaultId();

        this._cache['talks_' + program_id] = null; // invalidate cache, probably better to update..
        
        return await this._updateTalk({
            talk, id: program_id
        });
    }

    public static async getTalks(id?: string) {
        const program_id = id || await this.getDefaultId();
        
        const cached = this._cache['talks_' + program_id];
        if (cached) {
            return cached;
        }

        const talksPromise = firestore.collection('program').doc(program_id).collection('talks').doc('talks').get();

        const [speakers, talksReq] = await Promise.all([this.getSpeakers(program_id), talksPromise]);
        const talks = talksReq.data();

        if(!talks) {
            return null;
        }

        const speakersDict = speakers.reduce((acc, speaker) => {
            acc[speaker.id] = speaker;
            return acc;
        }, {});

        talks.talks.forEach(talk => {
            talk.speaker = speakersDict[talk.speaker];
            talk.cospeakers = talk.cospeakers.map((speaker: string) => speakersDict[speaker]);
        });


        return this.cache('talks_' + program_id, talks.talks);
    }

    public static async getTalk(talkid: string, id?: string) {
        const program_id = id || await this.getDefaultId();

        const talks = await this.getTalks(program_id);

        const talk = talks.find(talk => talk.id == talkid);
        return talk;
    }

    public static async addUser(user: any, id?: string) {
        const program_id = id || await this.getDefaultId();
        return (await this._addUser({
            user, id: program_id
        })).data;
    }

    public static async isSpeaker(id?: string) {
        const program_id = id || await this.getDefaultId();
        const cached = this._cache['isSpeaker_' + program_id];
        if (cached) {
            return cached;
        }

        try {
            const user = auth.currentUser;
            const req = await firestore.collection('program').doc(program_id).collection('users').doc(user && user.uid).get();
            const res = req.data();
            return this.cache('isSpeaker_' + program_id, res.speaker);
        }
        catch (e) {
            return false; 
        }
    }

    public static async getSpeakers(id?: string) {
        const program_id = id || await this.getDefaultId();
        const cached = this._cache['speakers_' + program_id];
        if (cached) {
            return cached;
        }

        const req = await firestore.collection('program').doc(program_id).collection('users').where('speaker', '==', true).get();
        const resData = await Promise.all(req.docs.map(x => x.data()));
        const res = req.docs.map((doc, i) => ({
            ...resData[i],
            id: doc.id
        }));
        return this.cache('speakers_' + program_id, res);
    }

    public static async getSchedule(id?: string) {
        const program_id = id || await this.getDefaultId();
        const cached = this._cache['schedule_' + program_id];
        if (cached) {
            return cached;
        }

        const [scheduleReq, talks] = await Promise.all([firestore.collection('program').doc(program_id).collection('schedule').doc('schedule').get(), this.getTalks(id)]);

        const schedule = scheduleReq.data();

        if (!schedule || !talks) {
            return null;
        }

        const talksDict = talks.reduce((acc, talk) => {
            acc[talk.id] = talk;
            return acc;
        }, {});

        schedule.days.forEach((day: any) => {
            day.day = new Date(day.day.seconds * 1000); // convert timestamp to date obj
            day.timeslots
                .forEach((timeslot: any) =>
                    timeslot.rooms
                        .forEach((room: any) => room.talks = room.talks
                            .map((talk: any) => talksDict[talk] || null)));
        });

        return this.cache('schedule_' + program_id, schedule);
    }

    public static async updateSchedule(program: any, id?: string) {
        const program_id = id || await this.getDefaultId();

        // Date object becomes empty {} in the cloud function, pass ms instead
        const programWithMs = {
            days: program.days.map(day => {
                day.day = day.day.getTime();
                return day;
            })
        }
        const res = (await this._updateSchedule({
            id: program_id,
            program: programWithMs
        }));
        return this.cache('schedule_' + program_id, res.data);
    }

    public static async getTags(id?: string) {
        const program_id = id || await this.getDefaultId();
        const cached = this._cache['tags_' + program_id];
        if (cached) {
            return cached;
        }

        const req = await (firestore.collection('program').doc(program_id).collection('tags').doc('tags').get());
        const res = req.data();

        if (!res) {
            return [];
        }

        return this.cache('tags_' + program_id, res.tags);
    }

    public static async addTag(tag: string, id?: string) {
        const program_id = id || await this.getDefaultId();
        const res = (await this._addTag({
            id: program_id,
            tag: tag
        }));
        return this.cache('tags_' + program_id, res.data.tags);
    }

    public static async getAdmins() {
        const cached = this._cache['admins'];
        if (cached) {
            return cached;
        }

        const res = (await firestore.collection('settings').doc('admins').get()).data();
        return this.cache('admins', res.admins);
    }

    public static async isAdmin() {
        const uid = auth.currentUser && auth.currentUser.uid
        const admins = await this.getAdmins();
        
        return admins.indexOf(uid) >= 0;
    }

    public static async createProgram(id: string) {
        return await this._createProgram({
            id: id
        });
    }

    public static async getPrograms() {
        const res = (await firestore.collection('program').get());
        return res.docs.map(doc => doc.id);
    }

    public static async getProgramDuration(id?: string) {
        const program_id = id || await this.getDefaultId();
        const schedule = (await this.getSchedule(program_id));

        if (!schedule || schedule.days.length == 0) {
            return {
                from: 'TBA',
                to: 'TBA'
            };
        }
        const daysSorted = schedule.days.map(day => day.day).sort();
        const from = daysSorted[0];
        const to = daysSorted[daysSorted.length - 1];
        return {
            from, to
        };
    }

    public static async getDefaultId() {
        const cached = this._cache['activeProgram'];
        if (cached) {
            return cached;
        }

        const res = (await firestore.collection('settings').doc('activeProgram').get()).data();
        return this.cache('activeProgram', res.activeProgram);
    }

    public static async setActiveProgram(id: string) {
        return await this._setActiveProgram({
            id: id
        });
    }

    public static async getParticipants(id?: string) {
        const program_id = id || await this.getDefaultId();
        const cached = this._cache['participants_' + program_id];
        if (cached) {
            return cached;
        }

        const req = await firestore.collection('program').doc(program_id).collection('users').get();
        const resData = await Promise.all(req.docs.map(x => x.data()));
        const res = req.docs.map((doc, i) => ({
            ...resData[i],
            id: doc.id
        }));
        return this.cache('participants_' + program_id, res);
    }
}