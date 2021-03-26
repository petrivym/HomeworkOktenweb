//
//     --створити масив та вивести його в консоль:
//     - з 5 числових значень

// let numberArray = [1,2,3,4,5];
// console.log(numberArray);

// - з 5 стічкових значень
//
// let strArray = ['a','b','c','d','i']
// console.log(strArray);

// - з 5 значень стрічкового, числового та булевого типу

// let allTypeArray = ['srt','rrr','ttt','yyy','444',1,2,3,4,5,true,false];
// console.log(allTypeArray);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let emptyArray = [];
// emptyArray[0] = '1';
// emptyArray[1] = '2';
// emptyArray[2] = '3';
// emptyArray[3] = '4';
// emptyArray[4] = '5';
// console.log(emptyArray);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

// for (let i = 0; i < 10; i++) {
//      document.write(`<div> ${i+1} </div>`);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

// for (let i = 0; i < 10; i++) {
//      document.write(`<div> ${i} </div>`);
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i = 0;
// while (i < 20){
//     document.write(`<h1>hellow</h1>`)
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i = 0;
// while (i < 20){
//     document.write(`<h1>${i}</h1>`)
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayTenElements = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < arrayTenElements.length; i++) {
//     console.log(arrayTenElements[i]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

// let arrayTenElements = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
// for (let i = 0; i < arrayTenElements.length; i++) {
//     console.log(arrayTenElements[i]);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let allTypeArray = ['srt','rrr','ttt','yyy',1,2,3,4,true,false];
// for (let i = 0; i < allTypeArray.length; i++) {
//     console.log(allTypeArray[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let allTypeArray = ['srt', 'rrr', 'ttt', 'yyy', 1, 2, 3, 4, true, false];
//
// for (let i = 0; i < allTypeArray.length; i++) {
//
//     if (typeof (allTypeArray[i]) == "boolean") {
//         console.log(allTypeArray[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let allTypeArray = ['srt','rrr','ttt','yyy',1,2,3,4,true,false];
//
// for (let i = 0; i < allTypeArray.length; i++) {
//      if(typeof allTypeArray[i] == "number"){
//          console.log(allTypeArray[i]);
//      }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let allTypeArray = ['srt','rrr','ttt','yyy',1,2,3,4,true,false];
//
// for (let i = 0; i < allTypeArray.length; i++) {
//     if(typeof allTypeArray[i] == "string"){
//         console.log(allTypeArray[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let emptyArray = [];
//
// emptyArray[0] = "start";
// emptyArray[1] = 1;
// emptyArray[2] = true;
// emptyArray[3] = false;
// emptyArray[4] = NaN;
// emptyArray[5] = undefined;
// emptyArray[6] = null;
// emptyArray[7] = "end";
// emptyArray[8] = "9";
// emptyArray[9] = "end";
//
// for (let i = 0; i < emptyArray.length; i++) {
//     console.log(emptyArray[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`<div>${i}</div>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i += 2) {
//     console.log(i);
//     document.write(`<div>${i}</div>`);
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2 == 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2 != 0) {
//         console.log(i);
//         document.write(`<div>${i}</div>`);
//     }
// }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
//
// for (let i = 0; i < 60; i++) {
//     document.write(`<div>Хвилини----------${i}</div>`);
//     for (let j = 1; j < 60; j++) {
//         document.write(`<div>Сукунди ${j}</div>`);
//     }
// }

// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)


// for (let i = 0; i < 12; i++) {
//     document.write(`<div>Години----------------------------------------------${i}</div>`);
//     for (let j = 0; j < 60; j++) {
//         document.write(`<div>Хвилини---------------${j}</div>`);
//         for (let k = 0; k < 60; k++) {
//             document.write(`<div>Сукунди----${k}</div>`);
//         }
//     }
// }

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let arrayLetter = [ 'a', 'b', 'c'];
// let res = ''
//
// for (let i = 0; i <arrayLetter.length ; i++) {
//     res += arrayLetter[i]
// }
// console.log(res);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let arrayLetter = ['a', 'b', 'c'];
// let i = 0;
// let res = '';
//
// while (i < arrayLetter.length){
//     res += arrayLetter[i]
//     i++
// }
//
// console.log(res);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


// let arrayLetter = ['a', 'b', 'c'];
// let res = '';
// for (const string of arrayLetter) {
//      res += string;
// }
//
// console.log(res)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arrayLetters = ['a', 'b', 'c'];
// let res = '';
// for (const arrayLetter of arrayLetters) {
//     res += arrayLetter;
// }
// console.log(res);
// =================
// =================
// =================
// =================
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// const arrayLetters =  ['a', 'b', 'c'];
// let elem = 1;
// let  numberOfElements = arrayLetters.length  + 3;
//
// for (let i = arrayLetters.length; i < numberOfElements; i++) {
//     arrayLetters[i] = elem++;
// }
//
// console.log(arrayLetters);
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arrayNumber = [1, 2, 3];
//
// arrayNumber.reverse();
//
// console.log(arrayNumber);


// let arrayNumber = [1, 2, 3];
// let count = 3
// for (let i = 0; i < arrayNumber.length; i++) {
//     arrayNumber[i] = count--;
// }
//
// console.log(arrayNumber);


// let arrayNumber = [1, 2, 3];
// let newArray = [];
//
// for (let i = 0; i < arrayNumber.length; i++) {
//     newArray[i] = arrayNumber[(arrayNumber.length - 1) - i];
// }
// console.log(newArray);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.


// let arrayNumber = [1,2,3];
//
// arrayNumber.push(4,5,6);
//
// console.log(arrayNumber);

// let arrayNumber = [1, 2, 3];
// let arrayAddEnd = [4, 5, 6];
// let count = 0;
// let flag = arrayNumber.length + arrayAddEnd.length ;
//
// for (let i = arrayNumber.length; i < flag; i++) {
//     arrayNumber[i] = arrayAddEnd[count++];
// }
// console.log(arrayNumber);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// let arrayNumber = [1, 2, 3];
// arrayNumber.unshift(4,5,6);
// console.log(arrayNumber);


// let arrayNumber = [1, 2, 3];
// let arrayAddEnd = [4, 5, 6];
//
//
// for (let i = 0; i < arrayAddEnd.length; i++) {
//     for (let j = arrayNumber.length; j > 0; j--) {
//         arrayNumber[j] = arrayNumber[j-1];
//     }
//     arrayNumber[0] = arrayAddEnd[i];
// }
// console.log(arrayNumber);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

// let arrayString = ['js', 'css', 'jq'];
// let firstElement = arrayString.shift();
//
// console.log(firstElement);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

// let arrayString = ['js', 'css', 'jq'];
// let lastElement = arrayString.pop();
//
// console.log(lastElement);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

// let arrayNumbers = [1, 2, 3, 4, 5];
// let sliceArray = arrayNumbers.slice(-2);
//
// console.log(sliceArray);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

// let arrayNumbers = [1, 2, 3, 4, 5];
// let sliceArray = arrayNumbers.slice(0,2);
// console.log(sliceArray);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

// let arrayNumbers = [1, 2, 3, 4, 5];
// let spliceMetod =  arrayNumbers.splice(1,2);
//
// console.log(spliceMetod);
// console.log(arrayNumbers);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// let arrayNumbers = [1, 2, 3, 4, 5];
// arrayNumbers.splice(2,0,'a','b','b');
// console.log(arrayNumbers);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// let arrayNumbers = [1, 2, 3, 4, 5];
// arrayNumbers.splice(1,0,'a','b');
// arrayNumbers.splice(6,0,'c');
// arrayNumbers.splice(8,0, 'e');
//
// console.log(arrayNumbers);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let numberArray = [1,2,3,4,5,6,7,8,9,10];
// for (let i = 0; i < numberArray.length; i++) {
//     if(numberArray[i]%2 == 0){
//         console.log(numberArray[i]);
//     }
// }

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

// let numberArray = [1,2,3,4,5,6,7,8,9,10];
// let emptyArray = [];
// for (let i = 0; i < numberArray.length; i++) {
//     emptyArray.push(numberArray[i]);
// }
// console.log(emptyArray);

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let numberArray = [1,2,3,4,5,6,7,8,9,10];
// let emptyArray = [];
// for (let i = 0; i < numberArray.length; i++) {
//     emptyArray[i] = numberArray[i];
// }
// console.log(emptyArray);
//
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//     1. перебрати його циклом while

// let duferentArray = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < duferentArray.length){
//       console.log(duferentArray[i])
//     i++
// }

//     2. перебрати його циклом for

// let duferentArray = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < duferentArray.length; i++) {
//     console.log(duferentArray[i])
// }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < duferentArray.length) {
//     if (i%2 != 0) {
//         console.log(duferentArray[i])
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < duferentArray.length; i++) {
//     if (i % 2 != 0) {
//         console.log(duferentArray[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = 0;
//
// while (i < duferentArray.length) {
//
//     if (duferentArray[i]%2 == 0) {
//         console.log(duferentArray[i]);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < duferentArray.length; i++) {
//     if(duferentArray[i] % 2 == 0){
//         console.log(duferentArray[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = 0; i < duferentArray.length; i++) {
//     if(duferentArray[i] % 3 == 0){
//         duferentArray[i] = 'okten';
//     }
// }
// console.log(duferentArray);
// 8. вивести масив в зворотньому порядку.

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = duferentArray.length - 1; i >=0 ; i--) {
//     console.log(duferentArray[i]);
// }

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

//     1. перебрати його циклом while(с заду на перед)

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = duferentArray.length - 1;
// while ( i >= 0){
//     console.log(duferentArray[i]);
//     i--
// }
//     2. перебрати його циклом for (с заду на перед);

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = duferentArray.length - 1; i >= 0; i--) {
//    console.log(duferentArray[i]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом(Задом на перед)

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = duferentArray.length - 1;
// while (i >= 0) {
//     if (i%2 != 0) {
//         console.log(duferentArray[i])
//     }
//     i--
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом(Задом на перед)

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = duferentArray.length - 1 ; i >= 0; i--) {
//     if (i % 2 != 0) {
//         console.log(duferentArray[i])
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення(Задом наперед)

// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// let i = duferentArray.length;
//
// while (i >= 0) {
//
//     if (duferentArray[i]%2 == 0) {
//         console.log(duferentArray[i]);
//     }
//     i--;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення(Задом наперед)
// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// for (let i = duferentArray.length - 1; i >= 0; i--) {
//     if(duferentArray[i] % 2 == 0){
//         console.log(duferentArray[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"(Задом наперед)
// let duferentArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//
// for (let i = duferentArray.length - 1; i >= 0; i--) {
//     if(duferentArray[i]%3 === 0){
//         duferentArray[i] = 'okten';
//     }
//     console.log(duferentArray);
// }

// 10
// створити пустий масив та :
//     - заповнити його 50 парними числами за допомоги циклу.
// let emptyArray = [];
// for (let i = 0;emptyArray.length <= 50; i++) {
//     if (i % 2 == 0) {
//       emptyArray.push(i)
//     }

// console.log(emptyArray)
// - заповнити його 50 непарними числами за допомоги циклу.

// let emptyArray = [];
// for (let i = 0; i < 50; i++) {
//    if(i % 2 != 0){
//        emptyArray.push(i)
//    }
// }
// console.log(emptyArray);

// Сам зробив один масив здвох варіантів/////////////////////////////////

// let emptyArray = [];
// for (let i = 0; emptyArray.length <= 50; i++) {
//     if (i % 2 == 0) {
//         emptyArray[i] = i
//     }
// }
// for (let i = 0; emptyArray.length <= 51; i++) {
//
//     if (i % 2 != 0) {
//         emptyArray[i] = i;
//     }
// }
//
// console.log(emptyArray);

///////////////////////////////////////////////////////////////////////////


// 1
// створити пустий масив та :
//     1. заповнити його 50 парними числами за допомоги циклу.
// let emptyArray = [];
// for (let i = 0; i <= 50; i++) {
//     if (i % 2 == 0) {
//         emptyArray.push(i)
//     }
// }
// console.log(emptyArray);

// 2. заповнити його 50 непарними числами за допомоги циклу.
//
// let emptyArray = [];
// for (let i = 0; i < 50; i++) {
//     if (i % 2 != 0) {
//         emptyArray.push(i)
//     }
// }
// console.log(emptyArray);
// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
// let randomArray = [];
// for (let i = 0; i < 30; i++) {
//     let randomNamber = Math.floor(Math.random() * 11);
//     randomArray.push(randomNamber)
// }
//
// console.log(randomArray);

//     диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// let randomArray = [];
// let min = 8;
// let max = 732;
//
// let randomArray = [];
// for (let i = 0; i < 100; i++) {
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     randomArray.push(rand)
// }
//
// console.log(randomArray);


// 2. вывести на консоль  каждый третий елемент

//
// let min = 8;
// let max = 732;
//
// let randomArray = [];
// for (let i = 0; i < 100; i++) {
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     randomArray.push(rand)
// }
//
// for (let i = 2; i < randomArray.length; i = i + 3) {
//     console.log(randomArray[i])
// }
//

// 3. вывести на консоль  каждый третий елемент
// но при условии что его значение является парным.



// let min = 8;
// let max = 732;
//
// let randomArray = [];
// for (let i = 0; i < 100; i++) {
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     randomArray.push(rand)
// }
//
// for (let i = 2; i < randomArray.length; i = i + 3) {
//     if(randomArray[i] % 2 == 0)
//     console.log(randomArray[i])
// }

// 4. вывести на консоль  каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

// let emptyArray = [];
// let min = 8;
// let max = 732;
//
// let randomArray = [];
// for (let i = 0; i < 100; i++) {
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     randomArray.push(rand)
// }
//
// for (let i = 2; i < randomArray.length; i = i + 3) {
//     if(randomArray[i] % 2 == 0)
//         emptyArray.push(randomArray[i]);
// }
//
// console.log(emptyArray);


// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

// let min = 8;
// let max = 732;
//
// let randomArray = [];
// for (let i = 0; i < 100; i++) {
//     let rand = Math.floor(min + Math.random() * (max + 1 - min));
//     randomArray.push(rand)
// }
//
// for (let i = 0; i < randomArray.length; i++) {
//     if(randomArray[i + 1] % 2 == 0 ){
//         console.log(randomArray[i]);
//     }
// }

// 5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

// let purchasePrice = [100,250,50,168,120,345,188];
// let averageСheck = 0;
// for (let i = 0; i < purchasePrice.length; i++) {
//      averageСheck += purchasePrice[i];
// }
//
// console.log(averageСheck/purchasePrice.length);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let randomArray = [];
// let copiesRandomArray = [];
//
// for (let i = 0; i < 50; i++) {
//     randomArray[i] =Math.round(Math.random() * 10);
//      copiesRandomArray[i] = randomArray[i] * 5;
// }
//
// console.log(randomArray);
// console.log(copiesRandomArray);
//
// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
// додати його в інший масив.


// let difArrey = ['str',23,32,434,56,76,false,true,'str'];
// let newArray = [];
//
// for (let i = 0; i < difArrey.length; i++) {
//      if(typeof (difArrey[i]) == "number"){
//          newArray.push(difArrey[i]);
//      }
// }
// console.log(newArray);


















