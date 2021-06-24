import ScheduleMaker from './scheduleMaker.js';
import accessSpreadsheet from './spreadsheet.js'; 

//const { ScheduleMaker } = require('./scheduleMaker.js');

var spreadSheetDict = await accessSpreadsheet();
var scheduleMaker = new ScheduleMaker(spreadSheetDict);
scheduleMaker.buildSchedule();
var schedule = scheduleMaker.getScheduleCopy();
console.log(JSON.stringify(schedule), "\t");