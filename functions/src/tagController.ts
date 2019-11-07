import * as functions from 'firebase-functions';
import db from './db';

export async function addTag(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { id, tag } = data;
    
    if (!tag) {
        throw new functions.https.HttpsError('invalid-argument', "Tag missing");
    }

    const tags = (await  db.collection('program').doc(id).collection('tags').doc('tags').get()).data();

    if (!tags) {
        throw new functions.https.HttpsError('not-found', 'Could not find tags in collection ' + id);
    }

    tags.tags.push(tag);

    await db.collection('program').doc(id).collection('tags').doc('tags').update(tags);

    return tags;
}