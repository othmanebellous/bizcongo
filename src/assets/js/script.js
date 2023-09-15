const showMoreBtns = document.querySelectorAll(".show-more-btn");
let initialHeight;
let expandedHeight;

// code for displaying or hiding content of the spotlight articles

showMoreBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    rotateButton(btn);
    showAndHideDescription(btn);
  });
});

function rotateButton(btn) {
  btn.classList.toggle("rotate");
}

function showAndHideDescription(btn) {
  const paragraph = btn.parentElement.querySelector(".desc");
  if (!paragraph.classList.contains("expand")) {
    initialHeight = `${paragraph.offsetHeight}px`;
    paragraph.style.display = "block";
    expandedHeight = `${paragraph.offsetHeight}px`;
    paragraph.style.display = "-webkit-box";
    btn.setAttribute("data-content", "Afficher moins");
    paragraph.style.display = "block";
    paragraph.parentElement.style.height = expandedHeight;
    paragraph.classList.add("expand");
  } else {
    paragraph.parentElement.style.height = initialHeight;
    paragraph.classList.remove("expand");
    setTimeout(function () {
      paragraph.style.display = "-webkit-box";
    }, 400);
    btn.setAttribute("data-content", "Afficher plus");
  }
}
