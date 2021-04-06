// 1) створити функцію яка приймає масив та виводить його

// let argArray = ['1','2','a'];
//
//
// function bringArray(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// bringArray(argArray);

// let argArray = ['1','2','a'];
//
// function bringArray(array){
//     return array
// }
//
// console.log(bringArray(argArray));

// let argArray = ['1','2','a'];
//
// function bringArray(array){
//     console.log(array);
// }
//
// bringArray(argArray);

// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// function arrayGeneration(quantity){
//
//     let emptyArray = [];
//
//     for (let i = 0; i < quantity; i++) {
//         let randomNumber = Math.floor(Math.random()*10);
//         emptyArray.push(randomNumber);
//     }
//
//  return emptyArray;
// }
//
// function bringArray(array){
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
//
// bringArray(arrayGeneration(10));

// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)


// function  returnMin(a,b,c){
//     if(a < b && a < c){
//         console.log(a);
//         return a;
//     }else if(b < a && b < c){
//         console.log(b);
//         return b;
//     }else if (c < a && c < b){
//         console.log(c);
//         return c;
//     }
// }
//
// console.log(returnMin(2,4,6));


// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function  returnMin(a,b,c){
//     if(a > b && a > c){
//         console.log(a);
//         return a;
//     }else if(b > a && b > c){
//         console.log(b);
//         return b;
//     }else if (c > a && c > b){
//         console.log(c);
//         return c;
//     }
// }
//
// console.log(returnMin(2,4,6));
// 5) створити функцію яка повертає найбільше число з масиву

// function  returnMaxValueArray(array){
//     let flag  = array[0];
//     for (const arrayElement of array) {
//          if (arrayElement > flag){
//               flag = arrayElement;
//          }
//     }
//     return flag;
// }
//
//
// let array = [1,3,5,7,9,11,1,9];//11
// let array1 = [11,3,4,6,7];// 11
// let array2 = [11,3,33,6,7];//33
// let array3 = [11,3,33,6,42];//42
// console.log(returnMaxValueArray(array));
// console.log(returnMaxValueArray(array1));
// console.log(returnMaxValueArray(array2));
// console.log(returnMaxValueArray(array3));

// 6) створити функцію яка повертає найменьше число з масиву

// function  GetMinValue(array){
//     let flag = array[0];
//     for (const arrayElement of array) {
//         if ( flag > arrayElement){
//              flag = arrayElement;
//         }
//     }
//     return flag;
// }
//
// let array = [1,3,5,7,9,11,1,9];//11
// let array1 = [11,3,4,6,7];// 11
// let array2 = [11,3,33,6,7];//33
// let array3 = [11,3,33,6,42];//42
// console.log(GetMinValue(array));
// console.log(GetMinValue(array1));
// console.log(GetMinValue(array2));
// console.log(GetMinValue(array3));

// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// function sumArray(array){
//     let sum = 0;
//     for (let arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
//
// console.log(sumArray([1,2,4,5,7,8,9,0,12,-12]));

// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function getArithmeticMeanArray(array){
//      let result = 0;
//     for (const arrayElement of array) {
//         result += arrayElement;
//     }
//     return parseInt(result/array.length);
// }
//
// console.log(getArithmeticMeanArray([1,3,56,5,23,87,87,98,12]));

// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

// function  getOdjKey(array){
//         let keys = [];
//     for (const key of array) {
//         for (const keyObj in key) {
//             keys.push(keyObj);
//         }
//     }
//     return keys;
// }
//
// console.log(getOdjKey( [{name: 'Dima', age: 13}, {model: 'Camry'}]));

// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function getObjValue(array){
//     let objectValue = []
//     for (const arrayItem of array) {
//         for (const arrayItemValue in arrayItem) {
//             objectValue.push(arrayItem[arrayItemValue]);
//         }
//     }
//     return objectValue;
// }
//
// console.log(getObjValue([{name: 'Dima', age: 13}, {model: 'Camry'}]));

// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
// [2,3,4,5]
// результат
//     [3,5,7,9]

// function getSumArray(arr1, arr2){
//     let resultArray = [];
//
//     for (let i = 0; i < arr1.length; i++) {
//        resultArray[i] = arr1[i] + arr2[i];
//     }
//
//     return resultArray;
// }
//
// console.log(getSumArray([1,2,3,4],[2,3,4,5]));\


//Модифікована версія яка обрізає надлишкові елементи Більшого масиву
// function getSumIndexArrays(array1, array2) {
//     let newArraySum = [];
//     const arrayLength = (array1.length < array2.length) ? array1.length : array2.length;
//
//     for (let i = 0; i < arrayLength; i++) {
//         newArraySum.push(array1[i]+array2[i])
//     }
//
//     return newArraySum;
//
// }
//
//
// console.log(getSumIndexArrays([1, 2, 3, 4], [2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1]));

/// модифікована версія яка приймає до уваги , якщо один з масивів більший то записує в новий маси  надлишкові елементи біільшого масиву
// function getSumArray(arr1, arr2) {
//     let resultArray = [];
//     let arrayMaxlength = 0;
//     let arrayMinLength = 0;
//
//     if (arr1.length > arr2.length) {
//         arrayMaxlength = arr1.length;
//         arrayMinLength = arr2.length;
//     } else {
//         arrayMaxlength = arr2.length;
//         arrayMinLength = arr1.length;
//     }
//     for (let i = 0; i < arrayMaxlength; i++) {
//         if (i < arrayMinLength) {
//             resultArray[i] = arr1[i] + arr2[i];
//         } else if (arr1[i] !== undefined) {
//             resultArray.push(arr1[i]);
//         } else if (arr2[i] !== undefined) {
//             resultArray.push(arr2[i]);
//         }
//     }
//
//     return resultArray;
// }
//
// console.log(getSumArray([1, 2, 3, 4], [2, 3, 4, 5,1,1,1,1,1,1,1,1,1]));

// function getSumArray(arr1, arr2) {
//     let resultArray = [];
//     let arrayMaxlength = (arr1.length > arr2.length) ? arr1.length : arr2.length;
//     let arrayMinLength = ((arr1.length < arr2.length) ? arr1.length : arr2.length);
//
//     for (let i = 0; i < arrayMaxlength; i++) {
//         if (i < arrayMinLength) {
//             resultArray[i] = arr1[i] + arr2[i];
//         } else if (arr1[i]) {
//             resultArray.push(arr1[i]);
//         } else if (arr2[i]) {
//             resultArray.push(arr2[i]);
//         }
//     }
//
//     return resultArray;
// }
//
// console.log(getSumArray([2, 3, 4, 5,1,1,1,1,1,1,1,1,1],[1, 2, 3, 4] ));
// ============================================================================================
//
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);


// function returnMinNumberVieMax(){
//     let max = arguments[0];
//     let min = arguments[0];
//
//     for (const argumentsArgument of arguments) {
//          if(max < argumentsArgument ){
//               max = argumentsArgument;
//          }
//     }
//     for (const argumentsArgument of arguments) {
//         if(min > argumentsArgument){
//             min = argumentsArgument;
//         }
//     }
//
//     console.log(max);
//     return min;
//
// }
//
// console.log(returnMinNumberVieMax(1,3,4,5,7,8,9,3,3,3,3));

// function returnMinNumberVieMax(){
//     let max = arguments[0];
//     let min = arguments[0];
//
//     for (const argumentsArgument of arguments) {
//         if(max < argumentsArgument ){
//             max = argumentsArgument;
//         }
//         if(min > argumentsArgument){
//             min = argumentsArgument;
//         }
//     }
//
//     console.log(max);
//     return min;
//
// }
//
// console.log(returnMinNumberVieMax(1,3,4,5,7,8,9,3,3,3,3));

// - Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
//     Що б я міг сам вибрати повернути мені масив ключів чи масив значень.

// function getObjValue(array) {
//     let objectValue = []
//     for (const arrayItem of array) {
//         for (const arrayItemValue in arrayItem) {
//             objectValue.push(arrayItem[arrayItemValue]);
//         }
//     }
//     return objectValue;
// }
//
//
// function getOdjKey(array) {
//     let keys = [];
//     for (const key of array) {
//         for (const keyObj in key) {
//             keys.push(keyObj);
//         }
//     }
//     return keys;
// }
//

// function GetInformFromArrayObj(array, trigger) {
//     if (trigger === 'key') {
//         return getOdjKey(array);
//     } else if (trigger === 'value'){
//         return getObjValue(array)
//     }else {
//         console.log('Function isn\'t selecting');
//         return  'Function isn\'t selecting'
//     }
// }
//
// console.log(GetInformFromArrayObj([{name: 'Dima', age: 13}, {model: 'Camry'}], ));
// console.log(GetInformFromArrayObj([{name: 'Dima', age: 13}, {model: 'Camry'}], 'value'));

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

// function replaceArray(array, i) {
//     let rememberArrayItem =  array[i + 1];
//     if(rememberArrayItem === undefined){
//        console.log('Array is smale');
//        return "Error";
//     }
//     array[i + 1] =  array[i];
//     array[i] = rememberArrayItem;
//
//     return array;
//
// }
//
// console.log(replaceArray([{name:1},{name:2},{name:3},{name:4},{name:5},], 0));
//

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// function zeroingZeroing(array) {
//     let safeguard = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == 0) {
//             const splitArray = array.splice(i, 1);
//             array.push(splitArray[0])
//             safeguard++;
//         }
//         if (safeguard > array.length) {
//             break;
//         }
//         if (array[i] == 0) {
//             i--;
//             safeguard++;
//         }
//
//     }
//     console.log(array);
// }
//
// zeroingZeroing([1,0,6,0,3])
// zeroingZeroing([0,1,2,3,4])
// zeroingZeroing([0, 0, 0, 1])


// function zeroingZeroing(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == 0) {
//             const splitArray = array.splice(i, 1);
//             array.push(splitArray[0])
//             safeguard++;
//         }
//         if (array[i] == 0) {
//             i--;
//             safeguard++;
//         }
//
//     }
//     console.log(array);
// }
//
// zeroingZeroing([1,0,6,0,3]);
// zeroingZeroing([0,1,2,3,4]);
// zeroingZeroing([0, 0, 0, 1]);


// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '
// function removeName(string){
//     let stringWithoutSpaceStartEnd  =  string.trim();
//     let arrayWithSpace = stringWithoutSpaceStartEnd.split(' ');
//     return  `${arrayWithSpace[0]} ${arrayWithSpace[arrayWithSpace.length-1]}`
//
// }
//
// console.log(removeName(n1));
// console.log(removeName(n2));
// console.log(removeName(n3));

//
// ============================================================================================
//
//
//
// // ******************* НАЗАД В МИНУЛЕ *********************** //
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"


// function addText(){
//     let newElementInBody = document.createElement('div');
//     newElementInBody.innerText = "Hello owu";
//     document.body.appendChild(newElementInBody);
// }
// addText();


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
//
// function addText(){
//     let newElementInBody = document.createElement(arguments[0]);
//     newElementInBody.innerText = arguments[1];
//     document.body.appendChild(newElementInBody);
// }
// addText('h1','text');

// - приймає масив автомобілів (можна взяти з попередніх дз),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці


// cars = ['bmw', 'mercedes', 'audi', 'honda', 'toyota'];
//
// let divElement = document.createElement('div');
// divElement.setAttribute('id', 'myId');
// document.body.appendChild(divElement);
//
// function returnCars(cars = [], div = 'string') {
//     for (let i = 0; i < cars.length; i++) {
//         let element = document.createElement('p');
//         element.innerText = cars[i];
//
//         let elementById = document.getElementById(div);
//         elementById.appendChild(element);
//     }
// }
// returnCars(cars,'myId');


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// cars = [{name: 'Bmw', earsOld: 23, status: 'ok'},
//     {name: 'Mercedes', earsOld: 23, status: 'ok'},
//     {name: 'Audi', earsOld: 23},
//     {name: 'Toyota', earsOld: 23, color: 'red'},
//     {name: 'Honda', earsOld: 23, color: "dark"}];
//
//
// let divElement = document.createElement('div');
// divElement.setAttribute('id', 'myId');
// document.body.appendChild(divElement);
//
// function returnCars(cars = [], div = 'string') {
//
//     for (let i = 0; i < cars.length; i++) {
//         let element = document.createElement('div');
//         element.innerText = cars[i].name;
//         let elementById = document.getElementById(div);
//         elementById.appendChild(element);
//         for (const elementKey in cars[i]) {
//             if (elementKey != 'name') {
//
//                 let elementValue = document.createElement('p')
//
//                 elementValue.innerText = `${elementKey} ${cars[i][elementKey]}`;
//                 element.appendChild(elementValue)
//             }
//
//         }
//     }
// }
//
// returnCars(cars, 'myId');


// // ******************* НАЗАД В МИНУЛЕ *********************** //
//
//
//
// ============================================================================================
//                              ЗАДАЧІ ПІДВИЩЕНОГО РІВНЯ СКЛАДНОСТІ
// ============================================================================================
//
// 1) Точная степень двойки.
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

// 2) Deep Copy
//  реалізувати глибоке копіювання обєкту за допомогою рекурсій
// const object = {
//     a: 'somestring',
//     b: 42,
//     c: false,
//     d: {
//         name: 'beep'
//     }
// };
//
//
// function copyDeepObj(obj) {
//     const newDeepObj = {}
//     for (const newDeepObjKey in obj) {
//         if (typeof obj[newDeepObjKey] === 'object') {
//             newDeepObj[newDeepObjKey] = copyDeepObj(obj[newDeepObjKey]);
//             continue;
//         }
//         newDeepObj[newDeepObjKey] = obj[newDeepObjKey]
//     }
//     return newDeepObj
// }
//
//
// let x = copyDeepObj(object)
// x.d.name = 'x';
//
// console.log(x);
//
// console.log(object);
// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

array = [1, 3, ['Hello', 'Wordd', [9, 6, 1]], ['oops'], 9];

function flat(array = []) {
    let flatArray = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "object") {
            let deepArray = flat(array[i]);
            for (const deepArrayElement of deepArray) {
                flatArray.push(deepArrayElement);
            }
            continue;
        }
        flatArray.push(array[i]);
    }
    return flatArray
}


console.log(flat(array));//-> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]


