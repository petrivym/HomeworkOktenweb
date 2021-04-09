// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.

// let numberArray = [1, 23, 3, 4, 1, 7, 9, 12, 55, 78, 2, 88, 5, 33, 70, 23, 45, 11, 6, 78]
//
// numberArray.sort((a, b) => a - b);
//
// console.log(numberArray);

//     b) відсортувати його від більшого до меншого.

// let numberArray = [1, 23, 3, 4, 1, 7, 9, 12, 55, 78, 2, 88, 5, 33, 70, 23, 45, 11, 6, 78]
//
// numberArray.sort((a, b) => b - a);
//
// console.log(sortingNumbers);
//     c) Відфілтрувати числа які є кратними 3.
// let numberArray = [1, 23, 3, 4, 1, 7, 9, 12, 55, 78, 2, 88, 5, 33, 70, 23, 45, 11, 6, 78];
//
// let sortingArray = numberArray.filter((value => !(value % 3 )));
//
// console.log(sortingArray);
//
// console.log(numberArray);
// d) Відфілтрувати числа які є більшими за 10.
// let numberArray = [1, 23, 3, 4, 1, 7, 9, 12, 55, 78, 2, 88, 5, 33, 70, 23, 45, 11, 6, 78];
//
// let sortingArray = numberArray.filter((value =>  value > 10));
//
// console.log(sortingArray);
//
// console.log(numberArray);
// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// let numberArray = [1, 23, 3, 4, 1, 7, 9, 12, 55, 78, 2, 88, 5, 33, 70, 23, 45, 11, 6, 78];
//
// numberArray.forEach(value => document.write(`${value} <br>  `))

// f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let numberArray = [1, 23, 3, 4, 1, 7, 9, 12, 55, 78, 2, 88, 5, 33, 70, 23, 45, 11, 6, 78];
//
// let mapArray = numberArray.map(value => value * 3);
//
// console.log(mapArray);
//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let numberArray = [1, 23, 3, 4, 1, 7, 9, 12, 55, 78, 2, 88, 5, 33, 70, 23, 45, 11, 6, 78];
//
//
// let sum = numberArray.reduce((acum, curentValue) => acum + curentValue);
// console.log(sum);
//
// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
// let arr_en = ['a','y','q','w','e','r','t','y','i','g','f','b','l','p','m','a','z','b','v','c'];
// arr_en.sort();
//
// console.log(arr_en);
// b) Відсортувати в зворотньому порядку

// let arr_en = ['a','y','q','w','e','r','t','y','i','g','f','b','l','p','m','a','z','b','v','c'];
// // arr_en.sort().reverse();
// arr_en.sort((a,b) => (a > b) ?  1 : -1);
//
// console.log(arr_en);
// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// let arr_en = ['afgdfgfg', 'dfgdfy', 'ffq', 'gw', 'fge', 'rfff', 'gfgft', 'ddy', 'irrr', 'gerere', 'ffgfg', 'fgdb', 'dfgl', 'gfdgp', 'mfgd', 'a', 'z', 'b', 'v', 'c'];
//
// let arrayLengthMorefour = arr_en.filter((value) => value.length > 4);
//
// console.log(arrayLengthMorefour);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'//


// let arr_en = ['afgdfgfg', 'dfgdfy', 'ffq', 'gw', 'fge', 'rfff', 'gfgft', 'ddy', 'irrr', 'gerere', 'ffgfg', 'fgdb', 'dfgl', 'gfdgp', 'mfgd', 'a', 'z', 'b', 'v', 'c'];
//
// let arr_enSamSays = arr_en.map((value =>  `Sam says ${value}`))
//
// console.log(arr_enSamSays);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
// const users = [
//     {name: 'vasya', age: 31, isMarried: false},
//     {name: 'petya', age: 30, isMarried: true},
//     {name: 'kolya', age: 29, isMarried: true},
//     {name: 'olya', age: 28, isMarried: false},
//     {name: 'max', age: 30, isMarried: true},
//     {name: 'anya', age: 31, isMarried: false},
//     {name: 'oleg', age: 28, isMarried: false},
//     {name: 'andrey', age: 29, isMarried: true},
//     {name: 'masha', age: 30, isMarried: true},
//     {name: 'olya', age: 31, isMarried: false},
//     {name: 'max', age: 31, isMarried: true}
// ];
// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((a ,b) =>a.age  - b.age);
// console.log(users);
// users.sort((a ,b) =>b.age  - a.age);
// console.log(users);
// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
//
// users.sort((a,b) =>  (a.name.length > b.name.length) ?  1 : -1);
//
// console.log(users);
// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// let copyObj = JSON.parse(JSON.stringify(users));
//
// copyObj.map((value) => value.id = Math.round(Math.random() * 100));
//
// console.log(copyObj);

// d) відсортувати його за індентифікатором

// copyObj.sort((a, b) => a.id - b.id);
// console.log(copyObj);

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// let flatArray = users.reduce((acc ,currentValue) => {
//     if(currentValue.isMarried){
//         currentValue.flat = true;
//         acc.push(currentValue);
//         return acc;
//     }
//     return acc;
// }, []);
//
// console.log(flatArray);


//
// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year : 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
// // Відфільтрувати масив за наступними крітеріями :
// //     - двигун більше 3х літрів
// let carVolumeMax3 = cars.filter((value =>  value.volume > 3));
// console.log(carVolumeMax3);
// // - двигун = 2л
//
// let carVolumeMax2 = cars.filter((value =>  value.volume === 2));
// console.log(carVolumeMax2);
// // - виробник мерс
// let carProducerMercedes = cars.filter((value =>  value.producer === 'mercedes'));
// console.log(carProducerMercedes);
//
// // - двигун більше 3х літрів + виробник мерседес

// let carProducerMercedes = cars.filter((value =>  value.producer === 'mercedes'  && value.volume > 3 ));
// console.log(carProducerMercedes);

// - двигун більше 3х літрів + виробник субару

// let carProducerSubaru = cars.filter((value =>  value.producer === 'subaru'  && value.volume >= 3 ));
//
// console.log(carProducerSubaru);

// - сили більше ніж 300

// let filterPowerUp300 = cars.filter((value => value.power > 300));
//
// console.log(filterPowerUp300);

// - сили більше ніж 300 + виробник субару

// let filterPowerUpAndProducerSubaru = cars.filter((value => value.power > 300 && value.producer === 'subaru'));
//
// console.log(filterPowerUpAndProducerSubaru);

// - мотор серіі ej

// let engine = cars.filter(value =>  value.engine == 'серіі ej');
//
// console.log(engine);
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let filterPowerProducerEngine = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine === 'серіі ej' );
//
// console.log(filterPowerProducerEngine);
// - двигун меньше 3х літрів + виробник мерседес
// let filterVolumeProducer = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
// console.log(filterVolumeProducer);
// - двигун більше 2л + сили більше 250
// let filterVolumeProducer = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(filterVolumeProducer);
// - сили більше 250  + виробник бмв
//

// let filterVolumeProducer = cars.filter(value => value.producer > 'bmw' && value.power > 250);
// console.log(filterVolumeProducer);
//
// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'olya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'kolya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

//
// -- Відсортувати їх по ID

// usersWithAddress.sort((a,b) => a.id - b.id);
// console.log(usersWithAddress);
// -- Відсортувати їх по ID в зворотньому порядку
// usersWithAddress.sort((a,b) => b.id - a.id);
// console.log(usersWithAddress);
// -- Відсортувати по віку
// usersWithAddress.sort((a,b) => a.age - b.age);
// console.log(usersWithAddress);
// -- Відсортувати по віку в зворотньому порядку
// usersWithAddress.sort((a,b) => b.age - a.age);
// console.log(usersWithAddress);
// -- Відсорутвати по імені
// usersWithAddress.sort((a, b) => (a.name > b.name)? 1 : -1 );
// console.log(usersWithAddress);
// -- Відсорутвати по назві вулиці
// usersWithAddress.sort((a, b) => (a.address.city > b.address.city)? 1 : -1 );
// console.log(usersWithAddress);
// -- Відсорутвати по номеру будинку

// usersWithAddress.sort((a,b) => a.address.number - b.address.number  );
// console.log(usersWithAddress);
// -- Залигити тільки тих, хто молодший ніж 30 (filter)

// let filterAge = usersWithAddress.filter((value => value.age > 30));
//
// console.log(filterAge);

// -- Залишити тільки одружених

// let filterIsMarried = usersWithAddress.filter((value => value.isMarried));
// console.log(filterIsMarried);

// -- Залишити тільки одружених, які молодні за 30
// let filterIsMarriedAndYong = usersWithAddress.filter((value => value.isMarried && value.age < 30));
// console.log(filterIsMarriedAndYong);
// -- Залишити лише тих, в кого парні номери будинків.

// let  pairHouseNumber = usersWithAddress.filter((value => !(value.address.number%2)  ));
// console.log(pairHouseNumber);

// -- Порахувати загальний вік всіх людей. (reduce)

// let sumAgeUsers = usersWithAddress.reduce((acum,value) =>  acum + value.age  ,0);
// console.log(sumAgeUsers);

// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)


//Окремий масив
// let reduce = usersWithAddress.reduce((acum, curentValue) =>{
//     if(curentValue.isMarried && curentValue.age > 30){
//         curentValue.child = true;
//         acum.push(curentValue);
//     }
//     return acum;
// },[]);
// console.log(reduce);

//Повний масив із зміннами
// let reduce = usersWithAddress.reduce((acum, curentValue) => {
//     if (curentValue.isMarried && curentValue.age > 30) {
//         curentValue.child = true;
//         acum.push(curentValue);
//     }
//     acum.push(curentValue);
//     return acum;
// }, []);
// console.log(reduce);

// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'olya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'kolya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// const userClone = users.reduce((acc, value) =>  value.isMarried ? [...acc,{...value,hasHouse : true}] :  acc, [])
//
// console.log(userClone);

//
//
// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// class car {
//     constructor(producer, power, price, year, driver) {
//         this.producer = producer;
//         this.power = power;
//         this.driver = driver;
//         this.price = price;
//         this.year = year;
//         this.driver = driver;
//     }
// }
//
// let subaruCar = new car('subaru', 400, 7000, 2013, {name: 'alex', age: 23, drivingeExperience: 3});
// let mercedesCar = new car('mercedes', 350, 9000, 2008, {name: 'oleg', age: 33, drivingeExperience: 10});
// let bmwCar = new car('bmw', 300, 9000, 2015, {name: 'ivan', age: 20, drivingeExperience: 2});
// let audiCar = new car('audi', 290, 9600, 2014, {name: 'Stepan', age: 28, drivingeExperience: 5});
// let bentleyCar = new car('bentle', 250, 17000, 2018, {name: 'yosup', age: 44, drivingeExperience: 7});
// let fiatCar = new car('fiat', 150, 8607, 2015, {name: 'Volodia', age: 38, drivingeExperience: 8});
// let nissaCar = new car('nissa', 450, 35000, 2020, {name: 'Ivanovich', age: 56, drivingeExperience: 20});
// let volkswagenCar = new car('volkswagen', 380, 10000, 2017, {name: 'Andriy', age: 19, drivingeExperience: 1});
// let volvoCar = new car('volvo', 220, 37000, 2020, {name: 'Petro', age: 54, drivingeExperience: 23});
// let mazdaCar = new car('mazda', 600, 27000, 2021, {name: 'Muron', age: 62, drivingeExperience: 36});
//
// let arrayCars = [subaruCar, mercedesCar, bmwCar, audiCar, bentleyCar, fiatCar, nissaCar, volkswagenCar, volvoCar, mazdaCar];
//
// console.log(arrayCars);

//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// let upPowerArray = arrayCars.map(function (value, i) {
//     if(i%2){
//         value.power +=value.power* 0.1;
//         value.price +=value.price* 0.05;
//     }
//     return value
// });
//
//
// console.log(upPowerArray);
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,

// let filterExperienceDrivers = arrayCars.filter((value => value.driver.drivingeExperience < 5 && value.driver.age < 25 ));
// console.log(filterExperienceDrivers);
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.


// let upExperience = filterExperienceDrivers.reduce((acum, elem) => {
//     elem.driver.drivingeExperience += 1;
//     acum.push(elem);
//     return acum;
// },[]);


// let upExperience = filterExperienceDrivers.map((elem => {
//     elem.driver.drivingeExperience += 1;
//     return elem
// }));
//
//
// console.log(upExperience);
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в цикл//
// let sumAllCars = arrayCars.reduce((acc,elem)=> acc+= elem.price ,0);
//
// console.log(sumAllCars *28);


// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]


// function findStatAndEnd(array, key) {
//     console.log(`Answer: MinIndex = ${array.indexOf(key)}, MaxIndex = ${array.lastIndexOf(key)}.`);
// }

// findStatAndEnd(Arr,1);
// findStatAndEnd(Arr,4);
// findStatAndEnd(Arr,22);


// function findStatAndEnd(array, key) {
//     let minIndex = null;
//     let maxIndex = null;
//     for (let i = 0; i < array.length; i++) {
//         if (!minIndex) {
//             if (array[i] === key) {
//                 minIndex = i +'';
//             }
//         }
//     }
//     for (let i = array.length - 1; i >= 0; i--) {
//         if (!maxIndex) {
//             if (array[i] === key) {
//                 maxIndex = i + '';
//             }
//         }
//     }
//     if(!minIndex){
//         minIndex = -1;
//     }
//     if(!maxIndex){
//         maxIndex = -1;
//     }
//
//     console.log(`Answer: MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`);
// }
//
// findStatAndEnd(Arr, 1);
// findStatAndEnd(Arr, 4);
// findStatAndEnd(Arr, 22);


// function findStatAndEnd(array, key) {
//     let minIndex = null;
//     let maxIndex = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === key) {
//             if(!minIndex){
//                 minIndex = i;
//             }
//             maxIndex = i;
//
//         }
//     }
//     return `Answer: MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`
// }
//
// console.log();
//
//
//
//
// console.log(findStatAndEnd(Arr, 1));
// console.log(findStatAndEnd(Arr, 4));
// console.log(findStatAndEnd(Arr, 22));
