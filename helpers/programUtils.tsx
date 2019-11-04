import Talk from '../models/Talk';

// Does not make a copy of the program, should be called with a copy as the parameter
function filterProgram(program, cb: (Talk) => boolean) {
  program.days.forEach(day => {
    day.timeslots.forEach(timeslot => {
      timeslot.rooms.forEach(room => {
          room.talks.forEach(talk => talk.hide = !cb(talk));
        });
    });
  });
  return program;
}

export default {
  filterProgram
}

