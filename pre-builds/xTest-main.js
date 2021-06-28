import SheetPreprocesser from "./xTest-sheetPreprocesser.js";
import { writeTalksToSpreadsheet, writeSpeakersToSpreadsheet, writeOtherEventsToSpreadsheet} from "./xTestWriteToSheet.js";

// const docId = '1its1GjbFAVOTOhqGR6KZJ2kPkgrfBbqqPzWnbMyiBP4';   // string from Google docs, TODO: put inside .env
const jsonPath = '../models/data.json';

async function writeToGoogleSheets(path) {
    var sheetPreprocesser = new SheetPreprocesser(path);
    sheetPreprocesser.buildSheetStructures();
    
    // HAD TO UNCOMMENT TO NOT OVERSTEP API QUOTA 

    // var sheetTalkDict = sheetPreprocesser.getTalkSheet();
    // var sheetSpeakerDict = sheetPreprocesser.getSpeakerSheet();
    // var sheetOtherEventsDict = sheetPreprocesser.getOtherEventsSheet();

    // writeTalksToSpreadsheet(sheetTalkDict);
    // writeSpeakersToSpreadsheet(sheetSpeakerDict);
    // writeOtherEventsToSpreadsheet(sheetOtherEventsDict);

}
await writeToGoogleSheets(jsonPath);