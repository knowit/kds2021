import ScheduleMaker from './scheduleMaker.js';
import { accessTalks, accessSpeakers, accessOtherEvents } from './spreadsheet.js'; 



var talkDict = await accessTalks(); 
var speakerDict = await accessSpeakers(); 
var otherDict = await accessOtherEvents();

var scheduleMaker = new ScheduleMaker();
scheduleMaker.buildSchedule(talkDict, speakerDict, otherDict);

var schedule = scheduleMaker.getScheduleCopy();
console.log(JSON.stringify(schedule), "\t"); 