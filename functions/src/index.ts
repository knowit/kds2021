import * as functions from 'firebase-functions';
import * as ScheduleController from './scheduleController';
import * as TalkController from './talkController';
import * as UserController from './userController';
import * as TagController from './tagController';

export const updateSchedule = functions.region('europe-west1').https.onCall(ScheduleController.updateSchedule);

export const getSchedule = functions.region('europe-west1').https.onCall(ScheduleController.getSchedule);

export const getTalks = functions.region('europe-west1').https.onCall(TalkController.getTalks);

export const addTalk = functions.region('europe-west1').https.onCall(TalkController.addTalk);

export const addUser = functions.region('europe-west1').https.onCall(UserController.addUser);

export const isAdmin = functions.region('europe-west1').https.onCall(UserController.isAdmin);

export const getSpeakers = functions.region('europe-west1').https.onCall(UserController.getSpeakers);

export const isSpeaker = functions.region('europe-west1').https.onCall(UserController.isSpeaker);

export const getTags = functions.region('europe-west1').https.onCall(TagController.getTags);

export const addTag = functions.region('europe-west1').https.onCall(TagController.addTag);
