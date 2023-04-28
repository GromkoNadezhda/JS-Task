"use strict";
//Задание 1
// function num(number, min, max){
//     if(number>min && number<max){
//         return number
//     }
// }
// function num(number, min, max){
//     if(number>min || number<max){
//         return number
//     }
// }

//Задание 2
// const engineers = {
//   Den: 1000,
//   Matt: 5000,
//   Steve: 2000,
// };
// for (let key in engineers) {
//   console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`);
// }

//Задание 3
// let array = ["one", "two", "three", "four", "five"];
// for (let i=1; i<5; i+=2){
//     console.log(array[i]);
// }

//Задание 4
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(`Индексу ${i} соответствует число ${numbers[i]}`);

// }

//Задание 5
// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];
// for(let i=0; i<questions.length; i++){
//    questions[i].usersAnswer=null
// }
// console.log(questions);

//Задание 6
// let sum = 0;
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// numbers.map((item) => (sum += item));
// console.log(sum);

// let evenNum = numbers.filter((item) => item % 2 == 0);
// let evenSum = 0;
// evenNum.map((item) => (evenSum += item));
// console.log(evenSum);

// let maxNum = numbers.sort();
// let result = maxNum[maxNum.length - 1];
// console.log(result);

// let indexFirst = numbers.indexOf(70);
// let indexSecond = numbers.lastIndexOf(70);
// console.log(`${indexFirst} и ${indexSecond}`);

//Задание 7
// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let newArr = arr.filter((index) => index >= 0);
// console.log(newArr);

//Задание 8
// let array = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let newArr = [];
// function fooArray(num) {
//   newArr = array.filter((item) => item >= num);
//   return newArr;
// }
// console.log(fooArray(-5));

//Задание 9
// const users = [
//   { name: "Vasya", age: 23 },
//   { name: "Olya", age: 12 },
//   { name: "Anna", age: 22 },
//   { name: "Alex", age: 18 },
//   { name: "Valery", age: 8 },
// ];
// let user = users.filter((item) => item.age > 15);
// for (let item of user) {
//   console.log(item.name + " " + item.age);
// }

//Задание 10
// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
// let wordLenght = [];
// for (let item of vegetables) {
//   wordLenght.push({
//     word: item,
//     length: item.length,
//   });
// }
// console.log(wordLenght);

// for (let item of wordLenght) {
//   console.log(item.word + "-" + item.length);
// }
