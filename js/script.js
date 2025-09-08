
$("dataDisplay").classList.add("d-none");
$("aiBlock").classList.add("d-none");


$("button").addEventListener("click", () => {
    userInput = $("userInput").value
    console.log("addEventListener: " + `${JSON.stringify(userInput, null, 2)}`);
    checkUserInput(userInput)
});

function checkUserInput(userInput) {
    console.log("checkUserInput: " + `${JSON.stringify(userInput, null, 2)}`);
    const value = String(userInput ?? "").trim();
    console.log(value);
    if (value === "") {
        dialogTitle = "Error";
        dialogMessage = "Entry cannot be blank. Enter a valid zip Code. Please try again.<br>001"
        openHTMLModal();
    } else if (isNaN(value)) {
        dialogTitle = "Error";
        dialogMessage = `Entry must be a number. Enter a valid zip Code. Please try again.<br>(${value})002`
        openHTMLModal();
    } else if (value.length != 5) {
        dialogTitle = "Error";
        dialogMessage = `Entry must be 5 numbers. Enter a valid zip Code. Please try again.<br>(${value.length}) 003`
        openHTMLModal();
    } else {
        fetchByZip(userInput);
    }
}

function caughtError(errorNote) {
    dialogTitle = "Error";
    dialogMessage = `An error has occured. Please try again.<br>Error message:<br><span class="error-message">${errorNote}</span>`
    openHTMLModal();
    // aiResponse.classList.add("error-message");
}

/**
 * Enable or disable element.
 * @param {number} lat - The id of button.
 * @param {number} long - disable or enable.
 * 
 * @example
 * fetchWeather(29.9547, -90.0751);
 */

function fetchWeather(lat, long) {
    const requestOptions = { method: "GET", redirect: "follow" };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat +
        "&longitude=" + long + "&current=apparent_temperature&wind_speed_unit" +
        "=mph&temperature_unit=fahrenheit&precipitation_unit=inch", requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            city = result;
            updateWeatherCard();
        })
        .catch((error) => console.error(error));
}

function updateWeatherCard() {
    dataDisplay.classList.remove("d-none");

    $("aiResponse").innerHTML = `<pre>${JSON.stringify(city, null, 2)}</pre>`;

    $("cityStateChosen").textContent = cityState
    $("cityStateDisplay").textContent = cityState

    $("cityStateChosen").textContent = cityState;
    // $("latitude").textContent = city.latitude;
    // $("longitude").textContent = city.longitude;
    $("temp").textContent = city.current.apparent_temperature;

    console.log("cityState", cityState);
    console.log("latitude", city.latitude);
    console.log("longitude", city.longitude);
    console.log("temp", city.current.apparent_temperature);
}


function setFocusOnField() { userInput.focus(); }
function resetUserInput() { userInput.value = ""; }
