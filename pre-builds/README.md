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
At bare minimum, your .env file need to contain the following:
1. PRIVATE_KEY (found in your downloaded key)
2. CLIENT_EMAIL (found in your downloaded key)
3. DOC_ID (found in your sheet url)
4. WRITE_PATH (relative path, including file name, of the written json file with Sheets data)

## Run
The two folders, "read" and "write", contains the files necessary to read data from and write data to Google spreadsheets, respectively.    
- To read from Google sheets and save as a json, run <b>npm start</b>. prebuild.js is the run script   
- To write an existing json file of talks to Google sheets, run <b>npm write</b>. mainWrite.js is the run script   

## Options
- constants.js contains global variables of settings that might change. If the number of rooms or languages change,    
edit this file.
- If the Google sheet names or headers changes, change the values of the objects in read/spreadsheetHandler.js accordingly.

