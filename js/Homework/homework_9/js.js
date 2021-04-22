//Зробити розпорядок дня на
// 1.Колбеках
// 2.Промісами
// 3.async await
//Має бути 7 - 10 дій


//Зробити розпорядок дня на  Колбеках------------------------- 1

//Коментарі ..... Для тестування є два флага(Конфірми які змінюють колбеки)


// let energy = 80;
//
// function wakeUp(flag, cb) {
//     setTimeout(() => {
//         if (flag) {
//             cb(null, energy, 'You am wake up');
//         } else {
//             cb('You have day off today,i sleeping')
//         }
//     }, 100)
// }
//
// function drinkCoffee(haveCoffee, energy, cb) {
//     setTimeout(() => {
//         if (haveCoffee) {
//             cb(null, energy += 20);
//         } else {
//             cb('Have not coffee ,not energy')
//         }
//
//     }, 200);
// }
//
// function goToWork(drinkCoffee, energy, cb) {
//     setTimeout(() => {
//         if (!drinkCoffee) {
//             cb('You do not drink coffee .It is not good.Pleas drink coffee, because you don\'t have energy to learn js ');
//         }
//         cb(null, energy - 50);
//     }, 7000);
// }
//
// function goToOkten(energy, cb) {
//     setTimeout(() => {
//         if (energy > 40) {
//             cb(null, energy + 30);
//         } else {
//             cb('You don\'t have energy  that learning JS');
//         }
//     }, 3000)
// }
//
// function learnEnglish(energy, cb) {
//     setTimeout(() => {
//         if (energy > 79) {
//             cb(null, energy - 50)
//         } else {
//             cb('You don\'t have energy  that learning English');
//         }
//     }, 1000);
// }
//
//
// function goForAWalk(energy, cb) {
//     setTimeout(() => {
//         if (energy > 29) {
//             cb(null, energy - 10);
//         } else {
//             cb(`You dont go to for a walk and you energy is ${energy}`)
//         }
//     })
// }
//
// function meetFriendsAndDrinkVodka(flag, energy, cb) {
//     setTimeout(() => {
//         if (flag) {
//             cb(null, energy - 50);
//         } else {
//             cb(energy);
//         }
//     }, 800)
// }
//
//
// wakeUp(true, (error, data, info) => {
//     if (!error) {
//         console.log(`${info} your energy: ${data}`);
//         drinkCoffee(true, data, (error, data) => {
//             if (!error) {
//                 console.log(`You drink coffee and your Energy is ${data}`);
//                 goToWork(true, data, (error, data) => {
//                     if (!error) {
//                         console.log(`You working all day and your energy is  ${data}`);
//                         goToOkten(data, (error, data) => {
//                             if (!error) {
//                                 console.log(`You are learning Js and your energy up, You love Js ${data}`);
//                                 learnEnglish(data, (error, data) => {
//                                     if (!error) {
//                                         console.log(`Learning English is to mach ,Your energy drop ${data}`);
//                                         goForAWalk(data, (error, data) => {
//                                             if (!error) {
//                                                 console.log(`You spend energy in foa a walk, and your energy is ${data}`);
//                                                 meetFriendsAndDrinkVodka(confirm('Drink?'), data, (error, data) => {
//                                                     if (!error) {
//                                                         console.log(`You drank Men go to home and sleep your energy is lov ${data}`);
//                                                     } else {
//                                                         console.log(`Tomorrow you will wake up with extra energy +${error}`);
//                                                     }
//                                                 })
//                                             } else {
//                                                 console.log(error);
//                                             }
//                                         })
//                                     } else {
//                                         console.log(error);
//                                     }
//                                 })
//                             } else {
//                                 console.log(error);
//                             }
//                         })
//                     } else {
//                         console.warn(error);
//                     }
//                 });
//             } else {
//                 console.warn(error);
//             }
//         });
//     } else {
//         console.warn(error);
//     }
// })


// 2.Промісами

//
// let energy = 80;
//
// function wakeUp(flag) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (flag) {
//                 console.log('You am wake up');
//                 resolve(energy);
//             } else {
//                 reject('You have day off today,i sleeping')
//             }
//         }, 100)
//     })
// }
//
// function drinkCoffee(haveCoffee, energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveCoffee) {
//                 resolve(energy += 20);
//             } else {
//                 reject('Have not coffee ,not energy')
//             }
//
//         }, 200);
//     })
// }
//
// function goToWork(drinkCoffee, energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!drinkCoffee) {
//                 reject('You do not drink coffee .It is not good.Pleas drink coffee, because you don\'t have energy to learn js ');
//             }
//             resolve(energy - 50);
//         }, 7000);
//     })
// }
//
//
// function goToOkten(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 40) {
//                 resolve(energy + 30);
//             } else {
//                 reject('You don\'t have energy  that learning JS');
//             }
//         }, 3000)
//     })
//
// }
//
//
// function learnEnglish(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 79) {
//                 resolve(energy - 50)
//             } else {
//                 reject('You don\'t have energy  that learning English');
//             }
//         }, 1000);
//     })
// }
//
// //
// //
// function goForAWalk(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 29) {
//                 resolve(energy - 10);
//             } else {
//                 reject(`You dont go to for a walk and you energy is ${energy}`)
//             }
//         })
//     })
// }
//
// function meetFriendsAndDrinkVodka(flag, energy) {
//     return new  Promise( (resolve, reject) => {
//         setTimeout(() => {
//             if (flag) {
//                 reject(`Випив і на завтра буде мало Енергіх .    Твоя  Енерджі =  ${energy - 50}`);
//             } else {
//                 resolve(energy);
//             }
//         }, 800)
//     })
// }
//
//
// wakeUp(true).then(data => {
//     console.log(`your energy: ${data}`);
//     return drinkCoffee(true, data)
// }).then(data => {
//     console.log(`You drink coffee and your Energy is ${data}`);
//     return goToWork(true, data);
// }).then(data => {
//     console.log(`You working all day and your energy is  ${data}`);
//     return goToOkten(data);
// }).then(data => {
//     console.log(`You are learning Js and your energy up, You love Js ${data}`);
//     return learnEnglish(data);
// }).then(data => {
//     console.log(`Learning English is to mach ,Your energy drop ${data}`);
//     return  goForAWalk(data);
// }).then(data =>{
//     console.log(`You spend energy in foa a walk, and your energy is ${data}`);
//     return  meetFriendsAndDrinkVodka(confirm('Drink?'),data)
// }).then(data =>{
//     console.log(`You drank Men go to home and sleep your energy is lov ${data}`);
//     }).catch(reasons =>{
// console.warn(` reasons : ${reasons}`);
// });
//
//
// let energy = 80;
//
// function wakeUp(flag) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (flag) {
//                 console.log('You wake up');
//                 resolve(energy);
//             } else {
//                 reject('You have day off today,i sleeping')
//             }
//         }, 100)
//     })
// }
//
// function drinkCoffee(haveCoffee, energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveCoffee) {
//                 resolve(energy += 20);
//             } else {
//                 reject('Have not coffee ,not energy')
//             }
//
//         }, 200);
//     })
// }
//
// function goToWork(drinkCoffee, energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!drinkCoffee) {
//                 reject('You do not drink coffee .It is not good.Pleas drink coffee, because you don\'t have energy to learn js ');
//             }
//             resolve(energy - 50);
//         }, 7000);
//     })
// }
//
//
// function goToOkten(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 40) {
//                 resolve(energy + 30);
//             } else {
//                 reject('You don\'t have energy  that learning JS');
//             }
//         }, 3000)
//     })
//
// }
//
//
// function learnEnglish(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 79) {
//                 resolve(energy - 50)
//             } else {
//                 reject('You don\'t have energy  that learning English');
//             }
//         }, 1000);
//     })
// }
//
// //
// //
// function goForAWalk(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 29) {
//                 resolve(energy - 10);
//             } else {
//                 reject(`You dont go to for a walk and you energy is ${energy}`)
//             }
//         })
//     })
// }
//
// function meetFriendsAndDrinkVodka(flag, energy) {
//     return new  Promise( (resolve, reject) => {
//         setTimeout(() => {
//             if (flag) {
//                 reject(`Випив і на завтра буде мало Енергіх .    Твоя  Енерджі =  ${energy - 50}`);
//             } else {
//                 resolve(energy);
//             }
//         }, 800)
//     })
// }

//
// wakeUp(true).then(data => {
//     console.log(`your energy: ${data}`);
//     return drinkCoffee(true, data)
// }).then(data => {
//     console.log(`You drink coffee and your Energy is ${data}`);
//     return goToWork(true, data);
// }).then(data => {
//     console.log(`You working all day and your energy is  ${data}`);
//     return goToOkten(data);
// }).then(data => {
//     console.log(`You are learning Js and your energy up, You love Js ${data}`);
//     return learnEnglish(data);
// }).then(data => {
//     console.log(`Learning English is to mach ,Your energy drop ${data}`);
//     return  goForAWalk(data);
// }).then(data =>{
//     console.log(`You spend energy in foa a walk, and your energy is ${data}`);
//     return  meetFriendsAndDrinkVodka(confirm('Drink?'),data)
// }).then(data =>{
//     console.log(`You drank Men go to home and sleep your energy is lov ${data}`);
// }).catch(reasons =>{
//     console.warn(` reasons : ${reasons}`);
// });



// 3.async await

// let energy = 80;
//
// function wakeUp(flag) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (flag) {
//                 console.log('You wake up');
//                 resolve(energy);
//             } else {
//                 reject('You have day off today,i sleeping')
//             }
//         }, 100)
//     })
// }
//
// function drinkCoffee(haveCoffee, energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveCoffee) {
//                 resolve(energy += 20);
//             } else {
//                 reject('Have not coffee ,not energy')
//             }
//
//         }, 200);
//     })
// }
//
// function goToWork(drinkCoffee, energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!drinkCoffee) {
//                 reject('You do not drink coffee .It is not good.Pleas drink coffee, because you don\'t have energy to learn js ');
//             }
//             resolve(energy - 50);
//         }, 7000);
//     })
// }
//
//
// function goToOkten(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 40) {
//                 resolve(energy + 30);
//             } else {
//                 reject('You don\'t have energy  that learning JS');
//             }
//         }, 3000)
//     })
//
// }
//
//
// function learnEnglish(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 79) {
//                 resolve(energy - 50)
//             } else {
//                 reject('You don\'t have energy  that learning English');
//             }
//         }, 1000);
//     })
// }
//
// //
// //
// function goForAWalk(energy) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (energy > 29) {
//                 resolve(energy - 10);
//             } else {
//                 reject(`You dont go to for a walk and you energy is ${energy}`)
//             }
//         })
//     })
// }
//
// function meetFriendsAndDrinkVodka(flag, energy) {
//     return new  Promise( (resolve, reject) => {
//         setTimeout(() => {
//             if (flag) {
//                 reject(`Випив і на завтра буде мало Енергіх .    Твоя  Енерджі =  ${energy - 50}`);
//             } else {
//                 resolve(energy);
//             }
//         }, 800)
//     })
// }
//
// async function myDay(){
//     try{
//     let data = await wakeUp(true);
//         console.log(`your energy: ${data}`);
//         data = await drinkCoffee(true, data)
//         console.log(`You drink coffee and your Energy is ${data}`);
//          data = await goToWork(true, data);
//         console.log(`You working all day and your energy is  ${data}`);
//         data = await goToOkten(data);
//         console.log(`You are learning Js and your energy up, You love Js ${data}`);
//         data = await learnEnglish(data);
//         console.log(`Learning English is to mach ,Your energy drop ${data}`);
//         data = await  goForAWalk(data);
//         console.log(`You spend energy in foa a walk, and your energy is ${data}`);
//         data = await  meetFriendsAndDrinkVodka(confirm('Drink?'),data)
//         console.log(`You drank Men go to home and sleep your energy is lov ${data}`);
//     }catch (err){
//         console.warn(err)
//     }
// }


myDay()









