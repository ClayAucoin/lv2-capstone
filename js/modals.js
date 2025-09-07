
// html modal 
function openHTMLModal() {
    $("htmlDialogLabel").textContent = dialogTitle;
    $("htmlDialogBody").innerHTML = dialogMessage;

    $('htmlModal').showModal();
}

$('closeHTMLModalBtn').addEventListener('click', () => {
    $('htmlModal').close();
    setFocusOnField();
});


function showModal({ title = "Notice", message = "" }) {
    const modalEl = $("appModal");
    $("appModalTitle").textContent = title;
    $("appModalBody").innerHTML = message;
}

// promise-based alert that lets the browser paint first
function alertAfterPaint(message) {
    return new Promise((resolve) => {
        requestAnimationFrame(() => {
            setTimeout(() => {
                alert("Please enter a question.");
            }, 50);
            resolve();
        });
    });
}

function hideModal() {
    const modalEl = document.getElementById("appModal");
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
}

// focus helper
function setFocusOnField() {
    const el = userInput;
    if (!el) return;
    el.focus();
    // optional: place cursor at end
    const v = el.value; el.setSelectionRange(v.length, v.length);
}
