import  { GoogleSpreadsheet } from 'google-spreadsheet';
import dotenv from 'dotenv';

class SpeadsheetHandler {

    constructor(docId) {
        this.docId = docId;
        this.env = dotenv.config();
        this.doc;   // to be initialized
    }

    // if name of Google sheets changes, chance the values accordingly
    static sheetNames = {
        "talks": "talks",
        "speakers": "speakers",
        "otherEvents": "otherEvents"
    }

    /**
     * @returns true if connection to Google spreadsheet is successfully established, else false 
     */
    async establishConnection() {
        try {
            this.doc = new GoogleSpreadsheet(this.docId);
            await this.doc.useServiceAccountAuth({
                client_email: process.env.CLIENT_EMAIL,
                private_key: process.env.PRIVATE_KEY.toString().split('\\n').join('\n')   
            });
            await this.doc.loadInfo();
            return true;
        } catch(err) {
            return false;
        }
    } 

    /**
     * Given the name of a sheet, this function accesses it, and creates a dictionary
     * with keys = header values and vals = list of values in column
     * 
     * @param {*} sheetName name of the speadsheet to retrieve from
     * @returns dictionary containing sheet data
     */
    async #accessSpreadsheet(sheetName) {
        var sheetDict = {};
        
        const sheet = this.doc.sheetsByTitle[sheetName];   // can use sheetsById[id] and sheetsByTitle[title] and sheetsByIndex[index]
        const rows = await sheet.getRows();
        const headers = sheet.headerValues;
        
        var i = 0; 
        // Breaks on empty row
        while (rows[i] != undefined){
            for (var j = 0; j < headers.length; j++){
                const header = headers[j]; 
    
                if (sheetDict[header] == undefined){
                    sheetDict[header] = new Array();
                    sheetDict[header].push(rows[i][header])
                } 
                else {
                    sheetDict[header].push(rows[i][header]); 
                }
            }
            i++;   // go to next row
        }
        return sheetDict;
    }

    async accessTalks() {
        return this.#accessSpreadsheet(SpeadsheetHandler.sheetNames["talks"]); 
    }
    
    async accessSpeakers(){
        var speakers = await this.#accessSpreadsheet(SpeadsheetHandler.sheetNames["speakers"]); 
        var talkId = speakers["talkId"];
        var listify = []; 
        for (var i = 0; i < talkId.length; i++){
            var nums = talkId[i].replace(/\s/g, "").split("|");   // remove all whitespace and seperate on |
            var num = []; 
            for (var j = 0; j < nums.length; j++){
                num.push(parseInt(nums[j]));
            }
            listify.push(num); 
        }
    
        speakers["talkId"] = listify; 
        return speakers; 
    }
    
    async accessOtherEvents(){
        return this.#accessSpreadsheet(SpeadsheetHandler.sheetNames["otherEvents"]); 
    }
}
export default SpeadsheetHandler;