console.log("storage.js says hi")

// set a specific value
localStorage.getItem("myKey")
localStorage.setItem("openai", "OpenAI");
localStorage.setItem("meta", "Meta Llama AI");
localStorage.setItem("sentient", "Sentient AGI");
localStorage.setItem("qwen", "Qwen AI");
localStorage.setItem("deepseek", "DeepSeek AI");


// view how many items are stored
console.log("localStorage.length: " + localStorage.length);

// see all keys
console.log("Object.keys: " + Object.keys(localStorage));

// get a specific value
localStorage.getItem("myKey")

// loop through everything
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(key, localStorage.getItem(key));
}


// quickly see everything
function dumpStorage(storage = localStorage) {
  const data = {};
  for (let i = 0; i < storage.length; i++) {
    const key = storage.key(i);
    data[key] = storage.getItem(key);
  }
  console.table(data);
}
dumpStorage();              // shows localStorage in a table
dumpStorage(sessionStorage); // shows sessionStorage in a table


// one-liner just for localStorage
console.table({...localStorage});
