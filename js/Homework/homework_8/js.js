// - Дана textarea.
//     В неё вводится текст.1
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

const formFirstTextArea = document.getElementById('formFirstTextArea');

formFirstTextArea.value = localStorage.getItem(formFirstTextArea.name)

formFirstTextArea.oninput = ({target: {name, value}}) => {
    localStorage.setItem(name, value);
}

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.


const formSecond = document.getElementById('formSecond');
const NamePropertyWithLocalStorage = 'formSecond';

if (!localStorage.getItem(NamePropertyWithLocalStorage)) {
    localStorage.setItem(NamePropertyWithLocalStorage, '{}')
}
let localStorageValue = JSON.parse(localStorage.getItem(NamePropertyWithLocalStorage));

for (const Element of formSecond) {
    for (const key in localStorageValue) {
        if (Element.name === key) {
            if ((Element.type === 'radio')) {
                (Element.value === localStorageValue[key]) ? Element.checked = true : Element.checked = false;
            } else {
                Element.value = localStorageValue[key];
            }
        }
    }
}


formSecond.oninput = (({target: {name, checked, value, type}}) => {
    let getLocalStorageInfo = JSON.parse(localStorage.getItem(NamePropertyWithLocalStorage));
    getLocalStorageInfo[name] = value;

    localStorage.setItem(NamePropertyWithLocalStorage, JSON.stringify(getLocalStorageInfo));
});


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

const thirdForm = document.getElementById('thirdForm');
const saveBtnForm = document.getElementById('saveBtn');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
const idTextArea = document.getElementById('textArea')
const nameFieldInLocalStorage = 'History'
let counter = -1;

if (!(localStorage.getItem(nameFieldInLocalStorage))) {
    localStorage.setItem(nameFieldInLocalStorage, '[]')
}


saveBtnForm.onclick = () => {
    let storage = JSON.parse(localStorage.getItem(nameFieldInLocalStorage));
    let informWithTextArea = idTextArea.value;
    storage.push(informWithTextArea)
    localStorage.setItem(nameFieldInLocalStorage, JSON.stringify(storage));
}

backBtn.onclick = () => {
    let storage = JSON.parse(localStorage.getItem(nameFieldInLocalStorage));
    counter--
    if (counter < 0) {
        counter = storage.length - 1
    }
    idTextArea.value = storage[counter];

}

forwardBtn.onclick = () => {
    let storage = JSON.parse(localStorage.getItem(nameFieldInLocalStorage));
    counter++
    if (counter > storage.length - 1) {
        counter = 0;
    }
    idTextArea.value = storage[counter];
}

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

const formNotebook = document.getElementById('form-info');
const formNotebookSaveBtn = document.getElementById('save');
const FORMFIELD = 'FORMFIELD';
let colectionDeleteBtn = document.querySelectorAll('[name = "delete"]');

if (!(localStorage.getItem(FORMFIELD))) {
    localStorage.setItem(FORMFIELD, '[]')
}

const localStorageObj = JSON.parse(localStorage.getItem(FORMFIELD));
for (const localStorageArray of localStorageObj) {
    const divInfo = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    deleteBtn.setAttribute('name', 'delete');
    removeBtn.setAttribute('name', 'remove');
    divInfo.innerText = JSON.stringify(localStorageArray);
    deleteBtn.innerText = 'delete';
    removeBtn.innerText = 'remove';

    divInfo.appendChild(deleteBtn)
    divInfo.appendChild(removeBtn)
    document.body.appendChild(divInfo);
    colectionDeleteBtn = document.querySelectorAll('[name = "delete"]');
}


formNotebookSaveBtn.onclick = () => {
    const obj = {};
    const arrayStorage = JSON.parse(localStorage.getItem(FORMFIELD));

    for (const formNotebookElement of formNotebook) {
        obj[formNotebookElement.name] = formNotebookElement.value;
    }
    arrayStorage.push(obj);
    localStorage.setItem(FORMFIELD, JSON.stringify(arrayStorage));


    const objInfo = JSON.parse(localStorage.getItem(FORMFIELD));

    const divInfo = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const removeBtn = document.createElement("button");
    deleteBtn.setAttribute('name', 'delete');
    divInfo.innerText = JSON.stringify(objInfo[(objInfo.length - 1)]);
    deleteBtn.innerText = 'delete';
    removeBtn.innerText = 'remove';

    divInfo.appendChild(deleteBtn);
    divInfo.appendChild(removeBtn);
    document.body.appendChild(divInfo);
    colectionDeleteBtn = document.querySelectorAll('[name = "delete"]');

    deleteInfo();

}

deleteInfo();


function deleteInfo(){
    for (let i = 0; i < colectionDeleteBtn.length; i++) {

        colectionDeleteBtn[i].onclick = (target) => {
            const arrayStorage = JSON.parse(localStorage.getItem(FORMFIELD));
            arrayStorage.splice(i, 1);
            localStorage.setItem(FORMFIELD, JSON.stringify(arrayStorage));
            target.path[1].remove();
        }
            colectionDeleteBtn = document.querySelectorAll('[name = "delete"]');

    }
}










