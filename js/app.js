
$("dataDisplay").classList.add("d-none");
$("aiBlock").classList.add("d-none");

$("sendButton").addEventListener("click", () => {
    const zip = $("userInput").value.trim();
    checkUserInput(zip);
});



// $("zipForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const zip = $("userInput").value.trim();
//   clickHandler();
// });



function clickHandler() {
    console.log(`addEventListener: ${$("userInput").value}`);
    checkUserInput($("userInput").value)
};


// --- controller: decides whether to show modal or continue ---
async function checkUserInput(userInput) {
    const value = validateZip(userInput);
    if (!value.ok) return showModal(value.title, value.html);
    await fetchByZip(value.zip);
}

function validateZip(userInput) {
    const value = String(userInput ?? "").trim();

    if (!value) { return { ok: false, title: "Validation", html: `Entry cannot be blank. ${enterZip} ${tryAgain}<br><code>001</code>` } }
    if (isNaN(value)) { return { ok: false, title: "Validation", html: `Entry must be a number. ${enterZip} ${tryAgain}<br>(${value}) <code>002</code>` } }
    if (value.length !== 5) { return { ok: false, title: "Validation", html: `Entry must be 5 numbers. ${enterZip} ${tryAgain}<br>(${value.length}) <code>003</code>` } }
    return { ok: true, zip: value };
}



/**
 * Validate user input.
 * @param {number} userInput - Value of user input.
 * 
 * @example
 * variable = 70003
 * checkUserInput(variable);
 */
function OLD_checkUserInput(userInput) {
    //console.log(`checkUserInput: ${JSON.stringify(userInput, null, 2)}`);
    const value = String(userInput ?? "").trim();

    let dialogTitle = "Error";
    if (value === "") {
        let dialogMessage = `Entry cannot be blank. ${enterZip} ${tryAgain}<br><code>001</code>`
        console.log("userInput: NULL: 001");
        openHTMLModal(dialogTitle, dialogMessage);
    } else if (isNaN(value)) {
        let dialogMessage = `Entry must be a number. ${enterZip} ${tryAgain}<br>(${value}) <code>002</code>`
        console.log("userInput: not a number: 002");
        openHTMLModal(dialogTitle, dialogMessage);
    } else if (value.length != 5) {
        let dialogMessage = `Entry must be 5 numbers. ${enterZip} ${tryAgain}<br>(${value.length}) <code>003</code>`
        console.log("userInput: not 5 digits: 003");
        openHTMLModal(dialogTitle, dialogMessage);
    } else {
        fetchByZip(value);
    }
}




function updateWeatherCard(result, cityState) {
    $("dataDisplay").classList.remove("d-none");

    $("cityStateChosen").textContent = cityState
    $("cityStateDisplay").textContent = cityState

    $("cityStateChosen").textContent = cityState;
    $("temp").textContent = `${result.current.apparent_temperature}${result.current_units.apparent_temperature}`;
}


function setFocusOnField() { $("userInput").focus(); }

function resetInterface() {
    $("userInput").value = "";
    $("aiResponse").textContent = "";
    $("dataDisplay").classList.add("d-none");
    $("aiBlock").classList.add("d-none");
    setFocusOnField();
}


function errorBuild(error) {
    showModal(
        "Error",
        `An error has occurred. ${tryAgain}<br>Error message:<br>
       <span class="error-message">${String(error)}</span><br><code>005</code>`
    );
}



/**
 * Send error to modal from function.
 * @param {string} errorNote - Error passed from function.
 * 
 * @example
 * variable = "TypeError: can't access property 0, result.results is undefined"
 * caughtError(variable);
 */
function OLD_caughtError(errorNote) {
    let dialogTitle = "Error";
    let dialogMessage = `An error has occured. ${tryAgain}<br>Error message:<br>
        <span class="error-message">${errorNote}</span><br><code>004</code>`
    console.log(`${errorNote}: 004`);
    openHTMLModal(dialogTitle, dialogMessage);
}
