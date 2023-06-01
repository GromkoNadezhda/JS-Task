"use strict";
const button = document.querySelector(".button-first");
const buttonCloseMenu = document.querySelector(".button-second");
const inputSearch = document.querySelector(".input-search");

button.addEventListener("click", () => {
  openMenu();
positionRelative()
});
buttonCloseMenu.addEventListener("click", () => {
  openMenu();
  positionRelative()
});
inputSearch.addEventListener("focus", () => {
  colorReplacement();
});

function openMenu() {
  const burgerMenu = document.querySelector("#burger-menu");
  burgerMenu.classList.toggle("none");
  button.classList.toggle("none");
  buttonCloseMenu.classList.toggle("none");
}
function positionRelative() {
  const title=document.querySelector('.title')
  title.classList.toggle('replace-title')
}
function colorReplacement() {
  inputSearch.style.background = ("rgb(169, 169, 235)");
}
