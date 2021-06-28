import * as fs from'fs';
// import { program } from "../models/hello.json"; 
// const data = require("../models/hello.json");

/**
 * Class that read a json object and 
 */
class SheetPreprocesser {

    constructor(pathToJson) {
        let rawdata = fs.readFileSync(pathToJson);
        this.schedule = JSON.parse(rawdata);
        
        // main data structures to build up
        this.sheetTalkDict = {
            "talkId": [],
            "title": [],
            "language": [],
            "difficulty": [],
            "type": [],
            "description": [],
            "room": [],
            "day": [],
            "timeStart": [],
            "timeEnd": []
        }
        this.sheetSpeakerDict = {
            "name": [],
            "info": [],
            "talkId": []
        }
        this.sheetOtherEventsDict = {
            "type": [],
            "day": [],
            "timeStart": [],
            "timeEnd": []
        }
    }

    getTalkSheet() { return this.sheetTalkDict; }
    getSpeakerSheet() { return this.sheetSpeakerDict; }
    getOtherEventsSheet() { return this.sheetOtherEventsDict; }


    buildSheetStructures() {
        // utilitary dict to avoid speaker duplicates (one speaker can be on multiple talks)
        var speakerDictBuildup = {}    // key is name and val is a dict with info and talkid(s) 

        const dayList = this.schedule["program"]["days"];
        // for (var i in days.length)
        dayList.forEach((dayDict) => {
            const day = dayDict["day"];
            const slotList = dayDict["slots"];
            slotList.forEach((slotDict) => {
                const timeStart = slotDict["timeStart"];
                const timeEnd = slotDict["timeEnd"];
                const slotType = slotDict["type"][0];    // for some reason, all slot types is lonely in a list
                const roomList = slotDict["rooms"];
                
                // find out if entry is a talk or non-talk event
                if (!roomList) throw Error("Room list is empty");
                if (roomList[0]["talks"] == undefined) throw Error("Room dict has undefined key='talks'");
                if (roomList[0]["talks"].length == 0) {            // non-talk events has room list with one dict, where "talks" key is an empty list
                    // non-talk event, register as such
                    this.sheetOtherEventsDict["type"].push(slotType);
                    this.sheetOtherEventsDict["timeStart"].push(timeStart);
                    this.sheetOtherEventsDict["timeEnd"].push(timeEnd);
                    this.sheetOtherEventsDict["day"].push(day);
                } else {
                    // talk event, we need to loop further to fetch talk info
                    roomList.forEach((roomDict) => {
                        const roomName = roomDict["name"];
                        const talkList = roomDict["talks"];
                        talkList.forEach((talkDict) => {
                            // register this talk
                            const talkId = talkDict["talkId"];                       
                            this.sheetTalkDict["talkId"].push(talkId);
                            this.sheetTalkDict["difficulty"].push(talkDict["difficulty"]);
                            this.sheetTalkDict["title"].push(talkDict["title"]);
                            this.sheetTalkDict["type"].push(talkDict["type"]);                // TODO: find out what you shoud do with slotType vs talkType
                            this.sheetTalkDict["description"].push(talkDict["description"]);
                            this.sheetTalkDict["room"].push(roomName);
                            this.sheetTalkDict["day"].push(day);
                            this.sheetTalkDict["timeStart"].push(timeStart);
                            this.sheetTalkDict["timeEnd"].push(timeEnd);
                            
                            // register speakers of this talk
                            const speakerList = talkDict["speakers"];
                            speakerList.forEach((speakerDict) => {
                                const speakerName = speakerDict["name"];
                                const speakerInfo = speakerDict["info"];
                                
                                if (speakerDictBuildup[speakerName] == undefined) {
                                    // speaker not yet registered
                                    speakerDictBuildup[speakerName] = {
                                        "info": speakerInfo,
                                        "talkId": [talkId] 
                                    };
                                } else {
                                    // speaker already registered, lets append the talkId only
                                    speakerDictBuildup[speakerName]["talkId"].push(talkId);
                                }
                            });
                        });
                    });
                }
            });
        });
        // at this point we have build the data structures, but speakers are still a little fishy
        // we need put it proper into it's belonging list
        for (let speakerName in speakerDictBuildup) {
            this.sheetSpeakerDict["name"].push(speakerName);
            this.sheetSpeakerDict["info"].push(speakerDictBuildup[speakerName]["info"]);
            this.sheetSpeakerDict["talkId"].push(speakerDictBuildup[speakerName]["talkId"]);
        }
    }
}

var sheetPreprocesser = new SheetPreprocesser("../models/data.json");
sheetPreprocesser.buildSheetStructures();
console.log(sheetPreprocesser.getOtherEventsSheet());
