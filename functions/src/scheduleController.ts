import * as functions from 'firebase-functions';
import db from './db';

export async function updateSchedule(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { id, program } = data;

    const admins = (await db.collection('settings').doc('admins').get()).data();

    if (!admins || !admins.admins.includes(context.auth.uid)) {
        throw new functions.https.HttpsError('permission-denied', 'You dont have permission to update the schedule');
    }

    // Day.day is ms so it needs to be converted to date
    program.days.forEach((day: any) => day.day = new Date(day.day));

    await db.collection('program').doc(id).collection('schedule').doc('schedule').update({
        days: program.days
    });

    return program;
}