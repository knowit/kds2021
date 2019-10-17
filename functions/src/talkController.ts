import * as functions from 'firebase-functions';
import db from './db';
import uuid from 'uuid/v1';

export async function getTalks(data: any, context: functions.https.CallableContext) {
    const { id } = data;

    if (!id) {
        throw new functions.https.HttpsError('invalid-argument', "Id is missing");
    }

    const res = await Promise.all([db.collection('talks').doc(id).get(), db.collection('users').doc(id).get()])

    const talks = res[0].data();
    const speakers = res[1].data();

    if (!talks || !speakers) {
        throw new functions.https.HttpsError('not-found', id + ' is wrong or not set up correctly');
    }

    talks.talks.forEach((talk: any) => {
        talk.speaker = speakers[talk.speaker];
        talk.cospeakers = talk.cospeakers.map((speaker: string) => speakers[speaker]);
    });

    return talks;
}

export async function addTalk(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { talk, id } = data;

    if (!talk || !id) {
        throw new functions.https.HttpsError('invalid-argument', "Talk object or id is missing");
    }

    const talks = (await db.collection('talks').doc(id).get()).data();

    if (!talks || !talks.talks) {
        throw new functions.https.HttpsError('not-found', 'Could not find talks in collection ' + id);
    }

    talk.id = uuid();

    talks.talks.push(talk);


    await db.collection('talks').doc(id).update(talks);

    return talks;
}