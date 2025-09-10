
codex-lv2-may-2025

# 🧪 AI Chatbot Project

## 📖 About  
Describe your project here. What does the chatbot do? Why is it useful or interesting?  

---

## 🚀 Getting Started  

### Prerequisites  
- Web browser (Chrome, Firefox, Edge)  
- Node.js (for running `npx live-server`)  

### Setup Steps  
1. Clone or download this repository.  
2. Open a terminal in the project folder.  
3. Run the project locally with:  
   ```bash
   npx live-server
   ```  
4. Open the URL shown in your terminal (usually `http://127.0.0.1:8080`).  

---

## 🛠️ Tech Used  
- **HTML**: Structure of the page  
- **CSS / Bootstrap**: Styling and layout  
- **JavaScript**: App logic, event handling, fetch calls  
- **helpers.js**: Utility functions for working with the DOM  
- **Git / GitHub**: Version control  

---

## 📋 Features  
- Input box for user prompt  
- Button to send prompt  
- Output area for AI reply  
- Console logging for debugging  
- Validation for empty input  
- Challenge extensions (optional)  

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

## ✅ Checklist  

### Step 1: Setup  
- [x] Create README  
- [x] All required files created: `index.html`, `chatbot.js`, `helpers-full.js`, `secret-variables.js`, `README.md`, `.gitignore`  
- [x] Bootstrap CSS linked and scripts included in correct order  
- [x] Git repository initialized with first commit  
- [x] Live server runs and page loads without errors  

### Step 2: UI & DOM Wiring  
- [x] Input field, send button, and output area added to HTML  
- [x] Bootstrap styling applied to input and button  
- [x] Output area converted to Bootstrap card structure  
- [x] Button click event wired and input value captured  
- [x] Empty input shows warning, valid input shows "Thinking…"  

### Step 3: Model Call (HF Inference)  
- [x] `sendToModel()` function created with Hugging Face fetch snippet  
- [x] API token replaced and test prompt added  
- [x] `botReply` variable set and function called from button handler  

### Step 4: Use userPrompt from Input  
- [x] User input captured and stored in `userPrompt` variable  
- [x] `sendToModel()` updated to use dynamic user input  
- [x] Reply rendered in output area when fetch resolves  
- [x] Different prompts produce sensible replies  

### Step 5: Validation Polish  
- [x] If statement added to check if input is empty  
- [x] If statement shows validation message when input is empty  
- [x] If statement prevents model call when input is empty  
- [x] If statement clears validation when input has text  

### Step 6: Challenge Extensions (Optional)  
- [x] At least one challenge feature implemented (role-based prompts, UI controls, etc.)  
- [x] New feature works without breaking previous functionality  
- [x] Git commits made for any new features  

### Code Quality & Version Control  
- [x] All steps committed to Git with meaningful messages  
- [x] Code is clean and well-organized  

---

## 📚 References & Resources  
- [MDN: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)  
- [MDN: Working with Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)  
- [MDN: Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays)  
- [Bootstrap Docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)  
- Hugging Face model pages → Inference/API tab for generated fetch code  

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




## 🙌 Acknowledgements  
List any people or resources you consulted while working on this project.  

