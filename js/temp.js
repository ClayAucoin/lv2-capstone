// --- tiny helper ---
const $ = (id) => document.getElementById(id);

// --- single UI function: no globals needed ---
function showModal(title, html) {
    $("htmlDialogLabel").textContent = title;
    $("htmlDialogBody").innerHTML = html;
    $("htmlModal").showModal(); // native <dialog>
}

// --- validation returns a result; no UI here ---
function validateZip(userInput) {
    const value = String(userInput ?? "").trim();

    if (!value) { return { ok: false, title: "Validation", html: `Entry cannot be blank. ${enterZip} ${tryAgain}<br><code>001</code>` } }
    if (isNaN(value)) { return { ok: false, title: "Validation", html: `Entry must be a number. ${enterZip} ${tryAgain}<br>(${value}) <code>002</code>` } }
    if (value.length !== 5) { return { ok: false, title: "Validation", html: `Entry must be 5 numbers. ${enterZip} ${tryAgain}<br>(${value.length}) <code>003</code>` } }
    return { ok: true, zip: value };
}

// --- controller: decides whether to show modal or continue ---
async function checkUserInput(userInput) {
    const v = validateZip(userInput);
    if (!v.ok) return showModal(v.title, v.html);
    await fetchByZip(v.zip);
}

// --- fetch with one try/catch and clear guards ---
async function fetchByZip(zip) {
    try {
        const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?countryCode=US&name=${zip}`);
        const result = await res.json();

        // Debug view (your helper)
        displayResult("fetchByZip", result);

        // Guard: ensure we have at least one result
        if (!Array.isArray(result.results) || result.results.length === 0) {
            return showModal(
                "No Results",
                `No geocoding results for "${zip}". ${tryAgain}<br><code>004</code>`
            );
        }

        const first = result.results[0];
        const lat = first.latitude;
        const long = first.longitude;
        const cityState = `${first.name}, ${first.admin1}`;

        console.log(`lat: ${lat} long: ${long}`);
        fetchWeather(lat, long);
        run_Production(cityState);

    } catch (err) {
        // One place for fetch errors
        showModal(
            "Error",
            `An error has occurred. ${tryAgain}<br>Error message:<br>
       <span class="error-message">${String(err)}</span><br><code>005</code>`
        );
        console.error("fetchByZip error:", err);
    }
}
