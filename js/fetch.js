// "use strict"

// console.log("fetch.js says hi");

// set to true to attach ai response
runLive = false;

function run_Production(cityState) {
    let value = cityState;
    if (runLive == true) {
        sendToModel(value);         // production
    } else {
        sendToModelTest(value);     // test
    }
}


/**
 * Get location by zip code.
 * @param {number} userInput - Value of user input.
 * 
 * @example
 * variable = 70003
 * fetchByZip(variable);
 */
function fetchByZip(userInput) {
    const requestOptions = {
        method: "GET",
        redirect: "follow"
    };

    fetch("https://geocoding-api.open-meteo.com/v1/search?countryCode=US&name=" + userInput, requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log("result: ");
            console.log(result);
            const lat = result.results[0].latitude;
            const long = result.results[0].longitude;
            cityState = result.results[0].name + ", " + result.results[0].admin1
            console.log("lat: " + lat + "long: " + long);
            fetchWeather(lat, long);
            run_Production(cityState);
            // sendToModel(cityState);
            // sendToModelTest(cityState);      // test
        })
        .catch((error) => {
            console.log("displaying and error in fetchByZip");
            if (error) {
                errorNote = error;
                //errorNote = "fetchByZip function";
                caughtError(errorNote);
                return;
            }
            console.error(error);
        });
}

/**
 * Get location information by city name.
 * @param {string} userInput - Value of user input.
 * 
 * @returns
 * void
 */
function fetchByCity(userInput) {
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
            console.log(`city: ${JSON.stringify(result, null, 2)}`);
            console.log("lat: " + lat + "long: " + long);
            fetchWeather(lat, long);
            run_Production(cityState);
        })
        .catch((error) => {
            console.log("displaying an error in fetchByCity");
            if (error) {
                errorNote = error;
                //errorNote = "fetchByCity function";
                caughtError(errorNote);
                return;
            }
            console.error(error);
        });
}


/**
 * Get location information from Open-Meteo by lat, long input.
 * @param {number} lat - Latitude of location.
 * @param {number} long - Longitude of location.
 * 
 * @example
 * fetchWeather(29.9547, -90.0751);
 */
function fetchWeather(lat, long) {
    const requestOptions = { method: "GET", redirect: "follow" };

    fetch("https://api.open-meteo.com/v1/forecast?latitude=" + lat +
        "&longitude=" + long + "&current=apparent_temperature&temperature_unit=fahrenheit", requestOptions)
        .then((response) => response.json())
        .then(function (result) {
            console.log(result);
            city = result;
            // cityOutput = JSON.stringify(city, null, 2);
            // console.log("fetchWeather: " + cityOutput);
            updateWeatherCard();
        })
        .catch((error) => {
            console.log("displaying an error in fetchWeather");
            if (error) {
                errorNote = error;
                //errorNote = "fetchWeather function";
                caughtError(errorNote);
                return;
            }
            console.error(error);
        });
}


/**
 * Test function to receive variable passing.
 * @param {string} cityState - Value of user input.
 * 
 * @example
 * variable = "New Orleans, LA"
 * sendToModelTest(variable);
 */
function sendToModelTest(cityState) {
    console.log("sendToTest: cityState -> " + cityState)
    userPrompt = "Can you write a short paragraph about " + cityState + "?"

    $("aiBlock").classList.remove("d-none");
    $("aiResponse").innerHTML = `<pre>${cityState}</pre>`;

    console.log("send to model TEST called");
    console.log(`sendToModelTest: ${JSON.stringify(cityOutput, null, 2)}`);
    console.log(`City, ST: ${cityState}`);
    console.log(`userPrompt: ${userPrompt}`);
}


/**
 * Get AI response.
 * @param {string} cityState - Value of user input.
 * 
 * @example
 * variable = "New Orleans, LA"
 * sendToModel(variable);
 */
function sendToModel(cityState) {
    console.log("send to model called");

    userPrompt = "Can you write a short paragraph about " + cityState + "?"
    console.log("userPrompt: " + userPrompt);

    async function query(data) {
        const response = await fetch(
            "https://router.huggingface.co/v1/chat/completions",
            {
                headers: {
                    Authorization: `Bearer ${HF_TOKEN}`,
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    }

    query({
        messages: [
            {
                role: "user",
                content: userPrompt,
            },
        ],
        model: "openai/gpt-oss-120b:fireworks-ai",
    }).then((response) => {
        botReply = response.choices[0].message.content;
        console.log(botReply);
        $("aiBlock").classList.remove("d-none");
        $("aiResponse").textContent = botReply;
    });
}

