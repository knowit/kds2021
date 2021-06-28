import ScheduleMaker from './scheduleMaker.js';
import SpreadsheetHandler from "./spreadsheetHandler.js";


const docId = '1its1GjbFAVOTOhqGR6KZJ2kPkgrfBbqqPzWnbMyiBP4';   // string from Google docs, TODO: put inside .env
const jsonPath = '../models/hello.json';

async function prebuild() {
    // connect to the Google sheet
    try {
        var sheetHandler = new SpreadsheetHandler(docId);
        await sheetHandler.establishConnection();
    } catch(err) {
        console.error("Couldn't establish connection to Google sheets.");
        console.error("Schedule not created.");
        console.error(err);
        return;
    }
    // if we're here, we successfully established connection
    try {
        // first, get the spreadsheet data
        var talkDict = await sheetHandler.accessTalks();
        var speakerDict = await sheetHandler.accessSpeakers();
        var otherEventDict = await sheetHandler.accessOtherEvents();
    } catch(err) {
        console.error("Error occured when attempting to fetch Google sheets data.");
        console.error("Schedule not created.");
        console.error(err);
        return;
    }
    try {
        // then, create the schedule
        var scheduleMaker = new ScheduleMaker();
        scheduleMaker.buildSchedule(talkDict, speakerDict, otherEventDict);
    } catch(err) {
        console.error("Error occured when attempting build schedule data structure.");
        console.error("Schedule not created.");
        console.error(err);
        return;
    }
    try {
        var schedule = scheduleMaker.getScheduleCopy();
        console.log(JSON.stringify(schedule), "\t"); 
        scheduleMaker.writeToJSON(jsonPath);
    } catch(err) {
        console.error("Error occured when attempting to write schedule as a json file.");
        console.error("Schedule not created.");
        console.error(err);
        return;
    }
}
await prebuild();


