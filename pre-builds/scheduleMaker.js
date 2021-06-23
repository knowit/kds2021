// import sortMethods from "./scheduleSort.js";
import { sortByDay, sortByTimeStart } from "./scheduleSort.js";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * A class responsible for building a dictionary representing the schedule.
 * The goal is for the dictionary to be as close as possible as the original data.json file.
 */
class ScheduleMaker {


    /**
     * @param {*} spreadsheetDict data structure representing the spreadsheet of talks
     *                            should be a dict with keys = headers and vals = columns
     */
    constructor(spreadsheetDict) {
        // main data structures representing the entire schedule
        this.spreadsheetDict = spreadsheetDict;
        this.schedule = {"program": {} };
        this.schedule["program"]["days"] = [];

        // auxiliary data structures
        this.talksShortcut = {}  // "shortcut" from talkId to "its" dictionary, to be able to add several speakers
    }

    static #dayOfWeekSynonyms = {
        "monday": ["monday", "mandag"],
        "tuesday": ["tuesday", "tirsdag"],
        "wednesday": ["wednesday", "onsdag"],
        "thursday": ["thursday", "torsdag"],
        "friday": ["friday", "fredag"],
        "saturday": ["saturday", "lørdag"],
        "sunday": ["sunday", "søndag"]
    };

    getScheduleCopy() {
        return this.schedule;
        // var copy = {...this.schedule}
        // return copy
    }

    /**
     * Adds a row from the spreadsheet to the schedule
     * 
     * @param {*} index row index of the spreadsheet
     */
    #addTalkSpreadsheetRow(index) {
        // first, extract the information from spreadsheet to be put into the schedule upon building it
        const dayPossibleUpper = this.spreadsheetDict["day"][index];
        const timeStart = this.spreadsheetDict["timeStart"][index];
        const timeEnd = this.spreadsheetDict["timeEnd"][index];
        const presentationType = this.spreadsheetDict["type"][index];
        const roomName = this.spreadsheetDict["room"][index];
        const talkId = index;     // WARNING: this is fine as long as the spreadsheet contains only talks, and not pause, lunsh etc.

        // make sure day value is all lower case BEFORE synonym search
        // WARNING use proper try catch instead
        var day = dayPossibleUpper;//null;
        if (dayPossibleUpper != null) {
            day = dayPossibleUpper.toLowerCase();
        }
        
        // then, start to build the schedule structure bottom-up
        var dayListShortcut = this.schedule["program"]["days"];    // "shortcut" to day list
        var currentDayDict = null;
        
        // first, extract synonym for day name for language concistency (norwegian, english)
        var synonymFound = false;
        for (const [dayName, daySynonyms] of Object.entries(ScheduleMaker.#dayOfWeekSynonyms)) {
            if (daySynonyms.includes(day)) {
                day = dayName;   // set current day to it's standard synonym
                synonymFound = true;
            }
        }
        if (!synonymFound) throw "Day value from Google sheets is not found in known synonyms of day values."
        day = capitalizeFirstLetter(day);    // After synonym search, capitalize day name for backward compatability (data.json)

        // make sure there is a dictionary of this day in the schedule's list of days
        for (var i = 0; i < dayListShortcut.length; i++) {
            var dayDict = dayListShortcut[i];
            if (dayDict["day"] == day) {    
                currentDayDict = dayDict;
                break;
            }
        }
        if (!currentDayDict) {    // create new day dict in schedule if not present
            //console.log("Day " + day + " did not already exist. Created new for index " + index);
            //console.log("Daydict:" + currentDayDict + "\n");
            currentDayDict = {    
                "day": day,
                "slots": []
            };
            dayListShortcut.push(currentDayDict);
        }
        
        var slotListShortcut = currentDayDict["slots"];    // "shortcut" to slot list
        var currentSlotDict = null;
        
        // make sure there is a dictionary of this slot in the schedule's list of slots
        // WARNING: assumes a slot is uniquely identified by time and presentation type
        for (var i = 0; i < slotListShortcut.length; i++) {
            var slotDict = slotListShortcut[i];
            if (slotDict["timeStart"] == timeStart && slotDict["timeEnd"] == timeEnd && slotDict["type"] == presentationType) {
                currentSlotDict = slotDict;
                break;
            }
        }
        if (!currentSlotDict) {    // create new slot dict in shedule if not present
            currentSlotDict = {
                "timeStart": timeStart,
                "timeEnd": timeEnd,
                "type": presentationType,
                "rooms": []
            };
            slotListShortcut.push(currentSlotDict);
        }
        var roomListShortcut = currentSlotDict["rooms"];    // "shortcut" to room list
        var currentRoomDict = null;

        // make sure there is a dictionary of this room in the schedule's list of rooms
        for (var i = 0; i < roomListShortcut.length; i++) {
            var roomDict = roomListShortcut[i]
            if (roomDict["name"] == roomName) {
                currentRoomDict = roomDict;
                break;
            }
        }
        if (!currentRoomDict) {    // create new room dict in shedule if not present
            currentRoomDict = {
                "name": roomName,
                "talks": []
            };
            roomListShortcut.push(currentRoomDict);
        }

        // WARNING: slots that don't represent talks, like Pause, should actually stop/return here.
        // THIS HAS TO BE DELT WITH IT SOME WAY

        var talkListShortcut = currentRoomDict["talks"];    // "shortcut" to talk list
        for (var i = 0; i < talkListShortcut.length; i++) {
            var talkDict = talkListShortcut[i];
            if (talkDict["talkId"] == talkId) {
                // WARNING: the talk we are trying to add already exists! Should not happen. Handle this properly!
                console.log("WARNING: The talk you're trying to add already exists.")
                return
            }
        }
        // we've reached the "top" of the nested structure, and may add our talk
        const talkDictNew = {
            "talkId": talkId,
            "language": this.spreadsheetDict["language"][index],
            "difficulty": this.spreadsheetDict["difficulty"][index],
            "title": this.spreadsheetDict["title"][index],
            "type": this.spreadsheetDict["type"][index],    // WARNING: this type is actually different from the slot type
            "description": this.spreadsheetDict["description"][index],
            "speakers": [],
            "tags": []
        }
        talkListShortcut.push(talkDictNew)
        this.talksShortcut["talkId"] = talkDictNew;
    }
        

    buildSchedule() {
        const numTalks = this.spreadsheetDict["day"].length;  // WARNING: should definitely be error checked
        for (var i = 0; i < numTalks; i++) {
            //console.log("Adding new row...");
            this.#addTalkSpreadsheetRow(i);
        }

        // IF YOU'RE ADDING SOME OTHER SLOTS THAN TALKS (LIKE PAUSES) TO THE SCHEDULE, DO IT HERE

        // we've created the schedule structure in a quite arbitrary order. Let's sort the inside of the structure
        sortByDay(this.schedule);
        sortByTimeStart(this.schedule);
    }
}
export default ScheduleMaker