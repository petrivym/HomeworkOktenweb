// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"
// function numberGetGrade(n =0){
//     let numberToString = n + '';
//     let nul = '';
//     for (let i = numberToString.length - 1; i >= 0; i--) {
//         console.log(numberToString[i]  + nul);
//         nul += '0'
//     }
// }
//
//
// numberGetGrade(1475)
// Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.Всегда будет только одно целое число, которое встречается нечетное количество раз
//     [1,2,3,4,5,2,4,1,3] -> 5
//
// let numberArray = [1, 2, 3, 4, 5, 2, 4, 1, 3];
//
//
// for (let i = 0; i < numberArray.length; i++) {
//
//     let countResult = 1;
//     for (let j = 0; j < numberArray.length; j++) {
//         if (i === j) continue
//         if (numberArray[i] === numberArray[j]) {
//             countResult++
//         }
//     }
//     if (countResult === 0 || countResult % 2 !== 0) {
//         console.log(numberArray[i]);
//         break;
//     }
//
// }
// Знайти анаграму.
//     Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true
/////////////////////////////////////////////Варіант розвязання методами for  if else
// let anagramTxtOriginal = 'ANAGRAM';
// let anagramTxt = 'MGANRAA';
//
// anagramTxtOriginal = anagramTxtOriginal.toLocaleUpperCase();
// anagramTxt =anagramTxt.toLocaleUpperCase();
//
// let anagramArrayOriginal = anagramTxtOriginal.split('');
// let anagramArray = anagramTxt.split('');
//
//
// for (let i = 0; i < anagramArrayOriginal.length; i++) {
//     let countResultLettersArrayOriginal = 0;
//     let countResultLettersArrayAnagram = 0;
//     let flagLetters = anagramArrayOriginal[i];
//
//     for (let j = 0; j < anagramArrayOriginal.length; j++) {
//         if (anagramArrayOriginal[j] == flagLetters) {
//             countResultLettersArrayOriginal++
//         }
//     }
//
//     for (let k = 0; k < anagramArrayOriginal.length; k++) {
//         if (anagramArray[k] == flagLetters) {
//             countResultLettersArrayAnagram++
//         }
//     }
//
//     if (countResultLettersArrayOriginal != countResultLettersArrayAnagram) {
//         console.log(false);
//         console.log(`Problem with letter ${flagLetters[i]}`);
//         break;
//     }
//     if( i == anagramArrayOriginal.length - 1 ){
//         console.log(true);
//     }
// }
// for (let i = 0; i < 10; i++) {
//     let div = document.createElement('div');
//      div.innerText = `iteration ${i}`;
//     document.body.appendChild(div);
// }

// Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!


// function isMathPow(n) {
//     if (n === 2) {
//         return 'yes'
//     }
//     if (n <= 2) {
//         return 'no'
//     }
//     return isMathPow(n / 2)
// }
//
// for (let i = 0; i < 1000; i++) {
//     let result = isMathPow(i);
//     if (result === 'yes') {
//         console.log(result + ' ' + i);
//     }
// }
// Сумма цифр числа
// Дано натуральное число N. Вычислите сумму его цифр.
//     При решении этой задачи нельзя использовать строки,
//     списки, массивы ну и циклы, разумеется.
//     Рекурсія)


// Палиндром
// Дано слово, состоящее только из строчных латинских букв. Проверьте, является ли это слово палиндромом. Выведите YES или NO.
//     При решении этой задачи нельзя пользоваться циклами, в решениях на питоне нельзя использовать срезы с шагом, отличным от 1.
//
// _______________________________________________________________


//Розвязок з циклом просто для себе (Простий поліндром)
//
// function isPolyndrome (string = ''){

//     for (let i = 0; i < string.length; i++) {
//          if(string[i] !== string[string.length - 1 - i]){
//              return false;
//          }
//     }
//     return  true;
// }
// console.log(isPolyndrome('racecar'));


// function isPolyndrome (string = ''){
//     let str = string.toUpperCase().replace(/'\s'/g,'')
//     return str === str.split('').reverse().join('');
// }
//
// console.log(isPolyndrome('racecar'));
// console.log(isPolyndrome('1racucar2'));

// Количество единиц
// Дана последовательность натуральных чисел  в строке, завершающаяся двумя числами 0 подряд. Определите, сколько раз в этой последовательности встречается число 1. Числа, идущие после двух нулей, необходимо игнорировать.
//
// 2176491947586100 -> 3

// function countNamber(numbersstring = '',number = '1'){
//
//     let result = 0;
//     for (let i = 0; i < numbersstring.length; i++) {
//         if(numbersstring[i] === '0' && numbersstring[i + 1] === '0'){
//             return  result;
//         }
//         if(numbersstring[i] === number ){
//           result += 1
//         }
//     }
//    return result;
// }
//
// console.log(countNamber('2176491947586100','1'));


// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.
//
//     ___________________________________________________________________
//
// Знайти набільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
//
// ____________________________________________________________________
//
// Знайти найблільше число поліндром яке утворюється завдяки добутку двох простих пятизначних чисел.
//
//     ____________________________________________________________________
//
// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 симоволу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ заутримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
//
//
//
//
//


// //  реалізувати глибоке копіювання обєкту за допомогою рекурсій
// // const object = {
// //     a: 'somestring',
// //     b: 42,
// //     c: false,
// //     d: {
// //         name: 'beep'
// //     }
// // };
//
//
// const object = {
//     a: 'somestring',
//     b: 42,
//     c: false,
//     d: {
//         name: 'beep',
//         c: {
//             name: 'beep beep'
//         }
//     }
// };
//
//
// // function copy(obj) {
// //
// //     let copyObj = {};
// //
// //     for (const copyObjKey in obj) {
// //
// //         if ( typeof obj[copyObjKey] == 'object') {
// //             copyObj[copyObjKey] = copy(copyObjKey);
// //         } else {
// //             copyObj[copyObjKey] = obj[copyObjKey];
// //         }
// //     }
// //
// //     return copyObj;
// // }
// //
// //
// // let copyOb  = copy(object);
// // console.log(copyOb);
// //
// //
// // object.d.name = "real";
// //
// // console.log(copyOb);
//
//
// // var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
// //
// // function flattenDeep(arr1) {
// //     return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
// // // }
// // // flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
// //
// // const user = {
// //     age: 35,
// //     name: 'Wahtang',
// //     b: {
// //         name: {
// //             c: 4
// //         }
// //     }
// // }
// //
// // c
//
//
// // function Animal(name) {
// //     this.name = name
// //
// //
// // }
// //
// // Animal.prototype.rum = function (spead) {
// //     console.log(`i am ran with spead ${spead} km/h`);
// // }
// //
// //
// // function Hamster(name, house) {
// //     this.name = name;
// //     this.house = house;
// // }
//
//
// // Hamster.prototype  = Animal.prototype;
//
// // Hamster.prototype.__proto__ = Animal.prototype;
//
// // Hamster.prototype.rum = function (){
// //
// //     console.log('I cant run');
// // }
// //
// //
// // Hamster.prototype =  Object.create(Animal.prototype)
// //
// //
// // const bosiy  = new Animal('bos','red')
// // const johny = new Hamster('johan','Red');
// //
// // johny.rum(23);
// // bosiy.rum(10);
// //
// //
//
// //
// // const bosya = new Animal('Pascal');
// // const bosya2 = new Animal('Bos');
// //
// //
// //
// // bosya.rum(23);
// // bosya2.rum(50);
// //
// //
//
//
// // function Hamster(name,fun) {
// //     this.name = name;
// //     this.stomach = [];
// //     this.fun = fun;
// //
// // }
// //
// // Hamster.prototype.findFood = function (food){
// //     this.stomach.push(food)
// // };
// //
// //
// // const  hum1 = new Hamster('gavrik',function (){
// //     console.log('www');
// // });
// // const  rozchoska = new Hamster('rozchoska');
// //
// // hum1.findFood('apply');
// // hum1.findFood('peach');
// // // hum1.fun()
// //
// //
// // console.log(hum1.stomach);
// // console.log(rozchoska.stomach);
//
//
//
// // class  Samurai {
// //     constructor(name) {
// //         this.name = name;
// //     }
// //     hellow() {
// //         console.log(this.name);
// //     }
// // }


// let shogun = new Samurai('Yarik');
// console.log(shogun.__proto__.__proto__ ===  Object.prototype );
// // console.log(shogun.__proto__.constructor.__proto__ === );
// console.log(shogun.__proto__.__proto__.__proto__ === );

// console.log(shogun.__proto__.__proto__);


function Animal(name) {
    this.name = name;
}
Animal.prototype.ran = function (spead) {
    console.log(`ran with ${spead}`);
}
function Humster (name,house){
this.name = name;
this.house = house;
}


const bosya = new Animal('animal');
const hamster = new Humster('York','red');

Humster.prototype = Object.create(Animal.prototype);

bosya.ran(10);
hamster.ran(223456);