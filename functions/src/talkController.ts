import * as functions from 'firebase-functions';
import db from './db';
import uuid from 'uuid/v1';

export async function addTalk(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { talk, id } = data;

    if (!talk || !id) {
        throw new functions.https.HttpsError('invalid-argument', "Talk object or id is missing");
    }

    const talks = (await db.collection('program').doc(id).collection('talks').doc('talks').get()).data();

    if (!talks || !talks.talks) {
        throw new functions.https.HttpsError('not-found', 'Could not find talks in collection ' + id);
    }

    talk.id = uuid();

    talks.talks.push(talk);
    
    await db.collection('program').doc(id).collection('talks').doc('talks').update(talks);

    return talks;
}

export async function updateTalk(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { talk, id } = data;

    if (!talk || !id) {
        throw new functions.https.HttpsError('invalid-argument', "Talk object or id is missing");
    }

    const talks = (await db.collection('program').doc(id).collection('talks').doc('talks').get()).data();

    if (!talks || !talks.talks) {
        throw new functions.https.HttpsError('not-found', 'Could not find talks in collection ' + id);
    }

    const dbTalkIndex = talks.talks.findIndex((t: any) => t.id === talk.id);
    const dbTalk = talks.talks[dbTalkIndex];

    if (dbTalk.speaker !== context.auth.uid && !dbTalk.cospeakers.includes(context.auth.uid)) {
        throw new functions.https.HttpsError('permission-denied', 'You dont have permission to update this talk');
    }

    talks.talks[dbTalkIndex] = talk;
    
    await db.collection('program').doc(id).collection('talks').doc('talks').update(talks);

    return talks;
}

