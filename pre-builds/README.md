##### Knowit Developer Summit 

### What do you need? 


## NPMJS google-spreadsheet 🌈 Installation 🌈  
1. 'npm i google-spreadsheet --save' or 'yarn add google-spreadsheet' 
2. Documentation: ['https://www.npmjs.com/package/google-spreadsheet']

## Google Cloud Platform 
1. Create a service account from Google Cloud Platform. 
2. Make note of your CLIENT_EMAIL. 
3. Create a new PRIVATE_KEY and download as JSON-file. These details will go into your dotenv-file. See screenshot for example. 

## Google Sheets 
1. Create a Google Spreadsheet and make note of your DOC_ID, which is found in the spreadsheet URL. 
2. Create the following headers: [talkId, title, language, difficulty, type, description, room, day, timeStart, timeEnd, tags]. 
3. Invite service account (CLIENT_EMAIL) to edit spreadsheet, in Google Sheets by clicking SHARE. 

## DOTENV-file: paths and keys 
1. PRIVATE_KEY => dotenv 
2. CLIENT_EMAIL => dotenv 
3. DOC_ID => dotenv 