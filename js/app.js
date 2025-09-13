
$("dataDisplay").classList.add("d-none");
$("aiBlock").classList.add("d-none");

$("sendButton").addEventListener("click", () => {
    const zip = $("userInput").value.trim();
    checkUserInput(zip);
});


/*
 * use with form tags
 */
// $("zipForm").addEventListener("submit", (e) => {
//   e.preventDefault();
//   const zip = $("userInput").value.trim();
//   clickHandler();
// });


function clickHandler() {
    console.log(`addEventListener: ${$("userInput").value}`);
    checkUserInput($("userInput").value)
};


function checkUserInput(userInput) {
    const value = validateZip(userInput);
    if (!value.ok) return showModal(value.title, value.html);
    fetchByZip(value.zip);
}


function validateZip(userInput) {
    const value = String(userInput ?? "").trim();

    if (!value) { 
        return { 
            ok: false, 
            title: "Validation", 
            html: `Entry cannot be blank. ${enterZip} ${tryAgain}<br><code>001</code>` } 
        }
    if (isNaN(value)) { 
        return { 
            ok: false, 
            title: "Validation", 
            html: `Entry must be a number. ${enterZip} ${tryAgain}<br>(${value}) <code>002</code>` 
        } 
    }
    if (value.length !== 5) { 
        return { 
            ok: false, 
            title: "Validation", 
            html: `Entry must be 5 numbers. ${enterZip} ${tryAgain}<br>(${value.length}) <code>003</code>` 
        } 
    }
    return { 
        ok: true, 
        zip: value 
    };
}


function updateWeatherCard(result, cityState) {
    $("dataDisplay").classList.remove("d-none");

    $("cityStateChosen").textContent = cityState
    $("cityStateDisplay").textContent = cityState

    $("temp").textContent = `${result.current.apparent_temperature}${result.current_units.apparent_temperature}`;
}


function updateUserName(name) {
    document.querySelectorAll(".username").forEach(el => {
        el.textContent = name;
    });
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
