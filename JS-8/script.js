"use strict";

const input = document.querySelector("input");
const ul = document.querySelector("ul");
const button = document.querySelector("button");

//Задание 1

input.addEventListener("keydown", () => {
  const li = document.createElement("li");
  ul.appendChild(li);
});

//Задание 2
input.addEventListener("keyup", () => {
  console.log(input.value);
});

//Задание 3
button.addEventListener("click", () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  li.innerText = `${input.value}`;
  input.value = "";
});

//Задание 4
const inputFirst = document.querySelector(".first");
const inputSecond = document.querySelector(".second");
const select = document.querySelector("select");
const div = document.querySelector("div");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (select.value === "minus") {
    div.innerText = inputFirst.value - inputSecond.value;
  } else if (select.value === "plus") {
    div.innerText = Number(inputFirst.value) + Number(inputSecond.value);
  } else if (select.value === "multiply") {
    div.innerText = inputFirst.value * inputSecond.value;
  } else if (select.value === "divide") {
    div.innerText = inputFirst.value / inputSecond.value;
  }
});

//Задание 5

const btn = document.querySelector(".btn");
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

btn.addEventListener("mouseenter", () => {
  btn.style.background = `rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(
    0,
    255
  )}, ${getRandomInteger(0, 255)}) `;
});

btn.addEventListener("mouseleave", () => {
  btn.style.transform = `rotate(${getRandomInteger(-180, 180)}deg)`;
});
