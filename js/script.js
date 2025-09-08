
$("dataDisplay").classList.add("d-none");
$("aiBlock").classList.add("d-none");


$("button").addEventListener("click", () => {
    userInput = $("userInput").value
    //console.log("addEventListener: " + `${JSON.stringify(userInput, null, 2)}`);
    checkUserInput(userInput)
});

/**
 * Get AI response.
 * @param {string} cityState - Value of user input.
 * 
 * @example
 * variable = "New Orleans, LA"
 * sendToModel(variable);
 */
function checkUserInput(userInput) {
    //console.log("checkUserInput: " + `${JSON.stringify(userInput, null, 2)}`);
    const value = String(userInput ?? "").trim();

    if (value === "") {
        dialogMessage = `Entry cannot be blank. ${enterZip} ${tryAgain}<br>001`
        console.log("userInput: NULL");
        openHTMLModal();
    } else if (isNaN(value)) {
        dialogMessage = `Entry must be a number. ${enterZip} ${tryAgain}<br>(${value})002`
        console.log("userInput: not a number");
        openHTMLModal();
    } else if (value.length != 5) {
        dialogMessage = `Entry must be 5 numbers. ${enterZip} ${tryAgain}<br>(${value.length}) 003`
        console.log("userInput: not 5 digits");
        openHTMLModal();
    } else {
        fetchByZip(userInput);
    }
}


function updateWeatherCard() {
    $("dataDisplay").classList.remove("d-none");

    $("cityStateChosen").textContent = cityState
    $("cityStateDisplay").textContent = cityState

    $("cityStateChosen").textContent = cityState;
    $("temp").textContent = city.current.apparent_temperature;
}


function setFocusOnField() { $("userInput").focus(); }
function resetUserInput() { $("userInput").value = ""; }


/**
 * Send error to modal from function.
 * @param {string} errorNote - Error passed from function.
 * 
 * @example
 * variable = "TypeError: can't access property 0, result.results is undefined"
 * caughtError(variable);
 */
function caughtError(errorNote) {
    dialogTitle = "Error";
    dialogMessage = `An error has occured. ${tryAgain}<br>Error message:<br>
        <span class="error-message">${errorNote}</span><br>004`
    openHTMLModal();
    // aiResponse.classList.add("error-message");
}
