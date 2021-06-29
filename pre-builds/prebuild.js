import ScheduleMaker from './scheduleMaker.js';
import SpreadsheetHandler from "./spreadsheetHandler.js"; 
import dotenv from 'dotenv';

async function prebuild() {
    // connect to the Google sheet
    try {
        dotenv.config();
        var sheetHandler = new SpreadsheetHandler(process.env.DOC_ID);
        await sheetHandler.establishConnection();
    } catch(err) {
        console.error("Couldn't establish connection to Google sheets.");
        console.error("Schedule not created.");
        console.error(err);
        return;
    }
    // if we're here, we successfully established connection

    // READ SPREADSHEET, fetch sheets as dictionaries. 
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

    // CREATE Schedule variable from dictionaries.  
    try {
        var scheduleMaker = new ScheduleMaker();
        scheduleMaker.buildSchedule(talkDict, speakerDict, otherEventDict);
    } catch(err) {
        console.error("Error occured when attempting build schedule data structure.");
        console.error("Schedule not created.");
        console.error(err);
        return;
    }

    // Convert schedule to JSON format, and write schedule to JSON-file. 
    try {
        var schedule = scheduleMaker.getScheduleCopy();
        // console.log(JSON.stringify(schedule), "\t"); 
        scheduleMaker.writeToJSON(process.env.WRITE_PATH);
    } catch(err) {
        console.error("Error occured when attempting to write schedule as a json file.");
        console.error("Schedule not created.");
        console.error(err);
        return;
    }
}
await prebuild();    // Update spreadsheet to new schedule from JSON-file. 