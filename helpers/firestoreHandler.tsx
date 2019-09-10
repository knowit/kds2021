import { firestore } from '../firebase'

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

    public async update(collection: string, id: string, obj: any) {
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
        const doc = await firestore.collection(collection).add({...obj}); // Object can be of a type, must be of type object.. {...obj} removes the type
        if (!doc) {
            return null;
        }
        obj.id = doc.id;

        return this.cacheObject(collection, obj.id, obj);
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
            obj.id = doc.id;
            obj = this.cacheObject(collection, obj.id, obj);
        }
        return obj;
    }

    async getAll(collection: string) {
        let query = firestore.collection(collection);
        
        const res = await query.get();

        return res.docs.map(doc => { 
            const data = doc.data();
            data.id = doc.id;
            return this.cacheObject(collection, doc.id, data);
        });
    }

}

const speakerHandler = new FirestoreHandler();

export default speakerHandler