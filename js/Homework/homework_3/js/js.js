// - Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому.
//

// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// a) отримує текст з параграфа з id "content"

// let content = document.getElementById('content');
// console.log(content.innerText);
// let collectionOfP = document.getElementsByTagName('p');
// console.log(collectionOfP[0].innerHTML);
// let querySelectorallP = document.querySelectorAll('p');
// console.log(querySelectorallP[0].innerText);
// let querySelectorP = document.querySelector('p');
// console.log(querySelectorP.innerText);


// b) отримує текст з блоку з id "rules"

// let elementNodeListOfRuls = document.querySelectorAll('#rules');
// console.log(elementNodeListOfRuls[0].innerHTML);
// let tagNameDiv = document.getElementsByTagName('div');
// console.log(tagNameDiv[0].innerHTML);
// let tagNameRules = document.getElementById('rules');
// console.log(tagNameRules.innerHTML);
// let classNamefc = document.getElementsByClassName('fc');
// console.log(classNamefc[0].innerHTML);

// c) замініть текст параграфа з id 'content' на будь-який інший

// let byId = document.getElementById('content').innerText = 'WWW';

// d) замініть текст параграфа з id 'rules' на будь-який інший

// let byTagName = document.getElementsByTagName('div');
// byTagName[0].innerText = "www";

// e) змініть кожному елементу колір фону на червоний

// let changeColor = 'red';
// let elementById = document.getElementById('content');
// let elementsByTagNameDiv = document.getElementsByTagName('div');
// let elementsByTagNameUl = document.getElementsByTagName('ul');
// let elementsByClassName = document.getElementsByClassName('fc_rules');
//
// elementById.style.backgroundColor = changeColor;
//
// for (let i = 0; i < elementsByTagNameDiv.length; i++) {
//     elementsByTagNameDiv[i].style.backgroundColor = changeColor;
// }
// for (let i = 0; i < elementsByTagNameUl.length; i++) {
//     elementsByTagNameUl[i].style.backgroundColor = changeColor;
// }
// for (let i = 0; i < elementsByClassName.length; i++) {
//     elementsByClassName[i].style.backgroundColor = changeColor;
// }

// f) змініть кожному елементу колір тексту на синій

// let changeColor = 'blue';
// let elementById = document.getElementById('content');
// let elementsByTagNameDiv = document.getElementsByTagName('div');
// let elementsByTagNameUl = document.getElementsByTagName('ul');
// let elementsByClassName = document.getElementsByClassName('fc_rules');
//
// elementById.style.backgroundColor = changeColor;
//
// for (let i = 0; i < elementsByTagNameDiv.length; i++) {
//     elementsByTagNameDiv[i].style.backgroundColor = changeColor;
// }
// for (let i = 0; i < elementsByTagNameUl.length; i++) {
//     elementsByTagNameUl[i].style.backgroundColor = changeColor;
// }
// for (let i = 0; i < elementsByClassName.length; i++) {
//     elementsByClassName[i].style.backgroundColor = changeColor;
// }

// g) отримати весь список класів елемента з id=rules і вивести їх в console.log

// let elementIdRules = document.getElementById('rules');
// console.log(elementIdRules.className);

// h) отримати всі елементи з класом fc_rules

// let className = document.getElementsByClassName('fc_rules');
// for (const classNameElement of className) {
//       console.log(classNameElement);
// }

// i) поміняти колір тексту у всіх елементів fc_rules на червоний

// let className = document.getElementsByClassName('fc_rules');
//
// for (const classNameElement of className) {
//     classNameElement.style.color = 'red'
// }


// 2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Вставити цей блок на сторінку
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
// }];
//
// for (let i = 0; i < users.length; i++) {
//     let newElement = document.createElement('div');
//     newElement.innerText = `${users[i].name.toUpperCase()}`
//     document.body.appendChild(newElement);
// }


// 3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//     Блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
//     let divElementOuter = document.createElement('div');
//     let divElementInnerAddress = document.createElement('div');
//
//     divElementOuter.innerText = users[i].name.toUpperCase();
//     divElementInnerAddress.innerText = `address`;
//
//     for (const divElementInnerAddressKey in users[i].address) {
//         let divElementInnerAddressValue = document.createElement('div');
//
//         divElementInnerAddressValue.innerText = `${divElementInnerAddressKey} --- ${users[i].address[divElementInnerAddressKey]}`
//
//         divElementInnerAddress.appendChild(divElementInnerAddressValue);
//     }
//
//     document.body.appendChild(divElementOuter);
//     divElementOuter.appendChild(divElementInnerAddress);
//     divElementOuter.classList.add('beautiful')
// }

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//

// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)

// let elementByIdMain_header = document.getElementById('main_header');
// elementByIdMain_header.style.color = 'red';
// elementByIdMain_header.innerText = 'february-2021';

// b) робить шириниу елементу ul 400px

// let byTagNameUl = document.getElementsByTagName('ul');
// byTagNameUl[0].style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%

// let elementsByClassNameLinkList = document.getElementsByClassName('linkList');
// for (let i = 0; i < elementsByClassNameLinkList.length; i++) {
//       elementsByClassNameLinkList[i].style.width = '50%'
// }

// d) отримує текст який зберігається в елементі з класом listElement2

// document.getElementsByClassName('listElement2')[0].innerHTML = '<a href="#">www</a>'

// e) отримує всі елементи li та змінює ім колір фону на сірий

// let tagNameLi = document.getElementsByTagName('li');
// for (const tagNameLiElement of tagNameLi) {
//      tagNameLiElement.style.backgroundColor = 'silver'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor

// let byTagNameLink = document.getElementsByTagName('a');
//
// for (const byTagNameLinkElement of byTagNameLink) {
//     byTagNameLinkElement.classList.add('anchor');
// }

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let htmlCollectionOfA = document.getElementsByTagName('a');
//
// for (const htmlCollectionOfAElement of htmlCollectionOfA) {
//       if (htmlCollectionOfAElement.innerText == 'link3'){
//           htmlCollectionOfAElement.style.fontSize = '40px'
//       }
// }

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let htmlCollectionOfLinks = document.getElementsByTagName('a');
// for (const htmlCollectionOfLink of htmlCollectionOfLinks) {
//     htmlCollectionOfLink.classList.add(`element_${htmlCollectionOfLink.innerText}`)
// }

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let promptBackground = prompt('Enter Background','red');
// let elementsByClassName = document.getElementsByClassName('sub-header');
// for (const elementsByClassNameElement of elementsByClassName) {
//     elementsByClassNameElement.style.backgroundColor = promptBackground;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let collectionofSubHeader = document.getElementsByClassName('sub-header');
// for (const collectionofSubHeaderElement of collectionofSubHeader) {
//     if (collectionofSubHeaderElement.innerText === 'content 2 segment') {
//         collectionofSubHeaderElement.style.color = prompt("Enter color  text");
//     }
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let byClassNameContent1 = document.getElementsByClassName('linkList');
//
// byClassNameContent1[0].innerHTML = prompt('');

// l) отримати елементи p та змінити їм padding на 20px

// let tagNameP = document.getElementsByTagName('p');
//
// for (const tagNamePElement of tagNameP) {
//      tagNamePElement.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let collectionOfText2 = document.getElementsByClassName('text2');
//
// for (const collectionOfText2Element of collectionOfText2) {
//     collectionOfText2Element.innerText = 'feb-2021'
// }

//
// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     }
// ];

// 2) Є масив котрий характеризує правила.
//     Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html

// for (let i = 0; i < rules.length; i++) {
//     let htmlDivElementGlobalOuter = document.createElement('div');
//     let htmlDivElementInnerRules = document.createElement('h2');
//     let htmlDivElementInnerText = document.createElement('p');
//
//
//     htmlDivElementInnerRules.innerText = `${rules[i].title}`
//     htmlDivElementInnerText.innerText = `${rules[i].body}`
//
//
//     document.body.appendChild(htmlDivElementGlobalOuter);
//     htmlDivElementGlobalOuter.appendChild(htmlDivElementInnerRules);
//     htmlDivElementGlobalOuter.appendChild(htmlDivElementInnerText);
// }
// ===========================================================================
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
//
// let usersWithCities = [];

// for (let i = 0; i < usersWithId.length; i++) {
//     for (let j = 0; j <citiesWithId.length ; j++) {
//         if(usersWithId[i].id == citiesWithId[j].user_id){
//             usersWithCities.push({});
//             usersWithCities[i].id = usersWithId[i].id;
//             usersWithCities[i].name = usersWithId[i].name;
//             usersWithCities[i].age = usersWithId[i].age;
//             usersWithCities[i].status = usersWithId[i].status;
//             usersWithCities[i].adress = {};
//
//             usersWithCities[i].adress.user_id = usersWithId[i].id;
//             usersWithCities[i].adress.country = citiesWithId[j].country;
//             usersWithCities[i].adress.city = citiesWithId[j].city;
//         }
//     }
// }
//
//
// console.log(usersWithCities);





let userWithAddres = [];
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if (user.id === city.user_id) {
            user.address = city;
            userWithAddres.push(user);
        }
    }
}
console.log(userWithAddres);





