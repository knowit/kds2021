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
