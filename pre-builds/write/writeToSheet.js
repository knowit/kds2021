import  { GoogleSpreadsheet } from 'google-spreadsheet'; 
import dotenv from 'dotenv';

dotenv.config();

export async function writeTalksToSpreadsheet(talkSheetDict) {
    const doc = new GoogleSpreadsheet(process.env.DOC_ID);
    await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.toString().split('\\n').join('\n')   
    });

    await doc.loadInfo();
    var sheet = doc.sheetsByTitle["talks"];

    await sheet.setHeaderRow(Object.keys(talkSheetDict));
    await sheet.loadHeaderRow(); 

    for (var i = 0; i < talkDict["talkId"].length; i++) {
        await sheet.addRow({
            talkId: talkSheetDict["talkId"][i],
            title: talkSheetDict["title"][i],
            language: talkSheetDict["language"][i],
            difficulty: talkSheetDict["difficulty"][i],
            description: talkSheetDict["description"][i],
            room: talkSheetDict["room"][i],
            type: talkSheetDict["type"][i],
            day: talkSheetDict["day"][i],
            timeStart: talkSheetDict["timeStart"][i],
            timeEnd: talkSheetDict["timeEnd"][i],
            tags: talkSheetDict["tags"][i],
        });
    }
}

export async function writeSpeakersToSpreadsheet(speakerSheetDict) {
    const doc = new GoogleSpreadsheet(process.env.DOC_ID);
    await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.toString().split('\\n').join('\n')   
    });

    await doc.loadInfo();
    var sheet = doc.sheetsByTitle["speakers"]; 
    
    await sheet.setHeaderRow(Object.keys(speakerSheetDict));
    await sheet.loadHeaderRow(); 

    for (var i = 0; i < speakerSheetDict["talkId"].length; i++) {
        await sheet.addRow({
            talkId: speakerSheetDict["talkId"][i],
            name: speakerSheetDict["name"][i],
            info: speakerSheetDict["info"][i],
        });
    }

}

export async function writeOtherEventsToSpreadsheet(otherEventsSheetDict) {
    const doc = new GoogleSpreadsheet(process.env.DOC_ID);
    await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.toString().split('\\n').join('\n')   
    });

    await doc.loadInfo();
    var sheet = doc.sheetsByTitle["otherEvents"]; 
    
    await sheet.setHeaderRow(Object.keys(otherEventsSheetDict));
    await sheet.loadHeaderRow(); 

    for (var i = 0; i < otherEventsSheetDict["type"].length; i++) {
        console.log(i);
        await sheet.addRow({
            type: otherEventsSheetDict["type"][i],
            day: otherEventsSheetDict["day"][i],
            timeStart: otherEventsSheetDict["timeStart"][i],
            timeEnd: otherEventsSheetDict["timeEnd"][i],
        });
    }
}
