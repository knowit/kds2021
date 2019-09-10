import FirestoreHandler from './firestoreHandler';
import ProgramBuilderDay from '../pages/components/ProgramBuilderDay';
import _ from 'lodash';
import Talk from '../models/Talk';

async function loadTalks(program) {
  const talks = getTalks(program); // Will only get the id's and not objects
  if (talks.length > 0 && typeof talks[0] === 'string') {
    const talkObjs = await Promise.all(talks.map(talk => FirestoreHandler.get('talks', talk)));

    const talksDict = talkObjs.reduce((acc, talk: any) => {
      if (talk) {
        acc[talk._id] = talk;
      }
      else {
        console.log("Talk in program was not found in db, it might have been deleted after the program was created");
      }
      return acc;
    }, {});

    program.days.forEach(day => day.timeslots
      .forEach(timeslot => timeslot.rooms
        .forEach(room =>
          room.talks = room.talks
            .map(talk => talksDict[talk])
            .filter(talk => talk != null))));
  }

  return program;
}

async function loadProgram(id) {
  // Make a copy to avoid changing the cache
  const program = _.cloneDeep(await FirestoreHandler.get('program', id));

  console.log(getTalks(program));
  await loadTalks(program);
  fixDates(program);

  return program;
}

// Firestore uses Timestamp so it needs to be converted to Date objects
function fixDates(program) {
  program.days.forEach(day => {
    if (!(day.day instanceof Date)) {
      day.day = new Date(day.day.seconds * 1000);
    }
  })
}

function getTalks(program) {
  return program.days.map(day => day.timeslots
    .map(timeslot => timeslot.rooms
      .map(room => room.talks))).flat(Infinity)
    .filter(talk => talk != null);
}

// Does not make a copy of the program, should be called with a copy as the parameter
function filterProgram(program, cb: (Talk) => boolean) {
  program.days = program.days.map(day => {
    day.timeslots.map(timeslot => {
      timeslot.rooms = timeslot.rooms.map(room => {
        room.talks = room.talks.filter(talk => cb(talk));
        return room;
      });
      return timeslot;
    });
    return day;
  });
  return program;
}

export default {
  getTalks,
  loadProgram,
  filterProgram
}

