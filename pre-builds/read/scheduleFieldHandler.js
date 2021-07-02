import SpreadsheetHandler from "./spreadsheetHandler.js";

export class SheetValueParsingError extends Error {
    constructor(...params) {
        super(...params);
        if (Error.captureStackTrace) Error.captureStackTrace(this, SheetValueParsingError);
        this.name = "SheetValueParsingError";
    }
}

export class CriticalSheetValueMissingError extends Error {
    constructor(...params) {
        super(...params);
        if (Error.captureStackTrace) Error.captureStackTrace(this, CriticalSheetValueMissingError);
        this.name = "CriticalSheetValueMissingError";
    }
}

export class DuplicateTalkIdError extends Error {
    constructor(...params) {
        super(...params);
        if (Error.captureStackTrace) Error.captureStackTrace(this, DuplicateTalkIdError);
        this.name = "DuplicateTalkIdError";
    }
}

export class UnknownTalkIdError extends Error {
    constructor(...params) {
        super(...params);
        if (Error.captureStackTrace) Error.captureStackTrace(this, UnknownTalkIdError);
        this.name = "UnknownTalkIdError";
    }
}

/**
 * A class responsible for validating and modifying values in the Google spreadsheet to fit
 * the rest of the apps requirements.
 * If a value don't meet up with the requirements, a proper error should be thrown.
 */
export class FieldHandler {

    constructor() {
        this.talkIds = new Set();   // set of all talk ids to validate that talkIds are unique
    }

    static #dayOfWeekSynonyms = {    // to support both norwegian/english
        "Monday": ["monday", "mandag"],
        "Tuesday": ["tuesday", "tirsdag"],
        "Wednesday": ["wednesday", "onsdag"],
        "Thursday": ["thursday", "torsdag"],
        "Friday": ["friday", "fredag"],
        "Saturday": ["saturday", "lørdag"],
        "Sunday": ["sunday", "søndag"]
    };

    /**
     * Should be called when a new talk is added to the schedule
     * 
     * @param {*} talkId of the talk added
     */
    addTalk(talkId) {
        this.talkIds.add(talkId);
    }

    /**
     * Used to access a list within a dictionary without crashing the program if key is not found
     * WARNING: This depends on the header names of the Google sheet, so headerName must match the actual headers
     * 
     * @param {*} index 
     * @param {*} sheetDict 
     * @param {*} headerName 
     * @returns 
     */
    #accessSheetDictSafely(index, sheetDict, headerName) {
        try {
            return sheetDict[headerName][index];
        } catch(error) {
            return undefined;
        }
    }

    /**
     * Validates that the time entry is written as an integer, possibly containing : or ;
     * Appropriate errors are thrown if entry doesn't meet the conditions.
     * 
     * @param {*} index
     * @param {*} sheetDict 
     * @param {*} headerName, header name of sheetDict, should be "timeStart" or "timeEnd"
     * @returns modified time field, an integer
     */
    #validateAndStandardizeTime(index, sheetDict, headerName) {
        let time = this.#accessSheetDictSafely(index, sheetDict, headerName);
        if (time == undefined) {
            throw new CriticalSheetValueMissingError("Time field is empty");
        }
        time = parseInt(time.replace(":", "").replace(";", ""));
        if (Number.isNaN(time)) {
            throw new SheetValueParsingError("Time field passed cannot be parsed, must be integer");
        }
        return time;
    }

    /**
     * Validates that the day entry is actually a valid day
     * Norwegian and english is allowed, also upper- and lower case.
     * Appropriate errors are thrown if entry doesn't meet the conditions 
     * 
     * @param {*} index 
     * @param {*} sheetDict 
     * @returns Standardized day field
     */
    #validateAndStandardizeDay(index, sheetDict) {
        let day = this.#accessSheetDictSafely(index, sheetDict, SpreadsheetHandler.talkHeaders.day);
        if (day == undefined) {
            throw new CriticalSheetValueMissingError("Day field is empty");
        }
        day = day.toLowerCase();   // day is lower case before synonym search
        
        // first, extract synonym for day name for language concistency (norwegian, english)
        var synonymFound = false;
        for (const [dayName, daySynonyms] of Object.entries(FieldHandler.#dayOfWeekSynonyms)) {
            if (daySynonyms.includes(day)) {
                day = dayName;   // set current day to it's standard synonym
                synonymFound = true;
            }
        }
        if (!synonymFound) {
            throw new SheetValueParsingError("Day value from Google sheets is not found in known synonyms of day values.");
        }
        return day
    }

    /**
     * Validates that the talkId entry is actually a number and unique.
     * Appropriate errors are thrown if entry doesn't meet the conditions 
     * 
     * @param {*} index 
     * @param {*} sheetDict 
     * @returns talkId
     */
    #validateAndStandardizeTalkId(index, sheetDict) {
        let talkId = this.#accessSheetDictSafely(index, sheetDict, SpreadsheetHandler.talkHeaders.talkId);
        if (talkId == undefined) {
            throw new CriticalSheetValueMissingError("TalkId field is empty");
        }
        talkId = parseInt(talkId);
        if (Number.isNaN(talkId)) {
            throw new SheetValueParsingError("TalkId field cannot be parsed, must be integer");
        }
        if (this.talkIds.has(talkId)) {
            throw new DuplicateTalkIdError("TalkId already exists");
        }
        return talkId;
    }

    /**
     * Used to validate a speakers' list of talkIds. Validates that all talkIds are indeed numbers,
     * and that they actually reference an existing talk
     * 
     * @param {*} index 
     * @param {*} sheetDict dict of lists representing speakers, where multiple talkIds are allowed per speaker
     * @returns talkIdList
     */
    #validateAndStandardizeSpeakerTalkIdList(index, sheetDict) {
        let talkIdList = this.#accessSheetDictSafely(index, sheetDict, SpreadsheetHandler.speakerHeaders.talkId);   // the passed spreadsheet dict should have this saved as a list 
        
        if (!talkIdList) {
            throw new CriticalSheetValueMissingError("TalkId field is empty");
        }
        for (var i = 0; i < talkIdList.length; i++) {
            const talkId = parseInt(talkIdList[i]);
            if (Number.isNaN(talkId)) {
                throw new SheetValueParsingError("TalkId field cannot be parsed, must be integer");
            }
            if (!this.talkIds.has(talkId)) {
                throw new UnknownTalkIdError(`TalkId ${talkId} isn't found among the registered talks.`)
            }
        }
        return talkIdList;
    }

    /**
     * A hacky method of fixing the inconvenience of empty tag entries
     * 
     * @param {*} index 
     * @param {*} sheetDict 
     * @returns 
     */
    #validateAndStandardizeTags(index, sheetDict) {
        let tags = this.#accessSheetDictSafely(index, sheetDict, SpreadsheetHandler.talkHeaders.tags);
        if (tags == undefined) return []    // if no tags are listed under a talk, it comes out as undefined
        return tags;
    }

    /**
     * Used for all non-critical fields in Google spreadsheet.
     * Returns a default message if the field is empty.
     * 
     * @param {*} sheetDict 
     * @param {*} index 
     * @param {*} headerName 
     */
    #makeDefaultIfEmpty(index, sheetDict, headerName) {
        let field = this.#accessSheetDictSafely(index, sheetDict, headerName);
        if (!field) {
            return `ERROR! No ${headerName} provided.`;
        }
        return field;
    }

    /**
     * Creates an object with the entire row of talk/event data,
     * where each (non-critical) field is validated and exchanged with a standard error message if wrongly provided
     * Critical fields, like day and time, is validated, and will throw appropriate errors if conditions are not met
     * 
     * @param {*} index in dictionary value list
     * @param {*} sheetDict dictionary representing spreadsheet of talks/events
     * @param {*} isTalk boolean, true if event is a talk, otherwise false
     */
    getValidatedEventData(index, sheetDict, isTalk) {
        if (isTalk) {
            return {
                day: this.#validateAndStandardizeDay(index, sheetDict),
                timeStart: this.#validateAndStandardizeTime(index, sheetDict, SpreadsheetHandler.talkHeaders.timeStart),
                timeEnd: this.#validateAndStandardizeTime(index, sheetDict, SpreadsheetHandler.talkHeaders.timeEnd),
                type: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.talkHeaders.type),
                roomName: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.talkHeaders.room),
                talkId: this.#validateAndStandardizeTalkId(index, sheetDict),
                title: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.talkHeaders.title),
                language: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.talkHeaders.language),
                difficulty: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.talkHeaders.difficulty),
                description: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.talkHeaders.description),
                tags: this.#validateAndStandardizeTags(index, sheetDict),
            }
        } else {     // other non-talk event, like Pause, Lunch
            return {
                day: this.#validateAndStandardizeDay(index, sheetDict),
                timeStart: this.#validateAndStandardizeTime(index, sheetDict, SpreadsheetHandler.otherEventHeaders.timeStart),
                timeEnd: this.#validateAndStandardizeTime(index, sheetDict, SpreadsheetHandler.otherEventHeaders.timeEnd),
                type: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.otherEventHeaders.type),
                roomName: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.otherEventHeaders.room)
            }
        }
    }

    /**
     * Creates an object with the entire row of speaker data, where
     * 
     * @param {*} index in dictionary value list
     * @param {*} sheetDict dictionary representing speakers
     */
    getValidatedSpeakerData(index, sheetDict) {
        return {
            name: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.speakerHeaders.name),
            info: this.#makeDefaultIfEmpty(index, sheetDict, SpreadsheetHandler.speakerHeaders.info),
            talkIdList: this.#validateAndStandardizeSpeakerTalkIdList(index, sheetDict),
        }
    }
}