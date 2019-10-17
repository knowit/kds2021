import { firestore, functions } from '../firebase_utils'

class FirestoreHandler {
    private cache = {};

    private cacheObject(collection: string, id: string, obj: any) {
        if (!this.cache[collection]) {
            this.cache[collection] = {};
        }
        this.cache[collection][id] = obj;
        
        return obj;
    }
    
    private getFromCache(collection: string, id: string) {
        if (!this.cache[collection]) 
            return null;
        return this.cache[collection][id] || null;
    }

    public async updateOrCreate(collection: string, id: string, obj: any) {
        if (obj._id) { // Dont allow _id as a property. _id is used for caching and uses the documentid. 
            delete obj._id;
        }
        
        try {
            const res = await firestore.collection(collection).doc(id).set(obj);
        }
        catch(e) {
            console.error(e);
            return false;
        }

        return this.cacheObject(collection, id, obj);
    }

    public async create(collection: string, obj: any) {
        if (obj._id) { // Dont allow _id as a property. _id is used for caching and uses the documentid. 
            delete obj._id;
        }

        const doc = await firestore.collection(collection).add({...obj}); // Object can be of a type, must be of type object.. {...obj} removes the type
        if (!doc) {
            return null;
        }
        obj._id = doc.id;

        return this.cacheObject(collection, obj._id, obj);
    }

    public async getWhere(collection: string, prop: string, cond: any, val: any) {
        const query = await firestore.collection(collection).where(prop, cond, val);

        const res = await query.get();

        return res.docs.map(doc => { 
            const data = doc.data();
            data._id = doc.id;
            return this.cacheObject(collection, doc.id, data);
        });
    }

    public async get(collection: string, id: string) {
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
            obj._id = doc.id;
            obj = this.cacheObject(collection, obj._id, obj);
        }
        return obj;
    }

    async getAll(collection: string) {
        let query = firestore.collection(collection);
        
        const res = await query.get();

        return res.docs.map(doc => { 
            const data = doc.data();
            data._id = doc.id;
            return this.cacheObject(collection, doc.id, data);
        });
    }

}

const speakerHandler = new FirestoreHandler();

export default speakerHandler