import { firestore } from '../firebase'

class FirestoreHandler {
    private cache = {};

    private cacheObject(collection, speaker, id) {
        if (!this.cache[collection]) {
            this.cache[collection] = {};
        }
        this.cache[collection][id] = speaker;
        return speaker;
    }
    
    private getFromCache(collection, id) {
        if (!this.cache[collection]) 
            return null;
        return this.cache[collection][id] || null;
    }

    public async update(collection, id, obj) {
        try {
            const res = await firestore.collection(collection).doc(id).set(obj);
        }
        catch(e) {
            console.error(e);
            return false;
        }

        return this.cacheObject(collection, id, obj);
    }

    public async create(collection, obj) {
        const doc = await firestore.collection(collection).add({...obj}); // Object can be of type Talk, must be of type object.. {...obj} removes the type
        if (!doc) {
            return null;
        }
        obj.id = doc.id;

        return this.cacheObject(collection, obj.id, obj);
    }

    public async get(collection, id) {
        let obj = this.getFromCache(collection, id);
 
        if (!obj) {
            const doc = await firestore.collection(collection).doc(id).get();
            if (!doc) {
                return null;
            }
            obj = doc.data();
            if (!obj) {
                return null;
            }
            obj.id = doc.id;
            obj = this.cacheObject(collection, obj, obj.id);
        }

        return obj;
    }


    async getAll(collection, skip: number = 0, take: number = null) {
        let query = firestore.collection(collection).orderBy('name').startAt(skip);
        if (take) {
            query = query.limit(take);
        }
        const res = await query.get();

        return res.docs.map(doc => { 
            const data = doc.data();
            data.id = doc.id;
            return this.cacheObject(collection, data, doc.id);
        });
    }

}

const speakerHandler = new FirestoreHandler();

export default speakerHandler