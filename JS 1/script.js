'use strict'

//Для проверки каждого задания раскомментируй его 


//Задание 2 Запросить имя пользователя и вывести "Привет, имя пользователя"
// const userName=prompt('Как вас зовут?');
// console.log(userName);
// alert('Привет, ' + userName);


//Задание 3 Запросить у пользователя число, отдельно степень и вывести результат в консоль
// const number=prompt('Напишите число');
// console.log(number);
// const power=prompt('В какую степень возвести число?');
// console.log(power);
// console.log(number ** power);



//Задание 5 Создать переменную и присвоить ей строковое значение.  
//И задать условеи:если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
// let a='hidden';
// if(a=='hidden'){
//     console.log (a='visible');
// }
// else{
//     console.log ( a='hidden');
// }

//задание 6 Создать переменную со значением числа. Eсли переменная равна нулю, присвоить ей 1; 
//если меньше нуля - строку “less then zero”; если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
// let b=36;
// b=0;
// if (b==0){
//     console.log(b=1);
// }
// if(b<0){
//     console.log(b='less then zero');
// }
// if(b>0){
//     console.log(b*=10);
// }


//Задание 7 Запросить у пользователя число. если введенное пользователем число меньше 5, то результат будет '0', 
//если больше -  '1'.
// const userNumber=prompt('Введите число');
// if (userNumber<5){
//     console.log(0);
// }
// else{
//     console.log(1);
// }

//Задание 8 Пользователь вводит одно число, следом - второе число.В консоль выводим наибольшее с текстом: Большее число: 7 
//(вместо 7 будет максимальное число из введенных пользователем). предусмотреть вариант ввода одинаковых чисел
// const firstNumber=prompt('Ведите чило...');
// console.log(firstNumber);
// const secondNumber=prompt('еще одно');
// console.log(secondNumber);
// if(firstNumber>=secondNumber){
//     console.log(firstNumber);
// }
// else if(firstNumber<secondNumber){
//     console.log(secondNumber);
// }

//Задание 9 Определить, является ли введенное num1 кратным введенному num2. ответ выводим в консоль.
// const num1=prompt('Введите число');
// console.log(num1);
// const num2=prompt('и еще одно');
// console.log(num2);
// if(num1%num2==0){
//     console.log('кратное');
// }
// else{
//     console.log('некратное');
// }

//Запросить у пользователя средний балл, записать в переменную и выполнить условия
const gpa=prompt('Ведите ваш средний балл');
console.log(gpa);
if(gpa<0){
    alert('Как такое возможно?');
}
else if(gpa<=4){
    alert('Двоечник, иди учись!');
}
else if(gpa<=8){
    alert('Неплохо, но давай еще поднажмем!');
}
else if(gpa<=10){
    alert('Ого, да ты настоящий отличник!');
}
else{
    alert('Фантазер!');
}
