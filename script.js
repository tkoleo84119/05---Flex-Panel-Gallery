const panels = document.querySelector(".panels");

panels.addEventListener("click", openPanel);
panels.addEventListener("transitionend", moveWord);

/**
 * This function is add/remove "open" class to the panel which be click
 * @param {object} e => event object
 */
function openPanel(e) {
  const panel = e.target.closest(".panel");
  panel.classList.toggle("open");
}

/**
 * This function is add/remove "move-word" class to the p element which be click
 * @param {object} e => event object
 */
function moveWord(e) {
  Array.from(e.target.children).map((p) => {
    if (e.target.classList.contains("open")) {
      p.classList.add("move-word");
    } else {
      p.classList.remove("move-word");
    }
  });
}
