"use strict";

//Задание 1

// let p = document.createElement("p");
// document.body.appendChild(p);
// p=`На компьютере с ОС ${window.navigator.appVersion} с помощью браузера ${window.navigator.appCodeName} я открыл страничку ${window.location.host
// } `

// console.log(p);

//Задание 2
// console.log(document.querySelectorAll('li'));
// console.log( document.body.children[0].innerText);

// Задание 4

// let p = document.createElement("p");
// document.body.appendChild(p);
// p =
//   "Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.";
// document.body.style.fontSize = ('font-size?', '36px');
// document.body.style.fontWeight = ('font-weight?', 'bold');
//   console.log(p);

//   //Задание 5
// document.querySelector("p").innerText = new Date().toLocaleDateString();

//Задание 6
// function foo(tagName, clr, textElement) {
//   let tag = document.createElement(tagName);
//   document.body.appendChild(tag);
//   tag.style.color = clr;
//   tag.innerText = textElement;
// }
// foo('p', 'red','Добавился тег')
// foo('span', 'green','Добавился span')
// foo('button', 'gray', 'добавилась кнопка')

// Задание 7
// for (let i = 1960; i < 2021; i++) {
//   const option = document.createElement("option");
//   document.body.querySelector("select").appendChild(option);
//   option.innerText = i;
// }

//Задание 8
// const clients = [
//   { name: "Женя", order: true },
//   { name: "Кристина", order: true },
//   { name: "Павел", order: false },
//   { name: "Виолетта", order: false },
//   { name: "Костя", order: true },
// ];
// const ul = document.createElement("ul");
// document.body.appendChild(ul);
// for (let i = 0; i < clients.length; i++) {
//   const li = document.createElement("li");
//   document.body.querySelector("ul").appendChild(li);
//   let pay = clients[i].order == true ? "оплатил" : "отменил";
//   li.innerText = `Клиент ${clients[i].name} ${pay} заказ`;
// }

//Задание 9
// let linksArr = [
//   "https://www.amazon.com/",
//   "https://www.youtube.com/",
//   "https://devby.io/",
//   "https://www.google.com/",
//   "https://apple.com/",
// ];
// const div = document.createElement("div");
// document.body.appendChild(div);
// div.style.backgroundColor = ("background-color?", "brown");
// div.style.padding = "10px";

// for (let i = 0; i < linksArr.length; i++) {
//   let link = document.createElement("a");
//   document.body.querySelector("div").appendChild(link);
//   link.innerText = linksArr[i];
//   link.href = `${linksArr[i]}`;
//   link.target = "blank";
//   link.style.display = "block";
//   link.style.color = "white";
//   link.style.textDecoration = ("text-decoration?", "none");
// }

//Задание 10
// let element =[...document.querySelectorAll(".for-remove")]
// for (let index = 0; index < element.length; index++) {
//    element[index].remove()

// }

//Задание 11
const users = [
  { name: "Mark", age: 12 },
  { name: "Olga", age: 30 },
  { name: "Tom", age: 25 },

  { name: "Den", age: 43 },
];
for (let i = 0; i < users.length; i++) {
  const tr = document.createElement("tr");
  document.querySelector("table").appendChild(tr);
  tr.innerText = users[i].name;

}

