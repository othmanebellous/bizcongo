"use strict";

var showMoreBtns = document.querySelectorAll(".show-more-btn");
showMoreBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    rotateButton(btn);
    showAndHideDescription(btn);
  });
});
function rotateButton(btn) {
  btn.classList.toggle("rotate");
}
function showAndHideDescription(btn) {
  var paragraph = btn.parentElement.querySelector(".desc");
  if (!paragraph.classList.contains("expand")) {
    btn.setAttribute("data-content", "Afficher moins");
    paragraph.style.display = "block";
    paragraph.parentElement.style.height = "".concat(paragraph.offsetHeight, "px");
    paragraph.classList.add("expand");
  } else {
    if (paragraph.classList.contains("main-card-description")) {
      paragraph.parentElement.style.height = "102px";
    } else {
      paragraph.parentElement.style.height = "78px";
    }
    paragraph.classList.remove("expand");
    setTimeout(function () {
      paragraph.style.display = "-webkit-box";
    }, 400);
    btn.setAttribute("data-content", "Afficher plus");
  }
}