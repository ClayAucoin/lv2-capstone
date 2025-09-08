// console.log("fetch.js says hi");


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
            console.log("city: " + `${JSON.stringify(result, null, 2)}`);
            console.log("lat: " + lat + "long: " + long);
            fetchWeather(lat, long);
            // sendToModel(cityState);
            // sendToModelTest(cityState);      // test
        })
        .catch((error) => {
            console.log("displaying an error in fetchByCity");
            console.error(error);
        });
}


function fetchByZip(userInput) {
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
        .catch((error) => {
            console.log("displaying and error in fetchByZip");
            console.error(error);
            if (error) {
                errorNote = error;
                //errorNote = "fetchByZip function";
                caughtError(errorNote);
                return;
            }
        });
}


function sendToModelTest(cityState) {
    userPrompt = "Can you write a short paragraph about " + cityState + "?"

    $("aiBlock").classList.remove("d-none");

    console.log("send to model TEST called");
    console.log("City, ST: " + cityState);
    console.log("userPrompt: " + userPrompt);
}


// send ai request
function sendToModel(cityState) {
    console.log("send to model called");
    console.log("userPrompt: " + userPrompt);

    userPrompt = "Can you write a short paragraph about " + cityState + "?"

    // aiResponse.textContent.style.cssText = "font-style: normal;";
    // userQuestion.innerHTML = "You asked: <b>" + userInput + "</b>";
    // resetButton.classList.remove("d-none");

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
        $("aiResponse").textContent = botReply;
    });
}

