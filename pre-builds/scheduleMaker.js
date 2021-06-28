// import sortMethods from "./scheduleSort.js";
import { sortByDay, sortByTimeStart } from "./scheduleSort.js";
import * as fs from'fs';

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
        this.schedule["program"]["tags"] = [];
        this.schedule["program"]["days"] = [];

        // this is just to recreate the exact structure
        this.schedule["program"]["rooms"] = [1,2,3,4];                                     
        this.schedule["program"]["languages"] = ['Norwegian', 'English', 'Swedish'];

        // auxiliary data structures
        this.talksShortcut = {}        // "shortcut" from talkId to "its" dictionary, to be able to add several speakers
        this.tagsGlobal = new Set();   // to keep score of all talk tags
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
        // WARNING: assumes a slot is uniquely identified by start- and end time
        for (var i = 0; i < slotListShortcut.length; i++) {
            var slotDict = slotListShortcut[i];
            if (slotDict["timeStart"] == timeStart && slotDict["timeEnd"] == timeEnd) {
                currentSlotDict = slotDict;
                break;
            }
        }
        if (!currentSlotDict) {    // create new slot dict in shedule if not present
            currentSlotDict = {
                "timeStart": timeStart,
                "timeEnd": timeEnd,
                "type": slotType,     // this is strictly speaking wrong for talks, where this field should be summary of talk types. Issue handled by #fixSlotTypeForTalks()
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
     * @param {*} sheetTalkDict dictionary representing Google sheets data of talks, with
     *                          key = headers and val = list of column vals
     */
    #addTalkRow(index, sheetTalkDict) {
        // create the event slot and extract the room dict
        var currentRoomDict = this.#addEventRow(index, sheetTalkDict);
        var talkListShortcut = currentRoomDict["talks"];    // "shortcut" to talk list
        const talkId = sheetTalkDict["talkId"][index];

        // first check that this talk isn't registered yet
        for (var i = 0; i < talkListShortcut.length; i++) {
            var talkDict = talkListShortcut[i];
            if (talkDict["talkId"] == talkId) throw Error("Trying to add a talk with talkId=" + talkId + ", but this already exists! Please make sure all talks have unique ID.");
        }

        // register the tags of the talk to the global list of tags
        var tags = sheetTalkDict["tags"][index];

        if (tags == undefined) tags = [];    // WARNING: if now tags are listed under a talk, it comes out as undefined. This is a hacky workaround
        tags.forEach((tag) => {
            this.tagsGlobal.add(tag);
        });


        // we've reached the "top" of the nested structure, and may add our talk
        const talkDictNew = {
            "talkId": talkId,
            "language": sheetTalkDict["language"][index],
            "difficulty": sheetTalkDict["difficulty"][index],
            "title": sheetTalkDict["title"][index],
            "type": sheetTalkDict["type"][index],    // WARNING: this type is actually different from the slot type
            "description": sheetTalkDict["description"][index],
            "speakers": [],
            "tags": tags
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
     * A hacky method for setting slot type correctly.
     * 
     * When building the schedule, it's impossible in advance to know what the slot type for the talks is going to be
     * This funtion defines the slot type to be a summary of the types of talks that are present
     * Different presentation types are for instance Long presentations, Short presentations and Lightning talks
     * 
     * WARNING: assumes that the schedule data structure is already made
     */
    #fixSlotTypeForTalks() {
        this.schedule["program"]["days"].forEach((dayDict) => {
            var slotList = dayDict["slots"];
            slotList.forEach((slotDict) => {
                // it is at this level we need to set the slot type 
                var roomList = slotDict["rooms"];

                if (!roomList) throw Error("Room list is empty, this should NOT happen. Something went wrong when building the schedule.");
                if (roomList[0]["talks"] == undefined) throw Error("Room dict has undefined key='talks', this should NOT happen. Something went wrong when building the schedule.");
                if (roomList[0]["talks"].length == 0) return;    // non-talk event, so we can skip this

                // now we're sure we've hit a talk slot
                // let's enter all talks in this slot and extract their types
                var talkTypes = new Set();

                roomList.forEach((roomDict) => {
                    var talkList = roomDict["talks"];
                    talkList.forEach((talkDict) => {
                        const talkType = talkDict["type"];

                        // a typical talk type is something like "Long presentation (60 minutes)"
                        // here, we extract the text before the paranthesis only
                        const talkTypeTrimmed = talkType.split("(")[0].trim();
                        talkTypes.add(talkTypeTrimmed);
                    });
                });
                // now that all different talk types are extracted for this slot, let's insert the summary slot type
                var talkTypesList = [];
                talkTypes.forEach((talkType) => {
                    talkTypesList.push(talkType + "s");   // make talk type plural
                });
                const slotType = talkTypesList.join(" & ");
                slotDict["type"] = [slotType];    // finally, set the new slot type
            });
        });
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
        // adding the global set of tags
        this.schedule["program"]["tags"] = Array.from(this.tagsGlobal);

        // we've created the schedule structure in a quite arbitrary order. Let's sort the inside of the structure
        sortByDay(this.schedule);
        sortByTimeStart(this.schedule);

        // fix the talk slot types now that the schedule is built
        this.#fixSlotTypeForTalks();
    }

    /**
     * @param {*} filename relative path + file name
     */
    writeToJSON(filename) {
        // Stringify object with table array
        var json = JSON.stringify(this.schedule); 
        
        // Write file
        fs.writeFile(filename, json, function (err) {
            if (err) return console.log(err);
        });
    }
}
export default ScheduleMaker