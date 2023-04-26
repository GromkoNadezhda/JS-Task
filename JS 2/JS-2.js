"use strict";

//Задание 1
let country= 'Sweden';
let access = (country=='Sweden') ? console.log('true') : console.log('false');

//Задание 2
// for (let a = 10; a < 21; a++) {
//   console.log(a);
// }

//Задание 3
// for(let i=1; i<10; i+=2){
//     let num=+prompt('Введите число');
//     console.log(num);
//     let result=(num ==10) ? console.log("Равно 10") : console.log("Не равно 10");
// }

//Задание 4
// let num=prompt('Введите число от 0 до 10');
// for(let i=0; i<num; i++){
//     console.log(i*i);
// }

//Задание 5
// let num;
// for (num=0; num<101; num++){
//     if (num%3==0) {
//         console.log('Fizz');
//     }
//     else if (num%5==0) {
//         console.log('Buzz');
//     }
//     else if (num%5==0 && num%3==0) {
//         console.log('FizzBuzz');
//     }
//     else{
//         console.log(num)
//     }
// }

//Задание 6
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

//Задание 7
// function squareNumber(min, max) {
//   for (let i = min; i < max; i++) {
//     console.log(i * i);
//   }
// }
// console.log(squareNumber(1, 16));

//Задание 8
// function getRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function getRandomRGB() {
//   let color = `rgb(${clrFirst}, ${clrSecond}, ${clrThird})`;
//   return color;
// }

// const clrFirst = getRandomInteger(0, 255);
// const clrSecond = getRandomInteger(0, 255);
// const clrThird = getRandomInteger(0, 255);
// alert(getRandomRGB());

//Задание 9
// function number() {
//   for (let i = 1; i < n; i += 0.5) {
//     let result = Number.isInteger(i / 1) ? `${i} integer` :  `${i} decimal`;
//     console.log(result);
//   }
// }

// let n = prompt("Ведите число");
// number();
