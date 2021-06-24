import ScheduleMaker from './scheduleMaker.js';
import accessSpreadsheet from './spreadsheet.js'; 

//const { ScheduleMaker } = require('./scheduleMaker.js');

var spreadSheetDict = await accessSpreadsheet();
var scheduleMaker = new ScheduleMaker();
scheduleMaker.buildSchedule(spreadSheetDict, null);
var schedule = scheduleMaker.getScheduleCopy();
console.log(JSON.stringify(schedule), "\t");