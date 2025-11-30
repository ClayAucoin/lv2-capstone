# 🎯 Capstone Project - All Levels (Concatenated)

This file contains all levels of the capstone project concatenated into a single document. Each level is separated by clear delimiters to allow easy parsing back into individual files.

**Structure:**

- Each level starts with `<!-- LEVEL_START: capstone-lv-X.md -->`
- Each level ends with `<!-- LEVEL_END: capstone-lv-X.md -->`
- External links are preserved as-is
- Navigation links are preserved for reference

---

<!-- LEVEL_START -->

---

# Level 1: Project Planning & Setup

**Goal:** Plan your capstone project and set up the development environment.

---

## 📋 **IMPORTANT: Complete Planning First!**

**Before you start coding, you must work through the planning document:**

👉 **[Week 8 Capstone OUTLINE.md](./OUTLINE.md)**

**Complete all sections of the planning document before proceeding with Level 1.** This will help you understand the project requirements, technical specifications, and success criteria.

---

## What You'll Do

Create a new project folder and set up all the necessary files to get started.

## Instructions

- Make a new folder for your project named `capstone-project`
- Inside, create these files:
  - `index.html`
  - `app.js`
  - `styles.css`
  - `helpers-full.js` (download from [class repository](../../week5-event-driven-apps/other-dev-files/helpers-full.js))
  - `README.md` (copy from [EXAMPLE_README.md](../week7-ai-models-and-APIs/EXAMPLE_README.md) template)

## ℹ Third-Party File Info

Download `helpers-full.js` from the class repo:
[https://github.com/rmccrear/codex-lv2-may-2025/tree/main/guides/week5-event-driven-apps/other-dev-files](https://github.com/rmccrear/codex-lv2-may-2025/tree/main/guides/week5-event-driven-apps/other-dev-files)

Place it in your project folder before linking it in `index.html`.

## ✅ Check

Open your project folder in VS Code and verify you can see all 4 files:

- `index.html`
- `app.js` (we will use this instead of `script.js`)
- `styles.css`
- `helpers-full.js` (we will use this instead of `helpers.js` since it has a few more functions to use.)
- `README.md`

If any files are missing, create them before moving to Level 2.

> **Note:** What about `.gitignore` and `secret-variables.js`? These will be covered in a later level. (Before we add secrets.)

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 2: Basic HTML Structure & Live Server Test

## What You'll Do

Set up the basic HTML structure, link all necessary files, and test with live-server.

## Instructions

- Add `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
- Add an H1 tag with your project name
- Link Bootstrap CSS (via CDN)
- Include these scripts, in order:
  1. `helpers-full.js`
  2. `secret-variables.js`
  3. `app.js`

## Example Script Order in index.html

```html
<!-- Example script order in index.html -->
<script src="helpers-full.js"></script>
<script src="secret-variables.js"></script>
<script src="app.js"></script>
```

## Add a console log to your JavaScript `app.js`

in `app.js`

```javascript
console.log("Hello from app.js");
```

## 💡 Code Hints

Need help with the HTML structure? Check out these snippets:

- **HTML IDs and JavaScript access:** See [SNIPPETS.md](./SNIPPETS.md#-html-ids-and-javascript-access) for ID naming and element access
- **Bootstrap classes:** See [SNIPPETS.md](./SNIPPETS.md#-bootstrap-classes) for styling examples

## ✅ Check

1. In your terminal, run `npx live-server` in your project folder
2. Your browser should automatically open to a local URL (like http://127.0.0.1:8080)
3. You should see your project title as a large heading (H1)
4. Open Chrome DevTools (F12) and check the Console tab
   - Look for any red error messages about missing files
   - Check that you can see a console log that says "Hello from app.js"
5. If you see errors about missing files, double-check your file names and paths

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 3: Git Setup

## What You'll Do

Initialize version control and push your project to GitHub.

## Instructions

- Initialize a git repository (`git init`)
- Add all files to git (`git add .`)
- Create your first commit with a meaningful message like `chore: initial project setup`
- Push to GitHub (if you have a remote repository set up)

## ✅ Check

1. Open your terminal/command prompt in your project folder
2. Run `git status` - you should see "On branch main" and "nothing to commit, working tree clean"
3. Run `git log --oneline` - you should see your commit message like "chore: initial project setup"
4. **IMPORTANT:** Check that `secret-variables.js` is NOT on GitHub:
   - Go to your GitHub repository in a web browser
   - Look through the files - you should NOT see `secret-variables.js` listed
   - If you see it, check your `.gitignore` file includes `secret-variables.js`
5. If you see any errors, make sure you're in the correct folder and try the git commands again

---

## 🔍 Exploration: Commit Message Prefixes

You might be wondering why we use prefixes like `chore:` or `feature:` at the start of commit messages. These are part of a best practice convention called **Conventional Commits** that helps organize and categorize your changes:

- **`chore:`** - For maintenance tasks, setup, or non-functional changes (like adding files, updating dependencies, or initial project setup)
- **`feature:`** - For new functionality or features you're adding to your project
- **`fix:`** - For bug fixes or corrections
- **`docs:`** - For documentation changes
- **`style:`** - For formatting, styling, or code style changes
- **`refactor:`** - For code restructuring without changing functionality

Using these prefixes makes it easier to:

- Quickly understand what type of change each commit represents
- Generate changelogs automatically
- Filter commits by type when reviewing project history
- Follow consistent practices in professional development

In this level, we use `chore:` because we're doing initial project setup - creating the foundation without adding new features yet.

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 4: Overall Project Check

## What You'll Do

Verify everything is working correctly with both live-server and git.

## Instructions

Run comprehensive tests to ensure your project setup is complete and secure.

## ✅ Check

1. **Live Server Test:**

   - Run `npx live-server` in your project folder
   - Open your browser and navigate to the live-server URL
   - You should see your project title as a large heading (H1)
   - Open Chrome DevTools (F12) and check the Console tab
   - Look for any red error messages - if there are none, you're good to go!

2. **Git Status Check:**

   - Run `git status` - you should see "On branch main" and "nothing to commit, working tree clean"
   - Run `git log --oneline` - you should see your commit message

3. **Security Check:**
   - Go to your GitHub repository in a web browser
   - Look through the files - you should NOT see `secret-variables.js` listed
   - If you see it, check your `.gitignore` file includes `secret-variables.js`
   - If you do accidentally commit your `secret-variables.js`, GitHub will not allow you to upload it. Ask for help on how to remove it from your git history.

## Check off these items in your README:

- [ ] All required files created: `index.html`, `app.js`, `styles.css`, `helpers-full.js`, `secret-variables.js`, `README.md`, `.gitignore`
- [ ] Bootstrap CSS linked and scripts included in correct order
- [ ] Git repository initialized with first commit and pushed to GitHub
- [ ] Live server runs and page loads without errors
- [ ] `secret-variables.js` is NOT visible on GitHub (security check passed)

## 🎉 Congratulations!

You've set up your project foundation securely. Time to build the UI!

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 5: UI & DOM Wiring - Basic Interface

**Goal:** Build the Bootstrap UI, connect it with helpers (or direct DOM methods), and test interactions.
_(Choose meaningful `id`s. Example only: `<input id="userPrompt">`.)_

---

## What You'll Do

Add the basic interface elements to your HTML.

## Instructions

In the HTML, add the interface:

- An input for the user's prompt
- A button to send
- A plain `<div>` or a `<pre>` for the output (no styling yet)

## 💡 Code Hints

Need help with the HTML structure? Check out these snippets:

- **HTML IDs and JavaScript access:** See [SNIPPETS.md](./SNIPPETS.md#-html-ids-and-javascript-access) for ID naming and element access
- **Input elements:** See [SNIPPETS.md](./SNIPPETS.md#-bootstrap-classes) for `<input>` examples
- **Button elements:** See [SNIPPETS.md](./SNIPPETS.md#-bootstrap-classes) for `<button>` examples
- **Basic structure:** Use meaningful `id` attributes like `id="user-chat-input"` and `id="send-btn"`

## ✅ Check

Navigate to your file in your browser (remember, you're using live-server) and verify you can see:

- A text input box where you can type
- A button (it won't do anything yet, but it should be visible)
- A blank area below for the output
- Open Chrome DevTools (F12) and check the Console tab for any errors

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 6: Bootstrap Styling

## What You'll Do

Add Bootstrap classes to style your input and button.

## Instructions

Add Bootstrap classes to style the input and button.

## 💡 Code Hints

**Stuck on styling?** Bootstrap has special classes for form elements. Check out the [Bootstrap Classes section in SNIPPETS.md](./SNIPPETS.md#-bootstrap-classes) for inspiration.

## 📚 Connect to Previous Lessons

**Working with Bootstrap classes?** Check out [Week 4, Lesson 2: Bootstrap Framework](../../week4-css-frameworks/lesson-2-bootstrap-framework/) for a complete guide to Bootstrap utilities and components. Focus on the button and form styling sections.

## ✅ Check

1. Open your webpage in a browser
2. You should see your input and button with Bootstrap styling (they should look more polished)
3. The input should have a clean border and the button should have Bootstrap button styling
4. Open Chrome DevTools (F12) and check the Console tab for any errors
5. If the styling doesn't look right, check that Bootstrap CSS is properly linked in your HTML

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 7: Card Structure

## What You'll Do

Convert the output area into a proper Bootstrap card.

## Instructions

Convert the output `<div>` into a Bootstrap card with proper structure (card container, body, title, and text).

## 💡 Code Hints

**Building Bootstrap cards?** Cards need specific container and content classes to look right. Check out the [Bootstrap Classes section in SNIPPETS.md](./SNIPPETS.md#-bootstrap-classes) for card structure examples.

## ✅ Check

1. Open your webpage in a browser
2. You should see a Bootstrap card where your output area used to be
3. The card should have a clean border, padding, and professional appearance
4. Open Chrome DevTools (F12) and check the Console tab for any errors
5. If the card doesn't appear styled, check that you're using the correct Bootstrap card classes

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 8: IDs and Testing

## What You'll Do

Add meaningful IDs to all elements and test that they can be accessed.

## Instructions

- Add meaningful `id` attributes to all elements (input, button, card, etc.)
- Test that you can access them with `getElementById()` in the console
- Use `setProperty()` to test that you can modify element properties

## 💡 Code Hints

Need help with IDs? Check out these snippets:

- **HTML IDs and JavaScript access:** See [SNIPPETS.md](./SNIPPETS.md#-html-ids-and-javascript-access) for ID naming and element access
- **Testing elements:** Use `console.log(document.getElementById("your-id"))` to test access

## ✅ Check

1. Open your webpage in a browser
2. Open Chrome DevTools (F12) and go to the Console tab
3. Type `document.getElementById("your-input-id")` and press Enter
4. You should see the input element returned (not null)
5. Test all your IDs this way to make sure they work
6. Try using `setProperty()` to test element modification:
   - `setProperty("your-input-id", "backgroundColor", "yellow")`
   - `setProperty("your-button-id", "border", "3px solid red")`
7. If any return `null`, check that the ID is spelled correctly in your HTML

## 🔍 Optional: Diving Deeper - DOM Operations

For extra practice, you can also test element access with:

```javascript
console.log(document.getElementById("your-input-id"));
```

This will show you the full element object in the console, which can help you understand what properties and methods are available.

You can also use the native DOM `style` property to modify elements directly:

```javascript
// Same as setProperty("your-input-id", "backgroundColor", "yellow")
document.getElementById("your-input-id").style.backgroundColor = "yellow";

// Same as setProperty("your-button-id", "border", "3px solid red")
document.getElementById("your-button-id").style.border = "3px solid red";
```

The DOM Operations approach is the standard way to manipulate styles in professional JavaScript development and is used across all major frameworks and libraries. Learning the native DOM API prepares you for real-world codebases where helper functions aren't available.

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 9: Event Listeners

## What You'll Do

Add event listeners to your button and input using the `onEvent` helper function.

## Instructions

- Add an event listener to your button for the "click" event
- Add an event listener to your input for the "input" event
- Use `onEvent(elementId, eventType, function)` syntax

## 💡 Code Hints

Need help with event listeners? Check out these snippets:

- **Event handling:** See [SNIPPETS.md](./SNIPPETS.md#-event-handling) for `onEvent` examples
- **Anonymous functions:** Use `function() { }` syntax for your event handlers

## ✅ Check

1. Open your webpage in a browser
2. Open Chrome DevTools (F12) and go to the Console tab
3. Click your button - you should see a message in the console
4. Type in your input - you should see messages in the console as you type
5. If you don't see messages, check that your event listeners are set up correctly

## 🔍 Optional: Diving Deeper - Named Functions

Instead of using anonymous functions, you can create named functions for your event handlers:

```javascript
function clickHandler() {
  console.log("Button was clicked!");
  setText("output", "Hello from the button!");
}

// Use the named functions with onEvent
onEvent("my-button", "click", clickHandler);
```

Named functions make your code more readable and reusable, especially when you need to use the same handler for multiple elements.

## 🔍 Optional: Diving Deeper - Native addEventListener

You can also use the native DOM `addEventListener` method instead of the helper function:

```javascript
function clickHandler() {
  console.log("Button was clicked!");
  setText("output", "Hello from the button!");
}

// Use native addEventListener
document.getElementById("my-button").addEventListener("click", clickHandler);
```

This approach gives you direct access to the native DOM API and is the standard method used in professional JavaScript development.

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 10: Basic Input Handling

## What You'll Do

Get the value from your input and display it in the output area.

## Instructions

- Use `getValue()` to get the input value
- Use `setText()` to display it in the output area
- Test with different inputs

## 💡 Code Hints

Need help with input/output? Check out these snippets:

- **Getting input values:** See [SNIPPETS.md](./SNIPPETS.md#-input-output) for `getValue()` examples
- **Setting text:** See [SNIPPETS.md](./SNIPPETS.md#-input-output) for `setText()` examples

## ✅ Check

1. Open your webpage in a browser
2. Type something in the input box
3. Click the button
4. You should see the text you typed appear in the output area
5. Try typing different things and clicking the button again
6. If nothing appears, check that you're using `getValue()` and `setText()` correctly

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 11: Secret Files Setup

## What You'll Do

Create the secret files needed for API keys and version control.

## Instructions

- Create `secret-variables.js` for storing API keys
- Create `.gitignore` to prevent committing secrets

## 📄 `secret-variables.js` (starter template)

```js
// secret-variables.js
// Store secret keys or tokens here.
// ⚠️ Do not commit this file to a public repo.

// Put your huggingface secret token here
HF_TOKEN = "your-huggingface-api-token-goes-here";

// Optional: if you are using an API with secret, put it
API_TOKEN = "your-api-key-goes-here";
```

## 📄 `.gitignore` (starter template)

Copy this and put it in the `.gitignore`.

Check that the filenames are all spelled exactly right.

Don't commit before you add your .gitignore

```gitignore
# Secret files (⚠️ do not push secrets!)
secret-variables.js
```

## ✅ Check

1. Create `secret-variables.js` with the template above
2. Create `.gitignore` with the template above
3. Verify both files exist in your project folder
4. Make sure the filenames are spelled exactly right
5. Don't commit until you create your `.gitignore` to keep your token off GitHub and prevent it from becoming public information.

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 12: Input Validation

## What You'll Do

Add validation to check if the input is empty before processing.

## Instructions

- Use an `if` statement to check if the input is empty
- Show an error message if it's empty
- Only process the input if it's not empty

## 💡 Code Hints

Need help with validation? Check out these snippets:

- **Conditional logic:** See [SNIPPETS.md](./SNIPPETS.md#-conditional-logic) for `if` statement examples
- **Error messages:** Use `setText()` to show error messages in the output area. For example: "Please enter text." or another similar error message.
- **Change the color:** Use `setProperty()` to make error text red, for example: `setProperty("output", "color", "red")`

## ✅ Check

1. Open your webpage in a browser
2. Click the button without typing anything - you should see an error message
3. Type something and click the button - you should see the text you typed
4. Clear the input and click the button again - you should see the error message again
5. If the validation doesn't work, check your `if` statement and error message

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 13: API Integration Planning

## What You'll Do

Choose and plan your API integration based on your project requirements.

## Instructions

- Review the [OUTLINE.md](./OUTLINE.md) requirements for API integration
- Choose one or more APIs from the suggested list
- Plan how you'll integrate them into your project
- Set up your API keys in `secret-variables.js`

## 💡 Code Hints

Need help choosing APIs? Check out these resources:

- **API Selection:** See [SNIPPETS.md](./SNIPPETS.md#-api-calls) for API examples
- **API Keys:** Make sure to add your keys to `secret-variables.js` and reference them as global variables

## 📚 Connect to Previous Lessons

**Working with APIs?** Check out [Week 6: APIs and Postman](../../week6-APIs-and-postman/) for a complete guide to API integration, testing with Postman, and handling responses.

## ✅ Check

1. Review the [OUTLINE.md](./OUTLINE.md) requirements
2. Choose your APIs and plan your integration
3. Add your API keys to `secret-variables.js`
4. Test that your keys are accessible as global variables
5. If you need help choosing APIs, ask your instructor or check the suggested list in the outline

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 14: Basic API Call

## What You'll Do

Make your first API call and display the response.

## Instructions

- Use `fetch()` to make an API call
- Handle the response with `.then()` and `.catch()`
- **Two changes needed on generated code:** Change `response.text()` to `response.json()`, and change arrow function to regular function (see Postman Generated Code section in Code Hints)
- Display the response in your output area

## 💡 Code Hints

Need help with API calls? Check out these snippets:

- **Postman Generated Code:** See [SNIPPETS.md](./SNIPPETS.md#-postman-generated-code) for `fetch()` examples
- **Response handling:** Use `.then()` to process the response

## ✅ Check

1. Open your webpage in a browser
2. Click the button to trigger your API call
3. You should see the API response in the output area
4. Open Chrome DevTools (F12) and check the Console tab for any errors
5. If you see errors, check your API URL and response handling

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 15: API Response Processing

## What You'll Do

Process the API response to extract and display meaningful data.

## Instructions

- Parse the JSON response
- Extract the specific data you need (for example, temperature? pokemon stats?)
- Format and display it nicely in your output area

## 💡 Code Hints

Need help with response processing? Check out these snippets:

- **JSON parsing:** See [SNIPPETS.md](./SNIPPETS.md#-api-calls) for response handling examples
- **Data extraction:** Use dot notation to access nested properties
- **Formatting:** Use `console.log()` to test how you want to format the data before displaying it to users in a later level.

## ✅ Check

1. Open your webpage in a browser
2. Click the button to trigger your API call
3. You should see formatted data in the output area (not raw JSON)
4. The data should be meaningful and well-formatted
5. If you see raw JSON or errors, check your response processing code

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 16: Error Handling (Optional Challenge)

## What You'll Do

Add proper error handling to your API calls.

## Instructions

- Use `.catch()` to handle network errors (connection issues, timeouts)
- Use `if(response.ok === false) { console.log('API Error: ' + response.status + ' ' + response.statusText) }` to handle API errors (404, 500, etc.)
- Display user-friendly error messages to your users (not just console logs)
- Test your error handling by temporarily breaking the API URL:
  - Change `https://` to `thtps://` (typo in protocol)
  - Add extra characters to the URL like `&latitude=500` (There is not latitude 500, latitude goes from `-90` to `90`.)
  - Put a typo in the endpoint path, for example: change `/v1/forecast` to `/v1/forecst` (missing 'a')
  - **Remember to fix the URL back to working state when done testing**

## 💡 Code Hints

Need help with error handling? Check out these snippets:

- **Error handling:** See [SNIPPETS.md](./SNIPPETS.md#-api-calls) for `.catch()` examples
- **User messages:** Use `setText()` to show error messages to users

## ✅ Check

1. Open your webpage in a browser
2. Click the button to trigger your API call
3. You should see the API response in the output area
4. Temporarily break your API URL (add "x" to the end)
5. Click the button again - you should see a user-friendly error message
6. Fix the API URL and test again - it should work normally

---

---

<!-- LEVEL_END -->

# Level 17: User Interaction Design

## What You'll Do

Design and implement user interactions that make your API calls more dynamic and useful. This is your chance to get creative and bring your unique idea to life! Think about what would make your app engaging and fun to use. Consider how users will discover and interact with your creation - will they click buttons, type inputs, or explore different options? This is where your project transforms from a simple API call into something truly special that showcases your creativity and problem-solving skills.

## Instructions

- Think about how you want your user to interact with your app and the API you chose
- Consider different interaction patterns:
  - **Single button:** One button that triggers the API call
  - **Multiple buttons:** Different buttons for different actions (e.g., one for each city, like in week 6 weather-app)
  - **Input fields:** Allow users to enter data that gets inserted to the URL (e.g., latitude and longitude)
  - **Conditional logic:** Use if statements to handle different user inputs (e.g., `if(input === "joke") { fetchJokeAPI() }`)
- Choose the interaction pattern that best fits your API and user needs
- Implement your chosen interaction pattern
- Remember to test as you go, as we did in the previous levels.

## 💡 Code Hints

Need help with user interactions? Check out these snippets:

- **Multiple buttons:** See [SNIPPETS.md](./SNIPPETS.md#-event-handling) for multiple button examples
- **Input handling:** Use `getValue()` to get user input and add it to your API URL
- **Conditional logic:** Use `if` statements to handle different user choices

## ✅ Check

1. Open your webpage in a browser
2. Test your chosen interaction pattern:
   - If using buttons, click each one to verify it works
   - If using inputs, type different values and test the results
   - If using conditional logic, test different input scenarios
3. Verify that your API calls work with the user interactions
4. Make sure the user experience feels intuitive and responsive

<!-- LEVEL_START -->

---

# Level 18: AI Integration Planning

## What You'll Do

Choose and plan your AI model integration based on your project requirements.

## Instructions

- Review the [OUTLINE.md](./OUTLINE.md) requirements for AI integration
- Choose one or more AI models from the suggested list
- Plan how you'll integrate them into your project
- Set up your AI API keys in `secret-variables.js`

## 💡 Code Hints

Need help choosing AI models? Check out these resources:

- **AI Model Selection:** Go to [huggingface.co/models](https://huggingface.co/models) and filter by "text generation" and "fireworks" (as shown in [Week 7 Lesson 1](../../week7-ai-models-and-APIs/lesson-1.md))
- **API Keys:** Make sure to add your keys to `secret-variables.js` and reference them as global variables

## 📚 Connect to Previous Lessons

**Working with AI models?** Check out [Week 7: AI Models and APIs](../../week7-ai-models-and-APIs/) for a complete guide to AI integration, Hugging Face models, and prompt engineering.

## ✅ Check

1. Review the [OUTLINE.md](./OUTLINE.md) requirements
2. Choose your AI models and plan your integration
3. Add your AI API keys to `secret-variables.js`
4. Test that your keys are accessible as global variables
5. If you need help choosing AI models, ask your instructor or check the suggested list in the outline

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 19: Basic AI Call

## What You'll Do

Make your first AI model call and display the response.

## Instructions

- Use `fetch()` to make an AI model call
- Handle the response with `.then()` and `.catch()`
- Extract the generated text from the response (like in [Week 7 Lesson 1](../../week7-ai-models-and-APIs/lesson-1.md))
- Display the generated text in your output area

## 💡 Code Hints

Need help with AI calls? Check out these snippets:

- **AI model calls:** See [SNIPPETS.md](./SNIPPETS.md#hugging-face-generated-code) for Hugging Face examples
- **Response handling:** Use the callback in `.then()` to process the response
- **Error handling:** Use callback in `.catch()` to handle errors

## ✅ Check

1. Open your webpage in a browser
2. Click the button to trigger your AI call
3. You should see the AI response in the output area
4. Open Chrome DevTools (F12) and check the Console tab for any errors
5. If you see errors, check your AI API URL and response handling

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 20: AI Response Processing

## What You'll Do

Process the AI response to extract and display meaningful data.

## Instructions

- Parse the JSON response
- Extract the specific data you need
- Format and display it nicely in your output area

## 💡 Code Hints

Need help with AI response processing? Check out these snippets:

- **JSON parsing:** See [SNIPPETS.md](./SNIPPETS.md#-ai-model-integration) for response handling examples
- **Data extraction:** Use dot notation to access nested properties
- **Formatting:** Use template literals to format your output

## ✅ Check

1. Open your webpage in a browser
2. Click the button to trigger your AI call
3. You should see formatted data in the output area (not raw JSON)
4. The data should be meaningful and well-formatted
5. If you see raw JSON or errors, check your response processing code

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 21: AI Error Handling (Optional Challenge)

## What You'll Do

Add proper error handling to your AI model calls.

## Instructions

- Use `.catch()` to handle AI errors (similar to Level 16 API error handling)
- Use `if(response.ok === false) { console.log('AI Error: ' + response.status + ' ' + response.statusText) }` to handle AI API errors
- Display user-friendly error messages to your users (not just console logs)
- Test your error handling by temporarily breaking the AI API call:
  - Change `https://` to `thtps://` (typo in protocol)
  - Put a typo in the endpoint path, for example: change `/v1/chat/completions` to `/v1/chat/completionss` (extra 's')
  - Add invalid data to the request body like `"model": "invalid-model-name"` (Look at the POJO sent as an argument to the fetch function call.)
  - **Remember to fix the API call back to working state when done testing**

## 💡 Code Hints

Need help with AI error handling? Check out these snippets:

- **Error handling:** See [SNIPPETS.md](./SNIPPETS.md#-ai-model-integration) for `.catch()` examples
- **User messages:** Use `setText()` to show error messages to users

## ✅ Check

1. Open your webpage in a browser
2. Click the button to trigger your AI call
3. You should see the AI response in the output area
4. Temporarily break your AI API URL (add "x" to the end)
5. Click the button again - you should see a user-friendly error message
6. Fix the AI API URL and test again - it should work normally

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 22: AI Interaction Design

## What You'll Do

Design and implement user interactions that make your AI calls more dynamic and engaging. This is where you can really showcase your creativity with AI! Think about how users will interact with your AI - will they ask questions, give instructions, or explore different AI personalities? Consider what would make your AI app feel magical and intuitive. This is your opportunity to create something that demonstrates the power of AI while being fun and useful for your users.

## Instructions

- Think about how you want your user to interact with your AI and what makes it special
- Consider different AI interaction patterns:
  - **Question-Answer:** Users ask questions and get AI responses
  - **Creative Writing:** Users provide prompts and get AI-generated stories, poems, or content
  - **Personality Chat:** Users chat with an AI that has a specific personality (pirate, robot, etc.)
  - **Task Assistant:** Users give instructions and AI helps complete tasks
  - **Interactive Story:** Users make choices that influence AI-generated story outcomes
  - **Multi-turn Conversations:** Users have ongoing conversations with context
  - **Special Challenge - Data-Enhanced AI:** Use your API data to create richer, more personalized AI prompts (e.g., "Based on the weather in [city], write a poem about the day" or "Create a story using this Pokemon's stats: [pokemon data]")
- Choose the AI interaction pattern that best fits your vision and user needs
- Implement your chosen AI interaction pattern
- Test different prompts and responses to ensure your AI feels engaging
- Remember to test as you go, as we did in the previous levels

## 💡 Code Hints

Need help with AI interactions? Check out these snippets:

- **AI calls:** See [SNIPPETS.md](./SNIPPETS.md#hugging-face-generated-code) for AI integration examples
- **Input handling:** Use `getValue()` to get user input and add it to your AI prompt
- **Data-enhanced prompts:** Combine your API data with AI prompts using template literals:
  ```js
  let prompt = `Based on the weather in ${cityName}: ${weatherDescription}, write a creative story about the day.`;
  ```
- **Response formatting:** Use template literals to format AI responses nicely
- **Conditional logic:** Use `if` statements to handle different user inputs or AI responses

## ✅ Check

1. Open your webpage in a browser
2. Test your chosen AI interaction pattern:
   - If using question-answer, try different types of questions
   - If using creative writing, test different prompt styles
   - If using personality chat, verify the AI maintains its character
   - If using task assistance, test different types of tasks
   - If using data-enhanced AI, test with different API data to see how it affects AI responses
3. Verify that your AI calls work smoothly with the user interactions
4. Make sure the AI responses feel engaging and relevant to user inputs
5. Test edge cases like empty inputs or very long prompts
6. If using API data in prompts, verify the data is properly formatted and the AI uses it meaningfully (see [Preformatted Raw Text Formatting with CSS](./SNIPPETS.md#-preformatted-raw-text-formatting-with-css) for formatting help)

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 23: Integration Testing

## What You'll Do

Test that all your integrations (API and AI) work together correctly.

## Instructions

- Test your API calls with different inputs
- Test your AI calls with different prompts
- Test error handling for both
- Make sure everything works together

## 💡 Code Hints

Need help with testing? Check out these resources:

- **Testing strategies:** Test with different inputs and edge cases
- **Error scenarios:** Test with invalid inputs and broken URLs
- **Integration points:** Make sure API and AI responses work together

## ✅ Check

1. Open your webpage in a browser
2. Test your API calls with different inputs
3. Test your AI calls with different prompts
4. Test error handling for both
5. Make sure everything works together smoothly
6. If you find issues, fix them before moving to the next level

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 24: UI Polish

## What You'll Do

Polish your user interface with better styling and user experience.

## Instructions

- Add better Bootstrap styling
- Improve the layout and spacing
- Add loading states and feedback
- Make the interface more user-friendly

## 💡 Code Hints

Need help with UI polish? Check out these resources:

- **Bootstrap components:** See [SNIPPETS.md](./SNIPPETS.md#-bootstrap-classes) for styling examples
- **Loading states:** Use `setText()` to show loading messages
- **User feedback:** Add visual feedback for user actions

## ✅ Check

1. Open your webpage in a browser
2. Your interface should look polished and professional
3. Add loading states for API calls
4. Improve the overall user experience
5. Test that all functionality still works after styling changes

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 25: Final Testing

## What You'll Do

Perform comprehensive testing of your entire application.

## Instructions

- Test all functionality thoroughly
- Test with different inputs and edge cases
- Test error handling
- Make sure everything works as expected

## 💡 Code Hints

Need help with testing? Check out these resources:

- **Testing checklist:** Test all features systematically
- **Edge cases:** Test with empty inputs, very long inputs, special characters
- **Error scenarios:** Test with broken APIs, network issues, invalid responses

## ✅ Check

1. Open your webpage in a browser
2. Test all functionality thoroughly
3. Test with different inputs and edge cases
4. Test error handling
5. Make sure everything works as expected
6. Fix any issues you find

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 26: Documentation

## What You'll Do

Update your README.md with comprehensive project documentation.

## Instructions

- Update your README.md with project description
- Add setup instructions
- Add usage instructions
- Add API information
- Add screenshots if helpful

## 💡 Code Hints

Need help with documentation? Check out these resources:

- **README template:** Use the [EXAMPLE_README.md](../week7-ai-models-and-APIs/EXAMPLE_README.md) as a template
- **Documentation best practices:** Include setup, usage, and API information
- **Screenshots:** Add screenshots to show your project in action

## ✅ Check

1. Update your README.md with comprehensive documentation
2. Include setup instructions
3. Include usage instructions
4. Include API information
5. Add screenshots if helpful
6. Make sure the documentation is clear and complete

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 27: Final Commit

## What You'll Do

Commit all your final changes and push to GitHub.

## Instructions

- Add all your changes to git
- Create a final commit with a meaningful message
- Push to GitHub

## 💡 Code Hints

Need help with git? Check out these resources:

- **Git commands:** Use `git add .`, `git commit -m "message"`, and `git push`
- **Commit message:** Use a descriptive message like `feat: complete capstone project with API and AI integration`

## ✅ Check

1. Run `git status` to see what files have changed
2. Add all changes with `git add .`
3. Create a commit with a meaningful message
4. Push to GitHub with `git push`
5. Verify your changes are on GitHub

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 28: Project Review

## What You'll Do

Review your project against the requirements and make any final adjustments.

## Instructions

- Review the [OUTLINE.md](./OUTLINE.md) requirements
- Check that you've met all the technical requirements
- Check that you've met all the functional requirements
- Make any final adjustments needed

## 💡 Code Hints

Need help with review? Check out these resources:

- **Requirements checklist:** Go through each requirement systematically
- **Technical requirements:** Check API integration, AI integration, error handling
- **Functional requirements:** Check user interface, user experience, functionality

## ✅ Check

1. Review the [OUTLINE.md](./OUTLINE.md) requirements
2. Check that you've met all the technical requirements
3. Check that you've met all the functional requirements
4. Make any final adjustments needed
5. Test everything one more time

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 29: Final Polish

## What You'll Do

Add final polish to your project to make it presentation-ready.

## Instructions

- Add any final styling improvements
- Add any final functionality improvements
- Make sure everything is working perfectly
- Prepare for presentation

## 💡 Code Hints

Need help with final polish? Check out these resources:

- **Styling improvements:** Use Bootstrap classes for better appearance
- **Functionality improvements:** Add any missing features
- **Presentation prep:** Make sure everything works smoothly

## ✅ Check

1. Add any final styling improvements
2. Add any final functionality improvements
3. Make sure everything is working perfectly
4. Prepare for presentation
5. Test everything one final time

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 30: Presentation Prep

## What You'll Do

Prepare your project for presentation and demonstration.

## Instructions

- Prepare a demo script
- Test your demo thoroughly
- Prepare for questions
- Make sure everything is ready

## 💡 Code Hints

Need help with presentation prep? Check out these resources:

- **Demo script:** Plan what you'll show and in what order
- **Testing:** Test your demo thoroughly
- **Questions:** Be prepared to explain your code and decisions

## ✅ Check

1. Prepare a demo script
2. Test your demo thoroughly
3. Prepare for questions
4. Make sure everything is ready
5. Practice your presentation

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 31: Final Testing

## What You'll Do

Perform one final comprehensive test of your entire application.

## Instructions

- Test all functionality one more time
- Test with different inputs and edge cases
- Test error handling
- Make sure everything is working perfectly

## 💡 Code Hints

Need help with final testing? Check out these resources:

- **Testing checklist:** Test all features systematically
- **Edge cases:** Test with empty inputs, very long inputs, special characters
- **Error scenarios:** Test with broken APIs, network issues, invalid responses

## ✅ Check

1. Test all functionality one more time
2. Test with different inputs and edge cases
3. Test error handling
4. Make sure everything is working perfectly
5. Fix any issues you find

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 32: Final Commit

## What You'll Do

Commit all your final changes and push to GitHub.

## Instructions

- Add all your changes to git
- Create a final commit with a meaningful message
- Push to GitHub

## 💡 Code Hints

Need help with git? Check out these resources:

- **Git commands:** Use `git add .`, `git commit -m "message"`, and `git push`
- **Commit message:** Use a descriptive message like `feat: final capstone project completion`

## ✅ Check

1. Run `git status` to see what files have changed
2. Add all changes with `git add .`
3. Create a commit with a meaningful message
4. Push to GitHub with `git push`
5. Verify your changes are on GitHub

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 33: Project Submission

## What You'll Do

Submit your project for evaluation.

## Instructions

- Submit your project according to your instructor's guidelines
- Make sure all requirements are met
- Prepare for evaluation

## 💡 Code Hints

Need help with submission? Check out these resources:

- **Submission guidelines:** Follow your instructor's specific requirements
- **Requirements checklist:** Make sure all requirements are met
- **Evaluation prep:** Be ready to explain your project

## ✅ Check

1. Submit your project according to your instructor's guidelines
2. Make sure all requirements are met
3. Prepare for evaluation
4. Be ready to explain your project

---

---

<!-- LEVEL_END -->

<!-- LEVEL_START -->

---

# Level 34: Project Complete

## What You'll Do

Celebrate your completed capstone project!

## Instructions

- Take a moment to appreciate what you've accomplished
- Reflect on what you've learned
- Be proud of your work

## 🎉 Congratulations!

You've successfully completed your capstone project! You've built a full-stack web application that integrates:

- **Event-driven user interface** with Bootstrap styling
- **API integration** with proper error handling
- **AI model integration** with response processing
- **Professional documentation** and version control
- **Comprehensive testing** and quality assurance

## What You've Learned

Through this project, you've gained experience with:

- HTML, CSS, and JavaScript fundamentals
- Bootstrap framework for responsive design
- API integration and data handling
- AI model integration and prompt engineering
- Error handling and user experience
- Version control with Git and GitHub
- Project planning and documentation
- Testing and quality assurance

## Next Steps

- Continue building projects to reinforce your skills
- Explore more advanced topics in web development
- Consider contributing to open source projects
- Keep learning and growing as a developer

## 🎊 Well Done!

You've completed a significant milestone in your coding journey. Your capstone project demonstrates your ability to build real-world applications and solve complex problems with code.

---

**Project Complete!** 🎉

---

<!-- LEVEL_END -->
