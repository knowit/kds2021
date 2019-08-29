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
        return this.cache[collection][id];
    }

    public async get(collection, id) {
        let obj = this.getFromCache(collection, id);
 
        if (!obj) {
            const doc = await firestore.collection(collection).doc(id).get();
            if (!doc) {
                return null;
            }
            obj = doc.data();
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
speakerHandler.getAll('speakers'); // cache all speakers?
speakerHandler.getAll('talks'); // cache all talks?
speakerHandler.getAll('tags'); // cache all tags?


export default speakerHandler