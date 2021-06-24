import ScheduleMaker from './scheduleMaker.js';
import { accessTalks, accessSpeakers } from './spreadsheet.js'; 


var talkDict = await accessTalks(); 
var speakerDict = await accessSpeakers(); 
// console.log("\n", talkDic); 
// console.log("\n", speakerDic); 

var scheduleMaker = new ScheduleMaker();
scheduleMaker.buildSchedule(talkDict, speakerDict);

var schedule = scheduleMaker.getScheduleCopy();
console.log(JSON.stringify(schedule), "\t"); 