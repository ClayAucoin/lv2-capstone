const $ = (id) => document.getElementById(id);

let runLive;
let usersInput;
let userPrompt;
let cityState;
let city;
let cityOutput;

let errorNote;
let dialogTitle;
let dialogMessage;

// partial html modal text build
let enterZip = "Enter a valid zip Code.";
let tryAgain = "Please try again.";
