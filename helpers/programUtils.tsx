import FirestoreHandler from './firestoreHandler';
import ProgramBuilderDay from '../pages/components/ProgramBuilderDay';
import _ from 'lodash';

async function loadTalks(program) {
  const talks = getTalks(program); // Will only get the id's and not objects
  if (talks.length > 0 && typeof talks[0] === 'string') {
    const talkObjs = await Promise.all(talks.map(talk => FirestoreHandler.get('talks', talk)));

    const talksDict = talkObjs.reduce((acc, talk: any) => {
      acc[talk.id] = talk;
      return acc;
    }, {});

    program.days.forEach(day => day.timeslots
      .forEach(timeslot => timeslot.rooms
        .forEach(room => room.talks
          .forEach((talk, index, arr) => {
            arr[index] = talksDict[talk]
          }))));
  }

  return program;
}

async function loadProgram(id) {
  // Make a copy to avoid changing the cache
  const program = _.cloneDeep(await FirestoreHandler.get('program', id));


  await loadTalks(program);
  fixDates(program);

  return program;
}

// Firestore uses Timestamp so it needs to be converted to Date objects
function fixDates(program) {
  program.days.forEach(day => {
    day.day = new Date(day.day.seconds * 1000);
  })
}

function getTalks(program) {
  return program.days.map(day => day.timeslots
    .map(timeslot => timeslot.rooms
      .map(room => room.talks))).flat(Infinity)
}

export default {
  getTalks,
  loadProgram
}

