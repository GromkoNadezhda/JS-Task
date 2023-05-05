"use strict";

//Задание 1

// let str = "надежда";
// let upperStr = () => {
//   let firtsLetter = str.slice(0, 1);
//   let upperFirstL = firtsLetter.toUpperCase();
//   let otherLetter = str.slice(1, 7);
//   let result = upperFirstL + otherLetter;
//   return result;
// };
// console.log(upperStr());

//Задание 2

// let str = 0;
// function checkSpam(str) {
//   if (str.includes("badWord") || str.includes("XXX")) {
//     console.log(true);
//   }
//   else if (str.includes("badWord".toUpperCase()) || str.includes("XXX".toUpperCase())) {
//     console.log(true);
//   }
//   else if(str.includes("badWord".toLowerCase()) || str.includes("XXX".toLowerCase())){
//     console.log(true);
//   } else console.log(false);
// }
// checkSpam("BADWORD");

//Задание 3
// let reversed = (str) => {
//   let arr = str.split("");
//   arr.reverse();
//   let newStr = arr.join("");
//   return newStr;
// };
// console.log(reversed("Привет Женя"));

//Задание 4
// let stations = [
//   "MAN675847583748sjt567654;Manchester Piccadilly",
//   "GNF576746573fhdg4737dh4;Greenfield",
//   "LIV5hg65hd737456236dch46dg4;Liverpool Lime Street",
//   "SYB4f65hf75f736463;Stalybridge",
//   "HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield",
// ];
// let stationsName = [];
// let arrayNumIndex = [];
// let num = "0";
// let readInfo = [];
// let strInfo = 0;
// for (let index = 0; index < stations.length; index++) {
//   let str = stations[index].slice(0, 3);
//   stationsName.push(str);
// }
// for (let item of stations) {
//   num = item.indexOf(";");
//   arrayNumIndex.push(num);
// }
// for (let info = 0; info < stations.length; info++) {
//   strInfo = stations[info].slice(arrayNumIndex[info]);

//   readInfo.push(strInfo);
// }
// for (let newIndex = 0; newIndex < stationsName.length; newIndex++) {
//   let newArr = stationsName[newIndex] + ":" + readInfo[newIndex].slice(1);
//   console.log(newArr);
// }

// Задание 5
// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
// const result = strings.reduce((item, item2) => {
//   if (item.includes(item2)) {
//     return item; 
//   }
//   return [...item, item2]; 
// }, []);
// console.log(result); 