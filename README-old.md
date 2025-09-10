# Level 2 Capstone — Zip → Weather + AI Blurb (Single‑Page App)

A small single‑page app that:
- accepts a U.S. ZIP code,
- looks up the **location (city, state)** using **Open‑Meteo Geocoding**,
- fetches the current **apparent temperature (°F)** using **Open‑Meteo Forecast**, and
- asks an LLM for a short paragraph about the location. Specifically **Open AI** through the **Hugging Face Inference Router**

The UI is a Bootstrap card with a simple error modal powered by the native `<dialog>` element.

> 📸 **Screenshots to add later**
> - Place a screenshot of the main card here.
> - Add a screenshot showing the modal error states (blank, non‑numeric, not 5 digits).
> - Add a screenshot showing the AI blurb displayed.


<!-- 
![Main card](images/image1.png) 

![Main card](images/image3.png)

![Main card](images/image5.png)

![Main card](images/image6.png)
 -->
 
---

## Table of contents
- [Demo flow](#demo-flow)
- [Features](#features)
- [Project structure](#project-structure)
- [Setup](#setup)
  - [Config](#config)
  - [Security note on API keys](#security-note-on-api-keys)
- [How it works](#how-it-works)
  - [1) Input validation](#1-input-validation)
  - [2) Geocoding (ZIP → lat/long → city,state)](#2-geocoding-zip--latlong--citystate)
  - [3) Weather fetch (Open‑Meteo)](#3-weather-fetch-open-meteo)
  - [4) AI paragraph (Hugging Face Inference Router)](#4-ai-paragraph-hugging-face-inference-router)
- [API integrations](#api-integrations)
- [External dependencies](#external-dependencies)
- [Configuration flags](#configuration-flags)
- [Troubleshooting](#troubleshooting)
- [Extending](#extending)
- [Credits](#credits)

---

## Demo flow

1. User enters a **5‑digit U.S. ZIP** (e.g., `70001`) and clicks **Search Zip Code**.  
2. App validates the input and shows an error **modal** if it’s blank, not numeric, or not 5 digits.  
3. If valid, the app calls **Open‑Meteo Geocoding** to resolve latitude/longitude and the normalized **City, ST**.  
4. Using `lat`/`long`, the app calls **Open‑Meteo Forecast** for `current.apparent_temperature` in °F.  
5. The app updates the **weather card** and then calls the **Hugging Face Inference Router** with a prompt like  
   _“Can you write a short paragraph about New Orleans, LA?”_  
6. The **AI response** renders below the weather card.

---

## Features

- **Single‑page app** with Bootstrap styling.
- **Client‑side validation**:
  - blank input
  - non‑numeric input
  - not exactly 5 digits
- **Native modal** via `<dialog>` for consistent error messages.
- **Weather**: current **apparent temperature** (°F) via Open‑Meteo.
- **AI blurb**: uses Hugging Face Inference Router with the `openai/gpt-oss-120b:fireworks-ai` model.
- **Test mode** toggle (`runLive`) to stub AI calls while wiring UI.

---

## Project structure

```
/ (root)
├─ index.html          # this file; includes all JS inline for easy submission
├─ /css/style.css      # optional custom styles
└─ /images/favicon.ico # app icon
```

> You can split the inline `<script>` into separate files later (e.g., `validation.js`, `weather.js`, `ai.js`) without changing behavior.

---

## Setup

### Config

Inside `secret-variables.js` there’s a token variable:

```js
HF_TOKEN = "hf_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
```

Replace that with your own Hugging Face API token. See the **Security note** below before shipping to production.

The app ships with `runLive = false` inside `fetch.js`. Flip to `true` to exercise the UI with hitting the LLM:
> ```js
> runLive = false;
> ```

### Security note on API keys

This app currently calls the Hugging Face Router **from the browser** with a Bearer token. That’s fine for demos, but don’t ship a private token in client code. In production, put a tiny server (or serverless function) in front that:
- stores the token in server‑side secrets,
- accepts a simple POST `{ prompt }`,
- forwards to Hugging Face, and
- returns the model’s text back to the browser.

---

## How it works

### 1) Input validation

`checkUserInput(userInput)` enforces:
- not blank
- numeric only
- length === 5

On any failure, it sets a human‑readable message and opens the **dialog** modal.

Error codes surfaced in messages:
- **001** blank input
- **002** not numeric
- **003** not 5 digits
- **004** generic/caught exception

### 2) Geocoding (ZIP → lat/long → city,state)

`fetchByZip(userInput)` calls:

```
GET https://geocoding-api.open-meteo.com/v1/search?countryCode=US&name=<ZIP>
```

It extracts:
- `latitude`, `longitude`
- `name` and `admin1` (combined as **City, ST**)

> There’s also `fetchByCity(userInput)` if you want to search by city name instead of ZIP.

### 3) Weather fetch (Open‑Meteo)

`fetchWeather(lat, long)` calls:

```
GET https://api.open-meteo.com/v1/forecast
    ?latitude=<lat>
    &longitude=<long>
    &current=apparent_temperature
    &temperature_unit=fahrenheit
```

The handler updates:
- `#cityStateChosen`, `#cityStateDisplay`
- `#temp` with `current.apparent_temperature`

### 4) AI paragraph (Hugging Face Inference Router)

`sendToModel(cityState)` builds:
```text
"Can you write a short paragraph about <City, ST>?"
```

and calls:

```
POST https://router.huggingface.co/v1/chat/completions
Authorization: Bearer <HF_TOKEN>
Content-Type: application/json

{
  "model": "openai/gpt-oss-120b:fireworks-ai",
  "messages": [
    {"role": "user", "content": "<prompt>"}
  ]
}
```

It reads `response.choices[0].message.content` and renders it into `#aiResponse`.

> For offline testing, `sendToModelTest(...)` shows the city/state string without calling the API. Toggle with `runLive` on `fetch.js`.

---

## API integrations

### Open‑Meteo Geocoding API
- **Base**: `https://geocoding-api.open-meteo.com/v1/search`
- **Inputs**: `countryCode=US`, `name=<ZIP or City>`
- **Output**: array of results used `[0]` for `latitude`, `longitude`, `name`, `admin1`
- **Docs**: https://open-meteo.com/en/docs/geocoding-api

### Open‑Meteo Forecast API
- **Base**: `https://api.open-meteo.com/v1/forecast`
- **Inputs**: `latitude`, `longitude`, `current=apparent_temperature`, plus units
- **Output**: `current.apparent_temperature`
- **Docs**: https://open-meteo.com/en/docs

### Hugging Face Inference Router (Chat Completions)
- **Endpoint**: `https://router.huggingface.co/v1/chat/completions`
- **Auth**: Bearer token (`HF_TOKEN`)
- **Model**: `openai/gpt-oss-120b:fireworks-ai` (you can substitute other chat‑completion capable models)
- **Schema**: Aligns with OpenAI‑style `messages` array and `choices[0].message.content`
- **Docs**: https://huggingface.co/docs/api-inference/quicktour#inference-endpoints

---

## External dependencies

- **Bootstrap (CSS + JS, via CDN)**
  - CSS: `https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css`
  - JS Bundle: `https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js`
- **Browser APIs**
  - Native `<dialog>` element (supported in modern browsers)
  - Fetch API for HTTP requests
- **Static assets**
  - `/css/style.css` (optional custom styles)
  - `/images/favicon.ico`

---

## Configuration flags


```js
`fetch.js`
// Toggle live AI vs local test
runLive = true; // set to false to avoid external LLM calls

`secret-variables.js`
// Hugging Face token (demo only; move to a server in production)
HF_TOKEN = "hf_...";
```

---

## Troubleshooting

| Symptom | Likely cause | Fix |
|---|---|---|
| “Entry cannot be blank” (001) | Empty input | Enter a 5‑digit ZIP |
| “Entry must be a number” (002) | Non‑digits in input | Use only digits 0‑9 |
| “Entry must be 5 numbers” (003) | Too short/long | Enter exactly 5 digits |
| Modal shows a long error with code 004 | Downstream network/JSON error | Check DevTools Console; geocoding may have no results for that input; guard `result.results?.[0]` |
| AI section never shows | `runLive` is false, or HF token missing/invalid | Set `runLive = true` and add a valid token (or use Test mode) |

**Hardening tip**: the code assumes `result.results[0]` exists. In production, add guards:

```js
if (!Array.isArray(result.results) || !result.results.length) {
  return caughtError("No geocoding results for that input.");
}
```

---

## Extending

### Swap ZIP for City search

Instead of `fetchByZip`, wire the button to `fetchByCity(userInput)` to accept names like “New Orleans”.

### Display more weather

Request more fields from Open‑Meteo (e.g., `current=temperature_2m,relative_humidity_2m,wind_speed_10m`) and render a table.

---

## Credits

- **Open‑Meteo** for free weather + geocoding APIs.
- **Hugging Face** for the Inference Router and models.
- **Bootstrap** for the UI scaffolding.
