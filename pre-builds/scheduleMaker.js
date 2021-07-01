// import sortMethods from "./scheduleSort.js";
import { sortByDay, sortByTimeStart } from "./scheduleSort.js";
import { FieldHandler, SheetValueParsingError, CriticalSheetValueMissingError, DuplicateTalkIdError, UnknownTalkIdError } from "./scheduleFieldHandler.js";
import * as fs from'fs';

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
        
        // to perform cell value validation and manipulation
        this.fieldHandler = new FieldHandler();
    }

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
     * @param {*} sheetDict dict representing data of spreadsheet. Keys are spreadsheet headers
     *                       vals are lists of spreadsheet columns
     * @param {*} isTalk boolean, true if added event is a talk, otherwise false. Defaults to false.
     */
    #addEventRow(index, sheetDict, isTalk = false) {
        // first, extract the information from spreadsheet to be put into the schedule upon building it
        var eventData = this.fieldHandler.getValidatedEventData(index, sheetDict, isTalk);
        const { day, timeStart, timeEnd, type, roomName } = eventData;
        
        // then, start to build the schedule structure bottom-up
        var dayListShortcut = this.schedule["program"]["days"];    // "shortcut" to day list
        var currentDayDict;

        // make sure there is a dictionary of this day in the schedule's list of days
        for (var i = 0; i < dayListShortcut.length; i++) {
            var dayDict = dayListShortcut[i];
            if (dayDict["day"] == day) {    
                currentDayDict = dayDict;
                break;
            }
        }
        if (!currentDayDict) {    // create new day dict in schedule if not present
            currentDayDict = {    
                "day": day,
                "slots": []
            };
            dayListShortcut.push(currentDayDict);
        }
        
        var slotListShortcut = currentDayDict["slots"];    // "shortcut" to slot list
        var currentSlotDict;
        
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
                "type": [type],     // this is strictly speaking wrong for talks, where this field should be summary of talk types. Issue handled by #fixSlotTypeForTalks()
                "rooms": []
            };
            slotListShortcut.push(currentSlotDict);
        }
        var roomListShortcut = currentSlotDict["rooms"];    // "shortcut" to room list
        var currentRoomDict;

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
        return { currentRoomDict: currentRoomDict, eventData: eventData };   // to be used for adding talks
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
        // create the event slot and extract the roomdict and the event data
        var { currentRoomDict, eventData } = this.#addEventRow(index, sheetTalkDict, true);
        const { talkId, language, difficulty, title, type, description, tags } = eventData;
        
        // register the tags of the talk to the global list of tags
        tags.forEach((tag) => {
            this.tagsGlobal.add(tag);
        });

        // we've reached the "top" of the nested structure, and may add our talk
        const talkDictNew = {
            "talkId": talkId,
            "language": language,
            "difficulty": difficulty,
            "title": title,
            "type": type,    // WARNING: this type is actually different from the slot type
            "description": description,
            "speakers": [],
            "tags": tags
        }
        var talkListShortcut = currentRoomDict["talks"];    // "shortcut" to talk list
        talkListShortcut.push(talkDictNew)
        this.talksShortcut[talkId] = talkDictNew;
        this.fieldHandler.addTalk(talkId);         // to ensure talks added in the feature has unique id
    }

    /**
     * Adds a row from the spreadsheet of speakers to the schedule
     * 
     * @param {*} index 
     * @param {*} sheetSpeakerDict dictionary representing Google sheets data, with
     *                             key = headers and val = list of column vals
     */
    #addSpeakerRow(index, sheetSpeakerDict) {
        const speakerData = this.fieldHandler.getValidatedSpeakerData(index, sheetSpeakerDict);
        const { name, info, talkIdList } = speakerData;

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
            try {
                this.#addTalkRow(i, sheetTalkDict);
            } catch(error) {
                // try to add a talk row. If a custom error is thrown, something is wrong with the values in the Google sheet
                // just skip the row in this case
                switch(true) {
                    case (error instanceof SheetValueParsingError):
                        console.error("Skips adding a talk.");
                        console.error(error);
                        break;
                    case (error instanceof CriticalSheetValueMissingError):
                        console.error("Skips adding a talk.");
                        console.error(error);
                        break;
                    case (error instanceof DuplicateTalkIdError):
                        console.error("Skips adding a talk.");
                        console.error(error);
                        break;
                    default:
                        throw error;   // If a regular error is thrown, something else has gone wrong, and error should be handled elsewhere
                }
            }
        }
        // adding speakers to talks if data structure is defined
        const numSpeakers = sheetSpeakerDict["name"].length;
        for (var i = 0; i < numSpeakers; i++) {
            try {
                this.#addSpeakerRow(i, sheetSpeakerDict);
            } catch(error) {
                // try to add a other events row. If a custom error is thrown, something is wrong with the values in the Google sheet
                // just skip the row in this case
                switch(true) {
                    case (error instanceof CriticalSheetValueMissingError):
                        console.error("Skips adding a speaker");
                        console.error(error);
                        break;
                    case (error instanceof SheetValueParsingError):
                        console.error("Skips adding a speaker");
                        console.error(error);
                        break;
                    case (error instanceof UnknownTalkIdError):
                        console.error("Skips adding a speaker");
                        console.error(error);
                        break;
                    default:
                        throw error;   // If a regular error is thrown, something else has gone wrong, and error should be handled elsewhere
                }
            }
        }
        
        // adding other non-talk slots (lunch, pause etc.)
        const numOtherEvents = sheetOtherEventDict["day"].length;
        for (var i = 0; i < numOtherEvents; i++) {
            try {
                this.#addEventRow(i, sheetOtherEventDict);
            } catch(error) {
                // try to add a other events row. If a custom error is thrown, something is wrong with the values in the Google sheet
                // just skip the row in this case
                switch(true) {
                    case (error instanceof SheetValueParsingError):
                        console.error("Skips adding an otherEvent");
                        console.error(error);
                        break;
                    case (error instanceof CriticalSheetValueMissingError):
                        console.error("Skips adding an otherEvent");
                        console.error(error);
                        break;
                    case (error instanceof DuplicateTalkIdError):
                        console.error("Skips adding an otherEvent");
                        console.error(error);
                        break;
                    default:
                        throw error;   // If a regular error is thrown, something else has gone wrong, and error should be handled elsewhere
                }
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
        var json = JSON.stringify(this.schedule); 
        fs.writeFile(filename, json, function (err) {
            if (err) throw err;
        });
    }
}
export default ScheduleMaker