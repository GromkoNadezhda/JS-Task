"use strict";

//Задание 1
// let a = 0;
// let b = 0;

// function num(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     console.log("Ошибка!");
//   } else {
//     return a + b;
//   }
// }

// console.log(num(10, 20));

//Задание 2
// function square(a) {
//   if (typeof a == "number") console.log(a * a);
//   else
//     console.log(
//       'Uncaught Error: Функция "square" не может быть вызвана без аргумента'
//     );
// }

// square(30);
// square();

//Задание 3
// let getRandomNum = (min, max) => {
//   return Math.floor(Math.random() * (max - min)) + min;
// };

// let rundomN = getRandomNum(0, 10);

// let num = (a) => {
//   if (a >= 0 && a <= 10) {
//     a =
//       a == rundomN
//         ? console.log("Вы выиграли!")
//         : console.log(
//             `Вы не угадали, ваше число -  ${a},  а выпало число ${rundomN}`
//           );
//   } else console.log("Введите число от 0 до 10");
// };

// num(3);

//Задание 4
// let arr = [5, 4, 3, 8, 0];
// let newArr = [];
// let filterFor = (arr, a) => {
//   for (let item of arr) {
//     if (item >= a) {
//       newArr.push(item);
//     }
//   }
// };

// filterFor(arr, 5);
// console.log(newArr);

//Задание 5
// let arr = [1, 4, 5, 6, 7, 9];
// let copyArr = [...arr];
// console.log(copyArr);

//Задание 6
// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: "string",
//   d: 12,
// };
// let num = 0;
// for (let key in objectWithNumbers) {
//     if (typeof objectWithNumbers[key] == "number") {
//       num += objectWithNumbers[key];
//     }

//   }
//   console.log (num)
  
