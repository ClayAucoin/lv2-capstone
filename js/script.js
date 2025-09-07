
$("dataDisplay").classList.add("d-none");


$("button").addEventListener("click", () => {
    userInput = $("userInput").value
    fetchCity(userInput);
});



function fetchCity(userInput) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://geocoding-api.open-meteo.com/v1/search?countryCode=US&name=" + userInput, requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            const lat = result.results[0].latitude;
            const long = result.results[0].longitude;
            cityState = result.results[0].name + ", " + result.results[0].admin1
            console.log("lat: " + lat + "long: " + long);
            fetchWeather(lat, long);
            // sendToModel(cityState);
            sendToModelTest(cityState);      // test
        })
        .catch((error) => console.error(error));
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
    $("latitude").textContent = city.latitude;
    $("longitude").textContent = city.longitude;
    $("temp").textContent = city.current.apparent_temperature;

    console.log("cityState", cityState);
    console.log("latitude", city.latitude);
    console.log("longitude", city.longitude);
    console.log("temp", city.current.apparent_temperature);
}


