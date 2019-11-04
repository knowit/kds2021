import * as functions from 'firebase-functions';
import db from './db';

export async function getSchedule(data: any, context: functions.https.CallableContext) {
    const { id } = data;

    if (!id) {
        throw new functions.https.HttpsError('invalid-argument', "Id is missing");
    }

    const res = await Promise.all([db.collection('talks').doc(id).get(), db.collection('users').doc(id).get(), db.collection('program').doc(id).get()])

    const talks = res[0].data();
    const speakers = res[1].data();
    const program = res[2].data();

    if (!talks || !speakers || !program) {
        throw new functions.https.HttpsError('not-found', id + ' is wrong or not set up correctly');
    }

    talks.talks.forEach((talk: any) => {
        talk.speaker = speakers[talk.speaker];
        talk.cospeakers = talk.cospeakers.map((speaker: string) => speakers[speaker]);
    });

    // Update schedule to use the talk objects instead of id, easier to do it server side than client side
    program.days.forEach((day: any) =>
        day.timeslots
            .forEach((timeslot: any) =>
                timeslot.rooms
                    .forEach((room: any) => room.talks = room.talks
                        .map((talk: any) => talks.talks
                            .find((t: any) => t.id === talk) || null))));

    return program;
}

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