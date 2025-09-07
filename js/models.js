console.log("models.js says hi");


function sendToModelTest(cityState) {
    userPrompt = "Can you write a short paragraph about " + cityState + "?"

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

