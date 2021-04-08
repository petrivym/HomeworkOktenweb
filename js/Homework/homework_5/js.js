// Реалізовуємо свій компютерний магазин.
// ===
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
//     Оперативна память.
//     Потужність процесора. (цифра від 0 до 1000)
// Назва.
//     В кожного компютера має бути метод включання.

//
// class Computer {
//     constructor(ram, cpuPower) {
//         this.ram = ram;
//         this.cpuPower = cpuPower;
//     }
//
//     turnOnn() {
//         console.log('On');
//     }
// }
//
// let computer = new Computer(8, 3.7);
// computer.turnOnn();
// console.log(computer);

// ===
// Від базового компютрера треба реалізувати ноутбук.
//     Він має нову властивість дюймаж монітора.
//     У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// ===

// class Laptop extends Computer {
//     constructor(ram, cpuPower, screenDiagonal) {
//         super(ram, cpuPower);
//         this.screenDiagonal = screenDiagonal;
//         this.batteryPower = Math.round(this.cpuPower / (this.screenDiagonal * this.ram));
//     }
// }
//
//
// let laptop = new Laptop(4, 76, 15);
//
// console.log(laptop);


// Від ноутбука потрібно зробити ультрабук.
//     Він має нову змінну ваги.
//     При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// ===
// class UltraBook extends Laptop {
//     constructor(ram, cpuPower, screenDiagonal, weight) {
//         super(ram, cpuPower, screenDiagonal);
//         this.weight = weight;
//     }
//
//     turnOnn() {
//         if (this.weight >= 2) {
//             console.log('якшо вага більша за 2кг та батарея тримаж менше ніж 4 години');
//         } else {
//             console.log('on');
//         }
//     }
// }
//
// let ultraBook = new UltraBook(4, 76, 15, 1);
// ultraBook.turnOnn()
//

// Від базвого класу потрібно створити базовий ПК.
//     В нього має бути новий метод запуску ігор.
//     Кількість FPS визначається як потужність / опервтивку.
//     Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`


// class BasicComputer extends Computer {
//     constructor(ram, cpuPower) {
//         super(ram, cpuPower)
//         this.fps = this.cpuPower / this.ram;
//     }
//
//
//     turnOnnGame() {
//         return `You are playing GTA-5 with ${this.fps} FSP`;
//     }
//
// }
//
//
// let basComputer = new BasicComputer(2, 100);
//
// console.log(basComputer.turnOnnGame());
// console.log(basComputer);


// Компютер можна апгрейдити.
//     Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
//     Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
//     Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ===

//
// class UpdatePc extends Computer {
//     constructor(ram, cpuPower) {
//         super(ram, cpuPower)
//     }
//
//     turnOnnGame() {
//         return `You are playing GTA-5 with ${this.cpuPower / this.ram} FSP`
//     }
//
//     updateCpu(addPercentCpu = 0) {
//         if (addPercentCpu < 10 && addPercentCpu > 0) {
//             this.cpuPower = this.cpuPower + (this.cpuPower * addPercentCpu/100);
//             console.log(this.cpuPower);
//         }else {
//             console.log('do not corect ');
//         }
//     }
//     updateRam(addPercentRam) {
//         if ( addPercentRam < this.ram * 2 && addPercentRam > 0) {
//             this.ram += addPercentRam;
//             console.log(this.ram);
//         }else {
//             console.log('dose not correct value ');
//         }
//     }
//
//
// }
//
// let updatePC = new UpdatePc(8,24);
//
// console.log('--------------------------');
// console.log(updatePC);
// updatePC.updateCpu(9);
// updatePC.updateCpu(1);
// updatePC.updateCpu(11);
// updatePC.updateCpu(-21);
// console.log('--------------------------');
// updatePC.updateRam(1);
// updatePC.updateRam(16);
// updatePC.updateRam(-1);
// updatePC.updateRam(300);


// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.


// console.log('----------------------------------================================');
//
// class GamesPc extends BasicComputer {
//     constructor(ram, cpuPower,fps) {
//         super(ram, cpuPower,fps)
//             this.fps *= 2;
//     }
//
//     turnOnnGame() {
//         this.cpuPower -= this.cpuPower * 0.01
//         if (this.cpuPower > 500 && this.cpuPower > 8) {
//             console.log('ok');
//             return
//         }
//         console.log('На цьому відрі ігри не запускаються.');
//     }
// }
//
// let gamePc = new GamesPc(29, 600);
//
// console.log(gamePc);
// gamePc.turnOnnGame();
// console.log(gamePc);
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:\


// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// function ConstructorCars(companion, model, oldEars, maxSpeed, capacity) {
//     this.companion = companion;
//     this.model = model;
//     this.oldEars = oldEars;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//
//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
//     };
//     this.info = function () {
//         console.log(`
//         Compane name - ${this.companion}
//         model - ${this.model}
//         oldEars - ${this.oldEars}
//         maxSpeed - ${this.maxSpeed}
//         Capacity - ${this.capacity}`);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.oldEars = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let car = new ConstructorCars('mercedes benz','(Мерседес SLC (R172)', 2016, 320, 4.2);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(220);
// car.drive();
// car.changeYear(2020);
// car.info()
// car.addDriver({name:'Yaroslav',age: '23',godDriver:false})
// console.log(car.driver);


// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car {
//     constructor(companion, model, oldEars, maxSpeed, capacity) {
//         this.companion = companion;
//         this.model = model;
//         this.oldEars = oldEars;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//     }
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed}`);
//     };
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear(newValue) {
//         this.oldEars = newValue;
//     }
//
//     addDriver(driver) {
//         this.driver = driver
//     }
//
//     info() {
//         console.log(`
//         Compane name - ${this.companion}
//         model - ${this.model}
//         oldEars - ${this.oldEars}
//         maxSpeed - ${this.maxSpeed}
//         Capacity - ${this.capacity}`);
//     }
// }
//
// let myCar = new Car('mercedes benz', '(Мерседес SLC (R172)', 2016, 320, 4.2);
//
// console.log(myCar);
// myCar.drive();
// myCar.info();
// myCar.increaseMaxSpeed(220);
// myCar.drive();
// myCar.changeYear(2020);
// myCar.info()
// myCar.addDriver({name: 'Yaroslav', age: '23', godDriver: false})
// console.log(myCar.driver);

// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом


// class Human{
//     constructor(name,age) {
//         this.name =name;
//         this.age = age;
//     }
// }
//
// class Princess extends Human{
//     constructor(name, age, footSize) {
//         super(name,age)
//         this.footSize = footSize;
//     }
// }
//
// class Prince extends Human{
//     constructor(name, age, findSneakers) {
//         super(name, age);
//         this.findSneakers = findSneakers;
//     }
//
// }
//
// let arrayPrincess = [
//     new Princess('minora', 23, 39),
//     new Princess('minora', 20, 41),
//     new Princess('minora', 23, 40),
//     new Princess('minora', 21, 42),
//     new Princess('minora', 25, 37),
//     new Princess('minora', 19, 40),
//     new Princess('minora', 27, 43),
//     new Princess('minora', 18, 41),
//     new Princess('minora', 31, 41),
//     new Princess('minora', 29, 36),
// ];
//
// let prince = new Prince('Andolini',33,42);
//
// for (let i = 0; i <arrayPrincess.length ; i++) {
//      if (arrayPrincess[i].footSize === prince.findSneakers){
//          console.log(`name - ${arrayPrincess[i].name}`);
//          console.log(`age - ${arrayPrincess[i].age}`);
//          console.log(`footSize - ${arrayPrincess[i].footSize}`);
//      }
// }


// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

//
// function Princess(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.foootSize = footSize;
// }
//
//
// function Prince(name, age, footSizeFined) {
//     this.name = name;
//     this.age = age;
//     this.foootSizeFined = footSizeFined;
//
//     this.FinedSize = function (array) {
//         for (const arrayElement of array) {
//             if (this.foootSizeFined === arrayElement.foootSize) {
//                 console.log(`name - ${arrayElement.name} age - ${arrayElement.age} size - ${arrayElement.foootSize}`);
//             }
//         }
//     }
// }
//
// let arrayPrincess = [new Princess('minora', 23, 39),
//     new Princess('minora', 20, 41),
//     new Princess('minora', 23, 40),
//     new Princess('minora', 21, 42),
//     new Princess('minora', 25, 37),
//     new Princess('minora', 19, 40),
//     new Princess('minora', 27, 43),
//     new Princess('minora', 18, 41),
//     new Princess('minora', 31, 41),
//     new Princess('minora', 29, 36),
// ]
//
// let prince = new Prince('ivan',20,39);
// prince.FinedSize(arrayPrincess)
//

//
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


// function ConstructorArtibutes(nameArtibutes, descriptionArtibutes) {
//     this.name = nameArtibutes;
//     this.descriptionArtibutes = descriptionArtibutes;
// }
//
// function ConstructObj(name, description, artibutes) {
//     this.name = name;
//     this.description = description;
//     this.artibutes = artibutes;
// }


// let aAtr1 = new ConstructorArtibutes('accesskey', 'Активация ссылки с помощью комбинации клавиш.');
// let aAtr2 = new ConstructorArtibutes('href', 'Задает адрес документа, на который следует перейти.');
// let divAtr1 = new ConstructorArtibutes('align', 'Задает выравнивание содержимого тега <div>.');
// let divAtr2 = new ConstructorArtibutes('title', 'Определяет выравнивание заголовка.');
// let h1Atr1 = new ConstructorArtibutes('align', 'Задает адрес документа, на который следует перейти.');
// let h1Atr2 = new ConstructorArtibutes('Также для этого тега доступны универсальные атрибуты и события.', 'Также для этого тега доступны универсальные атрибуты и события.');
// let spanAtr1 = new ConstructorArtibutes('Для этого тега доступны универсальные атрибуты и события.', 'Для этого тега доступны универсальные атрибуты и события.');
// let spanAtr2 = new ConstructorArtibutes('Для этого тега доступны универсальные атрибуты и события.', 'Для этого тега доступны универсальные атрибуты и события.');
// let inputAtr1 = new ConstructorArtibutes('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
// let inputAtr2 = new ConstructorArtibutes('form', 'Связывает поле с формой по её идентификатору.');
// let formAtr1 = new ConstructorArtibutes('action', 'Адрес программы или документа, который обрабатывает данные формы.\n');
// let formAtr2 = new ConstructorArtibutes('enctype', 'Способ кодирования данных формы.');
// let optionAtr1 = new ConstructorArtibutes('disabled', 'Заблокировать для доступа элемент списка.\n');
// let optionAtr2 = new ConstructorArtibutes('label', 'Указание метки пункта списка.\n');
// let selectAtr1 = new ConstructorArtibutes('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.\n');
// let selectAtr2 = new ConstructorArtibutes('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.\n');
//
// let aAtr1Array = [aAtr1, aAtr2];
//
// let a = new ConstructObj('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', aAtr1Array);
// let div = new ConstructObj('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', [divAtr1, divAtr2]);
// let h1 = new ConstructObj('h1', 'Элемент h1', [h1Atr1, h1Atr2]);
// let span = new ConstructObj('span', 'Элемент span', [spanAtr1, spanAtr2]);
// let input = new ConstructObj('input', 'Элемент input', [inputAtr1, inputAtr2]);
// let form = new ConstructObj('form', 'Элемент form', [formAtr1, formAtr2]);
// let option = new ConstructObj('option', 'Элемент option', [optionAtr1, optionAtr2]);
// let select = new ConstructObj('select', 'Элемент select', [selectAtr1, selectAtr2]);
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);


// -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
// class ConstructorArtibutes{
//     constructor(nameArtibutes, descriptionArtibutes) {
//      this.nameArtibutes = nameArtibutes;
//      this.descriptionArtibutes = descriptionArtibutes;
//     }
// }
//
//
// class ConstructObj {
//     constructor(name, description, artibutes) {
//         this.name = name;
//         this.description = description;
//         this.artibutes = artibutes;
//     }
// }
//
// let aAtr1 = new ConstructorArtibutes('accesskey', 'Активация ссылки с помощью комбинации клавиш.');
// let aAtr2 = new ConstructorArtibutes('href', 'Задает адрес документа, на который следует перейти.');
// let divAtr1 = new ConstructorArtibutes('align', 'Задает выравнивание содержимого тега <div>.');
// let divAtr2 = new ConstructorArtibutes('title', 'Определяет выравнивание заголовка.');
// let h1Atr1 = new ConstructorArtibutes('align', 'Задает адрес документа, на который следует перейти.');
// let h1Atr2 = new ConstructorArtibutes('Также для этого тега доступны универсальные атрибуты и события.', 'Также для этого тега доступны универсальные атрибуты и события.');
// let spanAtr1 = new ConstructorArtibutes('Для этого тега доступны универсальные атрибуты и события.', 'Для этого тега доступны универсальные атрибуты и события.');
// let spanAtr2 = new ConstructorArtibutes('Для этого тега доступны универсальные атрибуты и события.', 'Для этого тега доступны универсальные атрибуты и события.');
// let inputAtr1 = new ConstructorArtibutes('accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.');
// let inputAtr2 = new ConstructorArtibutes('form', 'Связывает поле с формой по её идентификатору.');
// let formAtr1 = new ConstructorArtibutes('action', 'Адрес программы или документа, который обрабатывает данные формы.\n');
// let formAtr2 = new ConstructorArtibutes('enctype', 'Способ кодирования данных формы.');
// let optionAtr1 = new ConstructorArtibutes('disabled', 'Заблокировать для доступа элемент списка.\n');
// let optionAtr2 = new ConstructorArtibutes('label', 'Указание метки пункта списка.\n');
// let selectAtr1 = new ConstructorArtibutes('accesskey', 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.\n');
// let selectAtr2 = new ConstructorArtibutes('autofocus', 'Устанавливает, что список получает фокус после загрузки страницы.\n');
//
// let aAtr1Array = [aAtr1, aAtr2];
//
// let a = new ConstructObj('a', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', aAtr1Array);
// let div = new ConstructObj('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого', [divAtr1, divAtr2]);
// let h1 = new ConstructObj('h1', 'Элемент h1', [h1Atr1, h1Atr2]);
// let span = new ConstructObj('span', 'Элемент span', [spanAtr1, spanAtr2]);
// let input = new ConstructObj('input', 'Элемент input', [inputAtr1, inputAtr2]);
// let form = new ConstructObj('form', 'Элемент form', [formAtr1, formAtr2]);
// let option = new ConstructObj('option', 'Элемент option', [optionAtr1, optionAtr2]);
// let select = new ConstructObj('select', 'Элемент select', [selectAtr1, selectAtr2]);
//
// console.log(a);
// console.log(div);
// console.log(h1);
// console.log(span);
// console.log(input);
// console.log(form);
// console.log(option);
// console.log(select);
