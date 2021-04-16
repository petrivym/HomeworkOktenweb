// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".

// let IdButtonHidden = document.getElementById('hidden');
// let IdDivText = document.getElementById('text');

// IdButtonHidden.onclick = () => {
//     IdDivText.style.visibility = 'hidden';
// }
//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.

// let IdButtonHidden = document.getElementById('hidden');

// IdButtonHidden.onclick = () => {
//     IdButtonHidden.style.visibility = 'hidden';
// }
// function hidden(){
//     this.style.visibility = 'hidden';
// }
//
// IdButtonHidden.onclick = hidden;

// - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача

// let idButtonAge = document.getElementById('enterAge');
// let collectionsInputs = document.getElementsByTagName('input');
//
// idButtonAge.onclick = () => {
//     const age = +collectionsInputs[0].value;
//     (age > 18 ) ?  console.log('OK') : console.log('good bye');
// }

// - Створіть меню, яке розгортається/згортається при клику

// let buttonHidVis = document.getElementById('hiddenMenu');
// let tagNameUl = document.getElementsByTagName('ul');

// buttonHidVis.onclick = () => {
//     (tagNameUl[0].style.display === 'block') ? tagNameUl[0].style.display = 'none' : tagNameUl[0].style.display = 'block';
// }

// let flag  = true;
// buttonHidVis.onclick = () => {
//   tagNameUl[0].style.display =  (flag) ? 'none' : 'block';
//   flag = !flag;
// }

// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
// let articles = [{
//     title: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// },{
//     title: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// },{
//     title: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// },{
//     title: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// },{
//     title: 'lorem',
//     body: 'lorem ipsum dolo sit ameti'
// }];


// for (const article of articles) {
//     let divGlobalArticles = document.createElement('div');
//     let divTitle = document.createElement('div');
//     let divBody = document.createElement('div');
//     let buttonElement = document.createElement('button');
//
//     divTitle.innerText = article['title'];
//     divBody.innerText = article['body'];
//     buttonElement.innerText = ' deploy body article';
//
//     buttonElement.onclick = (ev) => {
//        divBody.hidden = !divBody.hidden;
//     }
//
//     document.body.appendChild(divGlobalArticles);
//     divGlobalArticles.appendChild(divTitle);
//     divGlobalArticles.appendChild(divBody);
//     divGlobalArticles.appendChild(buttonElement);
// }
// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

// let buttonSaveData = document.getElementById('saveData');
// buttonSaveData.onclick =() => {
//    let myForms = document.forms;
//     for (const item of myForms) {
//         for (const itemValue of item) {
//             console.log(itemValue.value);
//         }
//     }
//
// }
// let buttonSaveData = document.getElementById('saveData');
// buttonSaveData.onclick =() =>{
//
//     let firstForm = document.forms.firstForm;
//     let secondForm = document.forms.secondForm;
//
//     console.log(firstForm.firsName.value);
//     console.log(firstForm.lastName.value);
//     console.log(secondForm.age.value);
//     console.log(secondForm.city.value);
// }
// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

// function  creatTable(tr,td,appendElement) {
//
//     let tableElement = document.createElement('table');
//     for (let i = 0; i < tr; i++) {
//         let tdElement = document.createElement('td');
//
//         for (let j = 0; j < td; j++) {
//             let trElement = document.createElement('tr');
//             trElement.innerText = `${i} : ${j}`;
//             tdElement.appendChild(trElement);
//         }
//         tableElement.appendChild(tdElement);
//     }
//     document.getElementById(appendElement).append(tableElement);
// }
//
// creatTable(10,10,'tableId');


// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.

// const imgArray = [
//     {
//         alt: 'cat1',
//         url: 'carusel/img1.jpeg'
//     },
//     {
//         alt: 'cat2',
//         url: 'carusel/img2.jpeg'
//     },
//     {
//         alt: 'cat3',
//         url: 'carusel/img3.jpg'
//     }];
//
// let rightBtn = document.getElementById('right');
// let leftBtn = document.getElementById('left');
// let imgElement = document.getElementById('img');
//
// let flag = 0;
//
// rightBtn.onclick= () => {
//     if(flag < imgArray.length - 1){
//         flag++
//         imgElement.src = imgArray[flag].url;
//     }else {
//         flag = 0;
//         imgElement.src = imgArray[flag].url;
//     }
// }
//
// leftBtn.onclick = () => {
//     if(flag > 0){
//         flag--;
//         imgElement.src = imgArray[flag].url;
//     }else {
//         flag = imgArray.length - 1;
//         imgElement.src = imgArray[flag].url
//     }
// }


//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

// const lay = ['А я ебу',
//     'Без пиздежа',
//     'Без пизды',
//     'Бля',
//     'Бля буду',
//     'Блядина',
//     'Блядистка',
//     'Блядища',
//     'Блядки',
//     'Блядовать',
//     'Блядовитый',
//     'Блядовозка',
//     'Блядский',
//     'Блядство',
//     'Блядствовать',
//     'Блядун',
//     'Блядь',
//     'Блядюга',
//     'Блядюган',
//     'Бляха муха',
//     'В ахуе',
//     'Вздрючить',
//     'Взъебать',
//     'Вот блядь!',
//     'В пизду',
//     'Въебать',
//     'Выблядок',
//     'Выебанный',
//     'Выебать',
//     'Выебины',
//     'Выебнуться',
//     'Выебоны',
//     'Выебосы',
//     'Выёбисто',
//     'Выёбистый',
//     'Выёбываться',
//     'Глухуеватый',
//     'Говно',
//     'Говнюк',
//     'Гондон',
//     'Доёбывать',
//     'Долбоёб',
//     'Допиздеться',
//     'До пизды',
//     'До святого проеба',
//     'До хуя',
//     'Дрочилка',
//     'Дрочить',
//     'Дрочун',
//     'Ебала жаба гадюку',
//     'Ебало',
//     'Ебальник',
//     'Ебандей',
//     'Ебанутый',
//     'Ебануть',
//     'Ебануться',
//     'Ебать',
//     'Ебать-ебать',
//     'Ебать-копать',
//     'Ебаться',
//     'Ебать ту Люську',
//     'Ебать-тарахтеть',
//     'Ебеныть',
//     'Ебиздить',
//     'Ебись ты злоебучим проебом',
//     'Ебическая',
//     'Еблысь',
//     'Ебля',
//     'Ебловать',
//     'Еблом торговать',
//     'Ебстись',
//     'Ебуня',
//     'Ебучий',
//     'Ёбан(н)ый в рот',
//     'Ёбарь',
//     'Ёби-ёби',
//     'Ёбнутый',
//     'Ёбнуться',
//     'Ёб твою мать',
//     'Жопа',
//     'Заебать',
//     'Заебаться',
//     'Заебись',
//     'Заёб',
//     'Заёбанный',
//     'Залупа',
//     'Залупиться',
//     'Запиздячить',
//     'Захуярить',
//     'Злоебучий',
//     'Злопидар',
//     'Какого хуя',
//     'Как хуем',
//     'К ебеням',
//     'Клара Целкин',
//     'Колдоёбины',
//     'Кончать',
//     'Конченный',
//     'Курва',
//     'Лярва',
//     'Мозги ебать',
//     'Мозгоёб',
//     'Мудак',
//     'Мудило',
//     'Мудозвон',
//     'Мудопоёбище',
//     'Наебать',
//     'Наебнуть',
//     'Наёбка',
//     'Наёбник',
//     'Наперепиздяй',
//     'Напидарасить ботинки',
//     'Напиздеть',
//     'Нахуй',
//     'Нахуя?',
//     'Нахуяриться',
//     'Невъебезно',
//     'Не ебите мне мозги',
//     'Нездоровая хуйня',
//     'Не пиздеть была команда',
//     'Нехуёвый',
//     'Нехуй – нічого',
//     'Ни в пизду, ни в Красную Армию',
//     'Ни с хуя',
//     'Объебать',
//     'Однохуйственный',
//     'Опизденение',
//     'Остоебенить',
//     'Остоебеть',
//     'Отпиздить',
//     'Отпиздохать',
//     'Отхуярить',
//     'Отъебать',
//     'Отъебаться',
//     'Охуение',
//     'Охуенно',
//     'Охуенный',
//     'Охуеть',
//     'Охуйный',
//     'Педрило',
//     'Переебать',
//     'Пидар',
//     'Пидарас',
//     'Пидарасить',
//     'Пидарастический',
//     'Пизда',
//     'Пизданутый',
//     'Пиздануть',
//     'Пиздарики',
//     'Пизда рулям',
//     'Пиздатый',
//     'Пиздень',
//     'Пиздеть',
//     'Пиздец',
//     'Пиздец на холодец',
//     'Пиздец подкрался незаметно',
//     'Пиздёж',
//     'Пиздилка',
//     'Пиздить',
//     'Пиздиться',
//     'Пиздишь',
//     'Пиздливый',
//     'Пиздоблядский',
//     'Пиздобол',
//     'Пиздобратия',
//     'Пиздоватизм',
//     'Пиздоватый',
//     'Пиздовать',
//     'Пиздожадность',
//     'Пиздозавр',
//     'Пиздой накрыться',
//     'Пиздопротивный',
//     'Пиздотня',
//     'Пиздрон',
//     'Пиздун',
//     'Пиздун твоя фамилия',
//     'Пиздык',
//     'Пиздыкнуться',
//     'Пиздюк',
//     'Пиздюлей дать',
//     'Пиздюлина',
//     'Пиздячить',
//     'Поблядушка',
//     'Подпёздывать',
//     'Подъёб',
//     'Подъёбщик',
//     'Подъёбывать',
//     'Поебать',
//     'Поебеньщик',
//     'Поебень',
//     'Поеботина',
//     'Попиздеть',
//     'Попиздить',
//     'Попизженный',
//     'Похуист',
//     'Похуистический',
//     'Похуй',
//     'По хую',
//     'Приебаться',
//     'Припиздяч(ш)ить',
//     'Припизженный',
//     'Проблядь',
//     'Проебать',
//     'Проебом',
//     'Пропиздон',
//     'Разбляду ж твою мать',
//     'Разъебать',
//     'Разъебошить',
//     'Разъёбанный',
//     'Распиздеть',
//     'Распиздеться',
//     'Распиздяй',
//     'Распоебаться',
//     'Расхуярить',
//     'Семихуй',
//     'Скосопиздить',
//     'Скурвиться',
//     'Смехуёчки',
//     'Спиздеть',
//     'Спиздить',
//     'Сука',
//     'Съебаться',
//     'Съебнуть',
//     'Триебущий',
//     'Тристапиздоблядоящер',
//     'Уебать',
//     'Уёбище',
//     'Уёбок',
//     'Уёбывать',
//     'Уёбен зи биттэ',
//     'Упиздень',
//     'Упиздить',
//     'Упиздюхать',
//     'Ухуярить',
//     'Ухты',
//     'Фак ю',
//     'Хитровыебанный',
//     'Хуева гора',
//     'Хуеплёт',
//     'Хуесос',
//     'Хуетень',
//     'Хуеть',
//     'Хуёвина',
//     'Хуёво',
//     'Хуёвый',
//     'Хуиный',
//     'Хуи пинать',
//     'Хуй',
//     'Хуй его',
//     'Хуйло',
//     'Хуй на',
//     'Хуй на ны',
//     'Хуй на палочке',
//     'Хуйнёй страдать',
//     'Хуйнуть',
//     'Хуйня',
//     'Хуй там',
//     'Хуюшки',
//     'Хуя',
//     'Хуяк',
//     'Хуярить',
//     'Хуячить',
//     'Целка',
//     'Целка',
//     'ЦПХ',
//     'Центральное пиздохранилище',
//     'Чмо',
//     'Чмошный',
//     'Что за нахуй',
//     'Шароёбиться'];

// let inputText = document.getElementById('inputTypeText');
// let buttonLay = document.getElementById('buttonLay');
// //
// buttonLay.onclick = () => {
//     let result = true;
//     let inputValue = inputText.value.toUpperCase();
//     for (const inputValueElement of lay) {
//         if(inputValueElement.toUpperCase() === inputValue){
//             result = false;
//         }
//     }
//     console.log(result);
// }
//

// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку


// const lay = ['А я ебу',
//     'Без пиздежа',
//     'Без пизды',
//     'Бля',
//     'Бля буду',
//     'Блядина',
//     'Блядистка',
//     'Блядища',
//     'Блядки',
//     'Блядовать',
//     'Блядовитый',
//     'Блядовозка',
//     'Блядский',
//     'Блядство',
//     'Блядствовать',
//     'Блядун',
//     'Блядь',
//     'Блядюга',
//     'Блядюган',
//     'Бляха муха',
//     'В ахуе',
//     'Вздрючить',
//     'Взъебать',
//     'Вот блядь!',
//     'В пизду',
//     'Въебать',
//     'Выблядок',
//     'Выебанный',
//     'Выебать',
//     'Выебины',
//     'Выебнуться',
//     'Выебоны',
//     'Выебосы',
//     'Выёбисто',
//     'Выёбистый',
//     'Выёбываться',
//     'Глухуеватый',
//     'Говно',
//     'Говнюк',
//     'Гондон',
//     'Доёбывать',
//     'Долбоёб',
//     'Допиздеться',
//     'До пизды',
//     'До святого проеба',
//     'До хуя',
//     'Дрочилка',
//     'Дрочить',
//     'Дрочун',
//     'Ебала жаба гадюку',
//     'Ебало',
//     'Ебальник',
//     'Ебандей',
//     'Ебанутый',
//     'Ебануть',
//     'Ебануться',
//     'Ебать',
//     'Ебать-ебать',
//     'Ебать-копать',
//     'Ебаться',
//     'Ебать ту Люську',
//     'Ебать-тарахтеть',
//     'Ебеныть',
//     'Ебиздить',
//     'Ебись ты злоебучим проебом',
//     'Ебическая',
//     'Еблысь',
//     'Ебля',
//     'Ебловать',
//     'Еблом торговать',
//     'Ебстись',
//     'Ебуня',
//     'Ебучий',
//     'Ёбан(н)ый в рот',
//     'Ёбарь',
//     'Ёби-ёби',
//     'Ёбнутый',
//     'Ёбнуться',
//     'Ёб твою мать',
//     'Жопа',
//     'Заебать',
//     'Заебаться',
//     'Заебись',
//     'Заёб',
//     'Заёбанный',
//     'Залупа',
//     'Залупиться',
//     'Запиздячить',
//     'Захуярить',
//     'Злоебучий',
//     'Злопидар',
//     'Какого хуя',
//     'Как хуем',
//     'К ебеням',
//     'Клара Целкин',
//     'Колдоёбины',
//     'Кончать',
//     'Конченный',
//     'Курва',
//     'Лярва',
//     'Мозги ебать',
//     'Мозгоёб',
//     'Мудак',
//     'Мудило',
//     'Мудозвон',
//     'Мудопоёбище',
//     'Наебать',
//     'Наебнуть',
//     'Наёбка',
//     'Наёбник',
//     'Наперепиздяй',
//     'Напидарасить ботинки',
//     'Напиздеть',
//     'Нахуй',
//     'Нахуя?',
//     'Нахуяриться',
//     'Невъебезно',
//     'Не ебите мне мозги',
//     'Нездоровая хуйня',
//     'Не пиздеть была команда',
//     'Нехуёвый',
//     'Нехуй – нічого',
//     'Ни в пизду, ни в Красную Армию',
//     'Ни с хуя',
//     'Объебать',
//     'Однохуйственный',
//     'Опизденение',
//     'Остоебенить',
//     'Остоебеть',
//     'Отпиздить',
//     'Отпиздохать',
//     'Отхуярить',
//     'Отъебать',
//     'Отъебаться',
//     'Охуение',
//     'Охуенно',
//     'Охуенный',
//     'Охуеть',
//     'Охуйный',
//     'Педрило',
//     'Переебать',
//     'Пидар',
//     'Пидарас',
//     'Пидарасить',
//     'Пидарастический',
//     'Пизда',
//     'Пизданутый',
//     'Пиздануть',
//     'Пиздарики',
//     'Пизда рулям',
//     'Пиздатый',
//     'Пиздень',
//     'Пиздеть',
//     'Пиздец',
//     'Пиздец на холодец',
//     'Пиздец подкрался незаметно',
//     'Пиздёж',
//     'Пиздилка',
//     'Пиздить',
//     'Пиздиться',
//     'Пиздишь',
//     'Пиздливый',
//     'Пиздоблядский',
//     'Пиздобол',
//     'Пиздобратия',
//     'Пиздоватизм',
//     'Пиздоватый',
//     'Пиздовать',
//     'Пиздожадность',
//     'Пиздозавр',
//     'Пиздой накрыться',
//     'Пиздопротивный',
//     'Пиздотня',
//     'Пиздрон',
//     'Пиздун',
//     'Пиздун твоя фамилия',
//     'Пиздык',
//     'Пиздыкнуться',
//     'Пиздюк',
//     'Пиздюлей дать',
//     'Пиздюлина',
//     'Пиздячить',
//     'Поблядушка',
//     'Подпёздывать',
//     'Подъёб',
//     'Подъёбщик',
//     'Подъёбывать',
//     'Поебать',
//     'Поебеньщик',
//     'Поебень',
//     'Поеботина',
//     'Попиздеть',
//     'Попиздить',
//     'Попизженный',
//     'Похуист',
//     'Похуистический',
//     'Похуй',
//     'По хую',
//     'Приебаться',
//     'Припиздяч(ш)ить',
//     'Припизженный',
//     'Проблядь',
//     'Проебать',
//     'Проебом',
//     'Пропиздон',
//     'Разбляду ж твою мать',
//     'Разъебать',
//     'Разъебошить',
//     'Разъёбанный',
//     'Распиздеть',
//     'Распиздеться',
//     'Распиздяй',
//     'Распоебаться',
//     'Расхуярить',
//     'Семихуй',
//     'Скосопиздить',
//     'Скурвиться',
//     'Смехуёчки',
//     'Спиздеть',
//     'Спиздить',
//     'Сука',
//     'Съебаться',
//     'Съебнуть',
//     'Триебущий',
//     'Тристапиздоблядоящер',
//     'Уебать',
//     'Уёбище',
//     'Уёбок',
//     'Уёбывать',
//     'Уёбен зи биттэ',
//     'Упиздень',
//     'Упиздить',
//     'Упиздюхать',
//     'Ухуярить',
//     'Ухты',
//     'Фак ю',
//     'Хитровыебанный',
//     'Хуева гора',
//     'Хуеплёт',
//     'Хуесос',
//     'Хуетень',
//     'Хуеть',
//     'Хуёвина',
//     'Хуёво',
//     'Хуёвый',
//     'Хуиный',
//     'Хуи пинать',
//     'Хуй',
//     'Хуй его',
//     'Хуйло',
//     'Хуй на',
//     'Хуй на ны',
//     'Хуй на палочке',
//     'Хуйнёй страдать',
//     'Хуйнуть',
//     'Хуйня',
//     'Хуй там',
//     'Хуюшки',
//     'Хуя',
//     'Хуяк',
//     'Хуярить',
//     'Хуячить',
//     'Целка',
//     'Целка',
//     'ЦПХ',
//     'Центральное пиздохранилище',
//     'Чмо',
//     'Чмошный',
//     'Что за нахуй',
//     'Шароёбиться'];

// let inputText = document.getElementById('inputTypeText');
// let buttonLay = document.getElementById('buttonLay');
//
// buttonLay.onclick = () => {
//     let result = true;
//     let inputValue = inputText.value.split(' ').map((elem) => elem.toUpperCase());
//
//  console.log(inputValue);
//
//         for (let i = 0; i < inputValue.length; i++) {
//           for (const bedWord of lay) {
//             if (bedWord.toUpperCase() === inputValue[i]) {
//                 result = false;
//             }
//         }
//     }
// if (result){
//     console.log('ok');
// }else {
//     console.log('lay');
// }
//
// }


// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
//     При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті

// let nodListTitle = document.querySelectorAll('h2');
// let divMenu = document.createElement('div');
// divMenu.classList.add('menu');
// let contentElem = document.getElementById('content');
//
//
// let flag = 1;
// for (const nodListTitleElement of nodListTitle) {
//     nodListTitleElement.id = `titleId${flag}`;
//     let menuItem = document.createElement('a');
//     menuItem.innerText = nodListTitleElement.innerText;
//     menuItem.href = `#titleId${flag}`;
//     divMenu.appendChild(menuItem);
//     flag++;
// }
// contentElem.appendChild(divMenu);


// -- Взяти масив юзерів
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ


// -Creat all Elements

// let containerInput = document.createElement('div');
//
// let inputStatus = document.createElement('input');
// let inputOld = document.createElement('input');
// let inputCity = document.createElement('input');
//
// let inputStatusText = document.createElement('p');
// let inputOldText = document.createElement('p');
// let inputCityText = document.createElement('p');
//
//
// let Result = document.createElement('div');
//
//
// // Add attributes
// containerInput.classList.add('containerInput')
// inputStatusText.innerText = 'відфільтровує юзерів зі статусом false (залишає зі статусом false)';
// inputOldText.innerText = 'залишає старших 29 років включно';
// inputCityText.innerText = 'залишає тих в кого місто Київ';
//
// inputStatus.type = 'checkbox';
// inputOld.type = 'checkbox';
// inputCity.type = 'checkbox';
//
// inputStatus.value = '1';
// inputOld.value = '2';
// inputCity.value = '3';
//
//
// //appendChild Elements
// document.body.appendChild(containerInput);
// containerInput.appendChild(inputStatus);
// containerInput.appendChild(inputStatusText);
// containerInput.appendChild(inputOld);
// containerInput.appendChild(inputOldText);
// containerInput.appendChild(inputCity);
// containerInput.appendChild(inputCityText);
// document.body.appendChild(Result)
//
//
// // Creat events  and show results Array.
// // /Калхозний варіант
//
//
// let allInput = document.querySelectorAll('input');
//
// let result = usersWithAddress.flat(2);
// for (const allInputElement of allInput) {
//     allInputElement.onclick = () => {
//         switch (allInputElement.value) {
//             case '1':
//                 result = result.filter((el) => !(el.isMarried));
//                 break;
//             case '2':
//                 result = result.filter((el) => el.age > 29);
//                 break;
//             case '3':
//                 result = result.filter(function (el) {
//                     let {city} = el.address
//                     if (city === 'Kyiv') {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 });
//                 break;
//         }
//         let flag = document.getElementById('display')
//         if (flag) {
//             flag.remove();
//         }
//         let display = document.createElement('div');
//               display.setAttribute('id', 'display');
//         document.body.appendChild(display);
//
//         for (const item of result) {
//             let divFilter = document.createElement('div');
//             let {id, name, age, isMarried, address: {city}} = item;
//             divFilter.innerHTML = `id:${id},name:${name},age:${age},isMarried:${isMarried},city:${city},`
//             console.log(item);
//             display.appendChild(divFilter);
//         }
//     }
// }












