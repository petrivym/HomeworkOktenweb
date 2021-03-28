//
// Cоздать функцию которая принимает число и возвращает  текст как в примере:
//     3275  —>  "3000 + 200 + 70 +5"

function






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













