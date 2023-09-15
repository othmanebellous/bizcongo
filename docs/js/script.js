"use strict";

var showMoreBtns = document.querySelectorAll(".show-more-btn");
var initialHeight;
var expandedHeight;

// code for displaying or hiding content of the spotlight articles

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
    initialHeight = "".concat(paragraph.offsetHeight, "px");
    paragraph.style.display = "block";
    expandedHeight = "".concat(paragraph.offsetHeight, "px");
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