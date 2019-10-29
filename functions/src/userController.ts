import * as functions from 'firebase-functions';
import db from './db';

export async function addUser(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { user, id } = data;

    if (!user) {
        throw new functions.https.HttpsError('invalid-argument', "User object missing");
    }
    if (!user.name) {
        throw new functions.https.HttpsError('invalid-argument', "Missing name");
    }

    const users = (await db.collection('users').doc(id).get()).data();

    if (!users) {
        throw new functions.https.HttpsError('not-found', 'Could not find talks in collection ' + id);
    }

    users[context.auth.uid] = user;

    await db.collection('users').doc(id).update(users);

    return user;
}


export async function getSpeakers(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { id } = data;

    const users = (await db.collection('users').doc(id).get()).data();

    if (!users) {
        throw new functions.https.HttpsError('not-found', 'Could not find talks in collection ' + id);
    }

    return Object.keys(users).filter(user => users[user].speaker).map(user => ({
        ...users[user],
        id: user
    }));
}


export async function isSpeaker(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { id } = data;

    const users = (await db.collection('users').doc(id).get()).data();

    if (!users) {
        throw new functions.https.HttpsError('not-found', 'Could not find talks in collection ' + id);
    }

    return users[context.auth.uid] && users[context.auth.uid].speaker;
}
