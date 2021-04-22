// function goWork(isWork) {
//     return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 if (isWork) {
//                     resolve(500)
//                 } else {
//                     reject('he is dose not work')
//                 }
//             }, 1000)
//         }
//     )
// }
//
//
// function buStaff(money) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (money > 400) {
//                 resolve(money - 300);
//             } else {
//                 reject('He has not money');
//             }
//         }, 600)
//     })
// }



// goWork(false)
//     .then(value => {
//         return buStaff(value)
//     })
//     .then(value => {
//         console.log(value);
//     }).catch( reason => {
//         console.warn(reason);
// })
















