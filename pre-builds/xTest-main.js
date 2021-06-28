import SheetPreprocesser from "./xTest-sheetPreprocesser.js";
import spreadsheetWriter from "./xTestWriteToSheet.js";

// const docId = '1its1GjbFAVOTOhqGR6KZJ2kPkgrfBbqqPzWnbMyiBP4';   // string from Google docs, TODO: put inside .env
const jsonPath = '../models/data.json';

async function writeToGoogleSheets(path) {
    var sheetPreprocesser = new SheetPreprocesser(path);
    sheetPreprocesser.buildSheetStructures();
    var talkDict = sheetPreprocesser.getTalkSheet();
    var speakerDict = sheetPreprocesser.getSpeakerSheet();
    var otherEventsDict = sheetPreprocesser.getOtherEventsSheet();

    spreadsheetWriter(talkDict, speakerDict, otherEventsDict);


}
await writeToGoogleSheets(jsonPath);