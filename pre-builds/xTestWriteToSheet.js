import  { GoogleSpreadsheet } from 'google-spreadsheet'; 
import dotenv from 'dotenv';
import { truncateSync } from 'fs';

const docId = '1B8sdJBfb3ercx_kPMfq0j5kCItxuSp6-7SXveW7UL7s';
dotenv.config(); 

export default async function spreadsheetWriter(talkDict, speakerDict, otherEventsDict) {
    const doc = new GoogleSpreadsheet(docId);
    await doc.useServiceAccountAuth({
        client_email: process.env.CLIENT_EMAIL,
        private_key: process.env.PRIVATE_KEY.toString().split('\\n').join('\n')   
    });

    await doc.loadInfo();
    await doc.updateProperties({title: 'WRITE TO SHEET TEST'});
    var sheet = doc.sheetsByTitle["talks"]; 

    await sheet.setHeaderRow(Object.keys(talkDict));
    await sheet.loadHeaderRow(); 

    for (var i = 0; i < talkDict["talkId"].length; i++) {
        await sheet.addRow({
            talkId: talkDict["talkId"][i],
            title: talkDict["title"][i],
            language: talkDict["language"][i],
            difficulty: talkDict["difficulty"][i],
            description: talkDict["description"][i],
            room: talkDict["room"][i],
            type: talkDict["type"][i],
            day: talkDict["day"][i],
            timeStart: talkDict["timeStart"][i],
            timeEnd: talkDict["timeEnd"][i],
            tags: talkDict["tags"][i],
        });
    }

    sheet = doc.sheetsByTitle["speakers"]; 
    await sheet.setHeaderRow(Object.keys(speakerDict));
    await sheet.loadHeaderRow(); 

    for (var i = 0; i < speakerDict["talkId"].length; i++) {
        await sheet.addRow({
            talkId: speakerDict["talkId"][i],
            name: speakerDict["name"][i],
            info: speakerDict["info"][i],
        });
    }

    sheet = doc.sheetsByTitle["otherEvents"]; 
    await sheet.setHeaderRow(Object.keys(otherEventsDict));
    await sheet.loadHeaderRow(); 

    for (var i = 0; i < otherEventsDict["type"].length; i++) {
        console.log(i);
        await sheet.addRow({
            type: otherEventsDict["type"][i],
            day: otherEventsDict["day"][i],
            timeStart: otherEventsDict["timeStart"][i],
            timeEnd: otherEventsDict["timeEnd"][i],
        });
    }

}

// const sheetDict = {
//     "talkId" : [ '1', '2', '3', '4', '5' ],
//     "title": [
//       'Webcomponents in EPiServer',
//       'How to Polish',
//       'The dangers of closed source and software as a service',
//       'A quick-draw designer and a cowboy developer walk into a saloon...',
//       'Test talk'
//     ],
//     "language": [ 'English', 'Polish', 'English', 'English', 'Norwegian' ],
//     "difficulty": [ 'Advanced', 'Hard', 'Intermediate', 'Beginner', 'Beginner' ],
//     "type": [
//       'Some time (20 min)',
//       'Short (5 min)',
//       'Long (60 min)',
//       'Long presentation (60 minutes)',
//       'Lightning talk'
//     ],
//     "description": [
//       'Lalla',
//       'Plz come',
//       'Cool presentation',
//       'Frontiers is a Bergen-based group of developers and designers.',
//       'lalal'
//     ],
//     "room": [ 'Dræggen 42', 'Dræggen 7', 'Dræggen 4', 'Kongesalen', 'Room 404' ],
//     "day": [ 'Sunday', 'Friday', 'lørdag', 'fredag', 'fredag' ],
//     "timeStart": [ '1400', '1100', '1300', '1000', '1000' ],
//     "timeEnd": [ '1420', '1105', '1400', '1100', '1100' ],
//     "tags": [
//       'front-end | ux',
//       'arduino | git',
//       'machine learning | deep learning',
//       'deep learning | data mining',
//       'ux | arduino'
//     ]
// }

// const speakerDict = {
//     "name": [
//       'Fredrik Høgberg',
//       'Marcus Grenangen',
//       'Maja Jaakson',
//       'Lewandowski'
//     ],
//     "info": [
//       '.NET Developer, Certified Lead Developer',
//       'Marcus is a long time software engineer that has worked around the world in various technical roles.\\n\\nMarcus has worked at Microsoft, written core infrastructures in AAA games such as Battlefield and Starwars as well as worked on open source technologies to name a few things.\\n\\nMarcus has a deep passion for software and open source and tries his best to try to make the world a little bit better, through software and services. ',
//       'Maja is a front-end developer by day and a sophist by night. She enjoys candlelight pair programming, long walks to the powerlifting gym, and annoying innocent bystanders with questions about what makes something a programming language.',
//       'Lewandowski is from Poland, and he speaks Polish. He is here today to speak about nail polish. Also he is decent at football.'
//     ],
//     "talkId": [ '1 | 5', '3', '2 | 4', '2|3' ]
// }

// const otherEventsDict = {
//     "type": [ 'Lunch', 'Lunch', 'Welcome' ],
//     "day": [ 'fredag', 'lørdag', 'fredag' ],
//     "timeStart": [ '1130', '1130', '1000' ],
//     "timeEnd": [ '1230', '1230', '1030' ]
// }

// spreadsheetWriter(); 