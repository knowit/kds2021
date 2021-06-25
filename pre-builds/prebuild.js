import ScheduleMaker from './scheduleMaker.js';
import SpreadsheetHandler from "./spreadsheetHandler.js";


const docId = '1its1GjbFAVOTOhqGR6KZJ2kPkgrfBbqqPzWnbMyiBP4';   // string from Google docs, TODO: put inside .env
const jsonPath = '../models/hello.json';

// connect to the Google sheet
var sheetHandler = new SpreadsheetHandler(docId);
var hasEstablishedConnection = await sheetHandler.establishConnection();

if (hasEstablishedConnection) {
    // first, retrieve the spreadsheets
    var talkDict = await sheetHandler.accessTalks();
    var speakerDict = await sheetHandler.accessSpeakers();
    var otherEventDict = await sheetHandler.accessOtherEvents();

    // then, create the schedule
    var scheduleMaker = new ScheduleMaker();
    scheduleMaker.buildSchedule(talkDict, speakerDict, otherEventDict);
    
    var schedule = scheduleMaker.getScheduleCopy();
    console.log(JSON.stringify(schedule), "\t"); 
    scheduleMaker.writeToJSON(jsonPath);
} else {
    console.error("Couldn't establish connetion to the Google spreadsheet.")
}

// writeToJSON('../models/hello.json');
