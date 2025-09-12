// console.log("variables.js says hi");

const $ = (id) => document.getElementById(id);

let runLive;
let userPrompt = "";
// let cityState = "";
// let city;
let cityOutput;
// let fname;


// partial html modal text build
let enterZip = "Enter a valid zip Code.";
let tryAgain = "Please try again.";

let tempObject = { "latitude": 29.989544, "longitude": -90.16341, "generationtime_ms": 0.04088878631591797, "utc_offset_seconds": 0, "timezone": "GMT", "timezone_abbreviation": "GMT", "elevation": 3, "current_units": { "time": "iso8601", "interval": "seconds", "apparent_temperature": "°F" }, "current": { "time": "2025-09-10T21:30", "interval": 900, "apparent_temperature": 92 } }