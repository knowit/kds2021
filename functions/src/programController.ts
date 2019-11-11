import * as functions from 'firebase-functions';
import db from './db';

export async function createProgram(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { id } = data;

    const admins = (await db.collection('settings').doc('admins').get()).data();

    if (!admins || !admins.admins.includes(context.auth.uid)) {
        throw new functions.https.HttpsError('permission-denied', 'You dont have permission to create a program');
    }

    if ((await db.collection('program').doc(id).get()).data()) {
        throw new functions.https.HttpsError('already-exists', `Program ${id} already exists`);    
    }

    const emptySchedule = {
        days: []
    };
    const emptyTags = {
        tags: []
    };
    const emptyTalks = {
        talks: []
    };    

    const reqs = [
        db.collection('program').doc(id).set({}),
        db.collection('program').doc(id).collection('talks').doc('talks').set(emptyTalks),
        db.collection('program').doc(id).collection('tags').doc('tags').set(emptyTags),
        db.collection('program').doc(id).collection('schedule').doc('schedule').set(emptySchedule)
    ];

    await Promise.all(reqs);

    return {
        "status": "ok"
    };
}

export async function setActiveProgram(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { id } = data;

    const admins = (await db.collection('settings').doc('admins').get()).data();

    if (!admins || !admins.admins.includes(context.auth.uid)) {
        throw new functions.https.HttpsError('permission-denied', 'You dont have permission to set the active program');
    }

    const res = await db.collection('settings').doc('activeProgram').set({
        activeProgram: id
    });

    return res;
}