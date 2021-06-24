import  { GoogleSpreadsheet } from 'google-spreadsheet';
import dotenv from 'dotenv';

const docId = '1its1GjbFAVOTOhqGR6KZJ2kPkgrfBbqqPzWnbMyiBP4';   // found in google sheets URL
const env = dotenv.config();

async function accessSpreadsheet() {
    const doc = new GoogleSpreadsheet(docId);

    // TODO: uncomment and fix this
    // await doc.useServiceAccountAuth({
    //     client_email: process.env.CLIENT_EMAIL,
    //     private_key: process.env.PRIVATE_KEY
    // });
    
    await doc.loadInfo();
    await doc.updateProperties({title: 'kds talks test'});

    var dict = {}   //THE DICTIONARY
    
    const sheet = doc.sheetsByIndex[0];   // can use sheetsById[id] and sheetsByTitle[title]
    const rows = await sheet.getRows();
    const headers = sheet.headerValues;   

    
    var i = 0; 
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
export default accessSpreadsheet; 