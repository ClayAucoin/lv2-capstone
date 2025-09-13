// "use strict"

// console.log("fetch.js says hi");

// set to true to attach ai response
const runLive = false;

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
// function fetchByZip(userInput) {
function fetchByZip(zip) {
	const requestOptions = { method: "GET", redirect: "follow" };

	fetch(`https://geocoding-api.open-meteo.com/v1/search?countryCode=US&name=${zip}`, requestOptions)
		.then((response) => response.json())
		.then(function (result) {

			consoleDisplay("fetchByZip", result, false);

			const first = result.results[0];
			const lat = first.latitude;
			const long = first.longitude;
			const cityState = `${first.name} , ${first.admin1}`;

			console.log(`lat: ${lat} long: ${long}`);

			fetchWeather(lat, long, cityState);
			run_Production(cityState);
		})
		.catch((error) => {
			console.log("displaying and error in fetchByZip");
			if (error) {
				errorBuild(error);
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
function fetchWeather(lat, long, cityState) {
	const requestOptions = { method: "GET", redirect: "follow" };

	fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&daily=sunrise,sunset,daylight_duration&current=apparent_temperature,precipitation,rain,showers,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m,relative_humidity_2m,temperature_2m,snowfall,is_day&timezone=America%2FChicago&forecast_days=1&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch`, requestOptions)
		.then((response) => response.json())
		.then(function (result) {
			//fname = "fetchWeather";

			console.log("fetchWeather cityState: " + cityState);

			consoleDisplay("fetchWeather", result, false);

			updateWeatherCard(result, cityState);
		})
		.catch((error) => {
			console.log("displaying fetchWeather error");
			if (error) {
				// errorNote = error;
				errorBuild(error);
				// caughtError(errorNote);
				console.error(error);
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
	console.log(`sendToTest: cityState -> ${cityState}`)

	fname = "sendToModelTest";
	consoleDisplay(fname, cityState, true);


	userPrompt = `Can you write a short paragraph about ${cityState}?`

	$("aiBlock").classList.remove("d-none");
	$("aiResponse").innerHTML = `<pre>${cityState}</pre>`;

	console.log("send to model TEST called");
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
	console.log("sendToModel called");

	const userPrompt = `Can you write a short paragraph about ${cityState}?`
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

		consoleDisplay("sendToModel", botReply, true);

		$("aiBlock").classList.remove("d-none");
		$("aiResponse").textContent = botReply;
	});
}
