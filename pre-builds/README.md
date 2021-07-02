##### Knowit Developer Summit 

### What do you need? 


## NPMJS google-spreadsheet 🌈 Installation 🌈  
1. 'npm i google-spreadsheet --save' or 'yarn add google-spreadsheet' 
2. Documentation: ['https://www.npmjs.com/package/google-spreadsheet']

## Google Cloud Platform 
1. Create a service account from Google Cloud Platform. 
2. Make note of your CLIENT_EMAIL. 
3. Create a new PRIVATE_KEY and download as JSON-file. These details will go into your dotenv-file. 

## Google Sheets 
1. Create a Google Spreadsheet Document and make note of your DOC_ID, which is found in the spreadsheet URL. 
2. The spreadsheet document should contain the following sheets: [talks, speakers, otherEvents]. 
3. Create the following headers in talks: [talkId, title, language, difficulty, type, description, room, day, timeStart, timeEnd, tags]. 
4. Create the following headers in speakers: [name, info, talkId]. 
5. Create the following headers in otherEvents: [type, day, timeStart, timeEnd].
6. Invite service account (CLIENT_EMAIL) to edit spreadsheet, in Google Sheets by clicking SHARE. 

## DOTENV-file: paths and keys 
1. PRIVATE_KEY => dotenv 
2. CLIENT_EMAIL => dotenv 
3. DOC_ID => dotenv 