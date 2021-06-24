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

    constructor() { 
        // main data structure representing the entire schedule
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
        var copy = {...this.schedule}
        return copy
    }

    /**
     * Adds a row from the spreadsheet of events to the schedule
     * Used both for talks and non-talk events, like Lunch, Pause etc.
     * This adds a slot with an "empty" room
     * 
     * @param {*} index
     * @param {*} sheetDict, dict representing data of spreadsheet. Keys are spreadsheet headers
     *                       vals are lists of spreadsheet columns
     */
    #addEventRow(index, sheetDict) {
        // first, extract the information from spreadsheet to be put into the schedule upon building it
        const dayPossibleUpper = sheetDict["day"][index];
        const timeStart = sheetDict["timeStart"][index];
        const timeEnd = sheetDict["timeEnd"][index];
        const slotType = sheetDict["type"][index];       // Welcome, Lunch, Presentation etc
        var roomName = "Room ";
        
        // Not all events have a specific room. This makes sure events without room is given a generic room name
        if (sheetDict["room"] != undefined) {
            roomName = sheetDict["room"][index];
        }

        // make sure day value is all lower case BEFORE synonym search
        // WARNING use proper try catch instead
        var day = dayPossibleUpper;
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
        if (!synonymFound) throw Error("Day value from Google sheets is not found in known synonyms of day values.");
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
            if (slotDict["timeStart"] == timeStart && slotDict["timeEnd"] == timeEnd && slotDict["type"] == slotType) {
                currentSlotDict = slotDict;
                break;
            }
        }
        if (!currentSlotDict) {    // create new slot dict in shedule if not present
            currentSlotDict = {
                "timeStart": timeStart,
                "timeEnd": timeEnd,
                "type": slotType,
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
        return currentRoomDict;   // to be used for adding talks
    }

    /**
     * Adds a row from the spreadsheet of talks to the schedule
     * Used exclusively for talks
     * 
     * @param {*} index row index of the spreadsheet
     * @param {*} sheetTalkDict dictionary representing Google sheets data, with
     *                          key = headers and val = list of column vals
     */
    #addTalkRow(index, sheetTalkDict) {
        // first, create the event slot and extract the room dict
        var currentRoomDict = this.#addEventRow(index, sheetTalkDict);

        // then, add the talk info to it
        const talkId = index + 2;       // TODO CHANGE THE WAY TALKID IS ASSIGNED
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
            "language": sheetTalkDict["language"][index],
            "difficulty": sheetTalkDict["difficulty"][index],
            "title": sheetTalkDict["title"][index],
            "type": sheetTalkDict["type"][index],    // WARNING: this type is actually different from the slot type
            "description": sheetTalkDict["description"][index],
            "speakers": [],
            "tags": []
        }
        talkListShortcut.push(talkDictNew)
        this.talksShortcut[talkId] = talkDictNew;
    }

    /**
     * Adds a row from the spreadsheet of speakers to the schedule
     * 
     * @param {*} index 
     * @param {*} sheetSpeakerDict dictionary representing Google sheets data, with
     *                             key = headers and val = list of column vals
     */
    #addSpeakerRow(index, sheetSpeakerDict) {
        const name = sheetSpeakerDict["name"][index];
        const info = sheetSpeakerDict["info"][index];
        const talkIdList = sheetSpeakerDict["talkId"][index];

        for (var i = 0; i < talkIdList.length; i++) {
            const talkId = talkIdList[i];
            var speakerList = this.talksShortcut[talkId]["speakers"];
            speakerList.push({
                "name": name,
                "info": info
            });
        }
    }
        
    /**
     * Takes all the data from the spreadsheets and constructs the entire schedule
     * The spreadsheet data is given as dictionaries with keys = headers and vals = list of column vals
     * 
     * @param {*} sheetTalkDict dict representing the talks
     * @param {*} sheetSpeakerDict dict representing the speakers
     * @param {*} sheetOtherEventDict dict representing other, non-talk events, like Pause, Lunch etc.
     */
    buildSchedule(sheetTalkDict, sheetSpeakerDict, sheetOtherEventDict) {
        // adding talks
        const numTalks = sheetTalkDict["day"].length;  // WARNING: should definitely be error checked
        for (var i = 0; i < numTalks; i++) {
            this.#addTalkRow(i, sheetTalkDict);
        }
        // adding speakers to talks if data structure is defined
        if (sheetSpeakerDict != undefined) {
            const numSpeakers = sheetSpeakerDict["name"].length;
            for (var i = 0; i < numSpeakers; i++) {
                this.#addSpeakerRow(i, sheetSpeakerDict);
            }
        }
        // adding other non-talk slots (lunch, pause etc.)
        if (sheetOtherEventDict != undefined) {
            const numOtherEvents = sheetOtherEventDict["day"].length;
            for (var i = 0; i < numOtherEvents; i++) {
                this.#addEventRow(i, sheetOtherEventDict);
            }
        }
        // we've created the schedule structure in a quite arbitrary order. Let's sort the inside of the structure
        sortByDay(this.schedule);
        sortByTimeStart(this.schedule);
    }
}
export default ScheduleMaker