const panels = document.querySelector(".panels");

panels.addEventListener("click", openPanel);
panels.addEventListener("transitionend", moveWord);

function openPanel(e) {
  const panel = e.target.closest(".panel");
  panel.classList.toggle("open");
}

function moveWord(e) {
  Array.from(e.target.children).map((p) => {
    if (e.target.classList.contains("open")) {
      p.classList.add("move-word");
    } else {
      p.classList.remove("move-word");
    }
  });
}
