import ScheduleMaker from './scheduleMaker.js';
import { accessTalks, accessSpeakers } from './spreadsheet.js'; 

//const { ScheduleMaker } = require('./scheduleMaker.js');

var talkDic = await accessTalks(); 
var speakerDic = await accessSpeakers(); 
console.log("\n", talkDic); 
console.log("\n", speakerDic); 

var scheduleMaker = new ScheduleMaker(talkDic);
scheduleMaker.buildSchedule();
var schedule = scheduleMaker.getScheduleCopy();
console.log(JSON.stringify(schedule), "\t"); 