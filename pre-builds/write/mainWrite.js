import SheetPreprocesser from "./sheetPreprocesser.js";
import { writeTalksToSpreadsheet, writeSpeakersToSpreadsheet, writeOtherEventsToSpreadsheet} from "./writeToSheet.js";

const jsonPath = '../models/data.json';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writeToGoogleSheets(path) {
    var sheetPreprocesser = new SheetPreprocesser(path);
    sheetPreprocesser.buildSheetStructures();

    var sheetTalkDict = sheetPreprocesser.getTalkSheet();
    var sheetSpeakerDict = sheetPreprocesser.getSpeakerSheet();
    var sheetOtherEventsDict = sheetPreprocesser.getOtherEventsSheet();

    // sleep inbetween writings to not overstep API write quota
    writeTalksToSpreadsheet(sheetTalkDict);
    await sleep(60000);
    writeSpeakersToSpreadsheet(sheetSpeakerDict);
    await sleep(60000);
    writeOtherEventsToSpreadsheet(sheetOtherEventsDict);
}
await writeToGoogleSheets(jsonPath);