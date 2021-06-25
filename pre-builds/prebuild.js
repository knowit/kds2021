import ScheduleMaker from './scheduleMaker.js';
import { accessTalks, accessSpeakers, accessOtherEvents } from './spreadsheet.js'; 
import * as fs from'fs';



var talkDict = await accessTalks(); 
var speakerDict = await accessSpeakers(); 
var otherDict = await accessOtherEvents(); 

console.log("\n", talkDict); 
console.log("\n", speakerDict); 
console.log("\n", otherDict); 




var scheduleMaker = new ScheduleMaker();
scheduleMaker.buildSchedule(talkDict, speakerDict);

var schedule = scheduleMaker.getScheduleCopy();
console.log(JSON.stringify(schedule), "\t"); 







function writeToJSON(filename){

    // Object with table array 
    var obj = {
        table: []
    };

    // Stringify object with table array
    var json = JSON.stringify(obj); 

    // Read file
    fs.readFile(filename, 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            obj.table.push({id: 2, square:3}); //add some data
            json = JSON.stringify(obj); //convert it back to json
        }   
    });

    // Push JSON data to table array 
    obj.table.push({
        balloon: 99, 
        foo: 42, 
        bar: 10000, 
        banana: "Hello, World!", 
        "Node": "JS"
    }); 

    // Stringify object with table array
    json = JSON.stringify(obj); 
    
    // Write file
    fs.writeFile(filename, json, function (err) {
        if (err) return console.log(err);
    });
}
writeToJSON('../models/hello.json'); 