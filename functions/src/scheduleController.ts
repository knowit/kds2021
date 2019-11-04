import * as functions from 'firebase-functions';
import db from './db';

export async function updateSchedule(data: any, context: functions.https.CallableContext) {
    if (!context.auth) {
        throw new functions.https.HttpsError('unauthenticated', 'You are not signed in');
    }

    const { id, program } = data;

    const programRef = (await db.collection('program').doc(id).collection('schedule').doc('schedule').get()).data();

    if (!programRef || !programRef.contributors || !programRef.contributors.includes(context.auth.uid)) {
        throw new functions.https.HttpsError('permission-denied', 'You are not a contributor for this program');
    }

    // Day.day is ms so it needs to be converted to date
    program.days.forEach((day: any) => day.day = new Date(day.day));

    await db.collection('program').doc(id).collection('schedule').doc('schedule').update({
        contributors: programRef && programRef.contributors,
        days: program.days
    });

    return program;
}