/**
 * Show or hide element.
 * @param {string} id - The id of button.
 * @param {boolean} [status=false] - show or hide.
 * 
 * @example
 * visibleElement("ID", true);
 */
function visibleElement(id, status) {
  const el = document.getElementById(id)
  if (!el) {
    console.warn("visibleElement: Element with id '" + id + "' not found.");
    return;
  }
  if (status == true) {
    el.classList.remove("d-none");
    console.info("visibleElement: Element with id '" + id + "' is shown.");
  } else {
    el.classList.add("d-none");
    console.info("visibleElement: Element with id '" + id + "' is hidden.");
  }
}

/**
 * Enable or disable element.
 * @param {string} id - The id of button.
 * @param {boolean} [status=false] - disable or enable.
 * 
 * @example
 * disableButton("ID", true);
 */
function disableButton(id, status) {
  const el = document.getElementById(id)
  if (!el) {
    console.warn("disableButton: Element with id '" + id + "' not found.");
    return;
  }
  if (status == true) {
    el.classList.add('disabled');
  } else {
    el.classList.remove('disabled');
  }
}

