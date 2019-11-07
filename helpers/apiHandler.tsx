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

    // Only calls that update, create or delete entries are done with cloud funcions for authorizing the requests.
    // Other calls can be done with firestore calls for less usage of cloud functions and better caching


    private static _cache = {};

    private static cache(key: string, obj: any) {
        this._cache[key] = obj;
        return obj;
    }

    public static async addTalk(talk: Talk) {
        this.cache['talks'] = null; // TODO: add to cached array instead
        return await this._addTalk({
            talk, id: config.id
        });
    }

    public static async updateTalk(talk: Talk) {
        this.cache['talks'] = null; // TODO: update correct index
        return await this._updateTalk({
            talk, id: config.id
        });
    }

    public static async getTalks() {
        const cached = this._cache['talks'];
        if (cached) {
            return cached;
        }

        const talksPromise = firestore.collection('program').doc(config.id).collection('talks').doc('talks').get();

        const [speakers, talksReq] = await Promise.all([this.getSpeakers(), talksPromise]);
        const talks = await talksReq.data();

        const speakersDict = speakers.reduce((acc, speaker) => {
            acc[speaker.id] = speaker;
            return acc;
        }, {});

        talks.talks.forEach(talk => {
            talk.speaker = speakersDict[talk.speaker];
            talk.cospeakers = talk.cospeakers.map((speaker: string) => speakersDict[speaker]);
        });

        return this.cache('talks', talks.talks);
    }

    public static async getTalk(id: string) {
        const talks = await this.getTalks();

        const talk = talks.find(talk => talk.id == id);
        return talk;
    }

    public static async addUser(user: any) {
        return (await this._addUser({
            user, id: config.id
        })).data;
    }

    public static async isSpeaker() {
        try {
            const user = auth.currentUser;
            const req = await firestore.collection('program').doc(config.id).collection('users').doc(user && user.uid).get();
            const res = req.data();
            return this.cache('isSpeaker', res.speaker);
        }
        catch (e) {
            return false; 
        }
    }

    public static async getSpeakers() {
        const cached = this._cache['speakers'];
        if (cached) {
            return cached;
        }

        const req = await firestore.collection('program').doc(config.id).collection('users').where('speaker', '==', true).get();
        const resData = await Promise.all(req.docs.map(x => x.data()));
        const res = req.docs.map((doc, i) => ({
            ...resData[i],
            id: doc.id
        }));
        return this.cache('speakers', res);
    }

    public static async getSchedule() {
        const cached = this._cache['schedule'];
        if (cached) {
            return cached;
        }

        const [scheduleReq, talks] = await Promise.all([firestore.collection('program').doc(config.id).collection('schedule').doc('schedule').get(), this.getTalks()]);

        const schedule = await scheduleReq.data();

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

        return this.cache('schedule', schedule);
    }

    public static async updateSchedule(program: any) {
        // Date object becomes empty {} in the cloud function, pass ms instead
        const programWithMs = {
            days: program.days.map(day => {
                day.day = day.day.getTime();
                return day;
            })
        }
        const res = (await this._updateSchedule({
            id: config.id,
            program: programWithMs
        }));
        return this.cache('schedule', res.data);
    }

    public static async getTags() {
        const cached = this._cache['tags'];
        if (cached) {
            return cached;
        }

        const req = await (firestore.collection('program').doc(config.id).collection('tags').doc('tags').get());
        const res = req.data();

        return this.cache('tags', res.tags);
    }

    public static async addTag(tag: string) {
        const res = (await this._addTag({
            id: config.id,
            tag: tag
        }));
        return this.cache('tags', res.data.tags);
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
}