import { functions } from '../firebase_utils';
import Talk from '../models/Talk';
import config from '../config.json';
import { firestore } from 'firebase';

export default class ApiHandler {
    private static readonly _addTalk = functions.httpsCallable('addTalk');
    private static readonly _getTalks = functions.httpsCallable('getTalks');
    private static readonly _addUser = functions.httpsCallable('addUser');
    private static readonly _isSpeaker = functions.httpsCallable('isSpeaker');
    private static readonly _getSpeakers = functions.httpsCallable('getSpeakers');
    private static readonly _getSchedule = functions.httpsCallable('getSchedule');
    private static readonly _updateSchedule = functions.httpsCallable('updateSchedule');
    private static readonly _getTags = functions.httpsCallable('getTags');
    private static readonly _addTag = functions.httpsCallable('addTag');

    private static _cache = {};

    private static cache(key: string, obj: any) {
        this._cache[key] = obj;
        return obj;
    }

    public static async addTalk(talk: Talk) {
        return this.cache('talks', (await this._addTalk({
            talk, id: config.id
        })).data);
    }

    public static async getTalks() {
        const cached = this._cache['talks'];
        if (cached) {
            return cached;
        }
        return this.cache('talks', (await this._getTalks({
            id: config.id
        })).data);
    }

    public static async addUser(user: any) {
        return (await this._addUser({
            user, id: config.id
        })).data;
    }

    public static async isSpeaker() {
        return (await this._isSpeaker({
            id: config.id
        })).data;
    }

    public static async getSpeakers() {
        const cached = this._cache['speakers'];
        if (cached) {
            return cached;
        }

        return this.cache('speakers', (await this._getSpeakers({
            id: config.id
        })).data);
    }

    public static async getSchedule() {
        const cached = this._cache['schedule'];
        if (cached) {
            return cached;
        }

        const res = (await this._getSchedule({
            id: config.id
        })).data;
        res.days.forEach(day => day.day = new Date(day.day._seconds * 1000)); // Need to convert timestamp to date
        return this.cache('schedule', res);
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
        const res = (await this._getTags({
            id: config.id
        }));
        return this.cache('tags', res.data.tags);
    }

    public static async addTag(tag: string) {
        const res = (await this._addTag({
            id: config.id,
            tag: tag
        }));
        return this.cache('tags', res.data.tags);
    }
}