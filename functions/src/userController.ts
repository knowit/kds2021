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

    await db.collection('program').doc(id).collection('users').doc(context.auth.uid).set(user);

    return user;
}

export async function isAdmin(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const res = (await db.collection('settings').doc('admins').get()).data();
    const admins = res && res.admins;
    return admins.includes(context.auth.uid);
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
