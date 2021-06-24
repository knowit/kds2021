import  { GoogleSpreadsheet } from 'google-spreadsheet';
import dotenv from 'dotenv';

const docId = '1its1GjbFAVOTOhqGR6KZJ2kPkgrfBbqqPzWnbMyiBP4';   // found in google sheets URL
const env = dotenv.config();

export async function accessTalks() {
    return accessSpreadsheet("talks"); 
}

export async function accessSpeakers(){
    var speakers = await accessSpreadsheet("speakers"); 
    var talkId = speakers["talkId"]; // [ '2', '4', '3 | 5', '3' ]
    var listify = []; 
    for (var i = 0; i < talkId.length; i++){
        var nums = talkId[i].trim().split(" | "); 
        var num = []; 
        for (var j = 0; j < nums.length; j++){
            num.push(parseInt(nums[j]));
        }
        listify.push(num); 
    }

    speakers["talkId"] = listify; 
    return speakers; 
}

export async function accessOtherEvents(){
    return accessSpreadsheet("otherEvents"); 
}


async function accessSpreadsheet(sheetName) {
    const doc = new GoogleSpreadsheet(docId);

    await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.toString().split('\\n').join('\n')   
    });
    
    await doc.loadInfo();
    await doc.updateProperties({title: 'kds talks test'});

    var dict = {}   //THE dict1IONARY
    
    const sheet = doc.sheetsByTitle[sheetName];   // can use sheetsById[id] and sheetsByTitle[title] and sheetsByIndex[index]
    const rows = await sheet.getRows();
    const headers = sheet.headerValues;
    
    var i = 0; 
    // Breaks on empty row
    while (rows[i] != undefined){
        for (var j = 0; j < headers.length; j++){
            const header = headers[j]; 

            if (dict[header] == undefined){
                dict[header] = new Array();
                dict[header].push(rows[i][header])
            } 
            else {
                dict[header].push(rows[i][header]); 
            }
        }
        i++;
    }
    return dict;
}
//export default accessSpreadsheet; 