
// old
function openHTMLModal(dialogTitle, dialogMessage) {
    $("htmlDialogLabel").textContent = dialogTitle;
    $("htmlDialogBody").innerHTML = dialogMessage;

    $('htmlModal').showModal();
}

function showModal(title, html) {
    $("htmlDialogLabel").textContent = title;
    $("htmlDialogBody").innerHTML = html;
    $("htmlModal").showModal();
}

$('closeHTMLModalBtn').addEventListener('click', () => {
    $('htmlModal').close();
    resetInterface();
});
