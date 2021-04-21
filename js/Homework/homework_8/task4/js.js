// - Дана textarea.
//     В неё вводится текст.1
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
//
// const textArea = document.getElementById('textAr');
//
// textArea.value = localStorage.getItem('valueTextArea');
// textArea.oninput = () => {
//     localStorage.setItem('valueTextArea', textArea.value);
// }
//.....................................................................................2
// const textArea = document.getElementById('textAr');
// const INPUT = 'input';
//
// textArea.value = localStorage.getItem(INPUT);
//
// textArea.onchange = ({target:{value}}) =>{
//     localStorage.setItem(INPUT,value)
// }





// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.

//
// const forms = document.forms[0];
// const recordElementsValues = forms.querySelectorAll('input, textarea');
//
// for (const recordElementsValue of recordElementsValues) {
//     if (recordElementsValue.type === 'text' || recordElementsValue.type === 'textarea') {
//         recordElementsValue.value = localStorage.getItem(recordElementsValue.name)
//     }
//     if (recordElementsValue.type === 'radio') {
//         (recordElementsValue.value === localStorage.getItem(recordElementsValue.name)) ? recordElementsValue.checked = true : recordElementsValue.checked = false;
//     }
//     if (recordElementsValue.type === 'checkbox') {
//         if(!(localStorage.getItem(recordElementsValue.name) === null)){
//         recordElementsValue.checked = !(localStorage.getItem(recordElementsValue.name) == 'false');
//         }
//     }
// }
//
// for (const formsElement of forms) {
//     formsElement.onchange = (ev) => {
//         if (formsElement.type === 'text' || formsElement.type === 'textarea') {
//             localStorage.setItem(formsElement.name, formsElement.value);
//         }
//         if (formsElement.type === 'radio') {
//             localStorage.setItem(formsElement.name, formsElement.value);
//         }
//         if (formsElement.type === 'checkbox') {
//                 localStorage.setItem(formsElement.name, formsElement.checked);
//         }
//     }
// }









// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
//
//////////////////////////////////////////////////////////// Перша тренувальна версія
// const textArea = document.getElementById('textArea');
// const saveButton = document.getElementById('save');
// const forwardButton = document.getElementById('forward');
// const backButton = document.getElementById('back');
//
// saveButton.onclick = (ev) => {
//     if (!(localStorage.getItem('counter'))) {
//         localStorage.setItem('counter', '0');
//         localStorage.setItem('counterButton', '0');
//     }
//     let cou = +localStorage.getItem('counter');
//     let counterButton = +localStorage.getItem('counterButton');
//     cou++;
//     counterButton++;
//     localStorage.setItem('counter',cou);
//     localStorage.setItem('counterButton',counterButton);
//     localStorage.setItem(`textVersion${cou}`,textArea.value);
// }
//
// backButton.onclick = () =>{
//     let counterBtn = localStorage.getItem('counterButton');
//     counterBtn -= 1;
//     if(( counterBtn - 0) > 0){
//         textArea.value = localStorage.getItem(`textVersion${counterBtn}`);
//         localStorage.setItem('counterButton',counterBtn)
//     }else{
//         console.log('This last save');
//     }
//
// }
// forwardButton.onclick = () => {
//     let counterBtn = +localStorage.getItem('counterButton');
//     counterBtn += 1;
//     if(+localStorage.getItem('counter') >= counterBtn){
//         textArea.value = localStorage.getItem(`textVersion${counterBtn}`);
//         localStorage.setItem('counterButton',counterBtn)
//     }else{
//         console.log('This latest save');
//     }
// }







// Другу удосконалена розявязок з відео
// const textArea = document.getElementById('textArea');
// const saveButton = document.getElementById('save');
// const forwardButton = document.getElementById('forward');
// const backButton = document.getElementById('back');
// const INPUT = 'INPUT';
// let counter = 0;
//
// if (!localStorage.getItem(INPUT)) {
//     localStorage.setItem(INPUT, '[]');
// }else {
//     const db = JSON.parse(localStorage.getItem(INPUT));
//     counter = db.length-1
//     textArea.value = db[counter];
// }
//
// saveButton.onclick = ({target}) => {
//     const data = textArea.value;
//     const db = JSON.parse(localStorage.getItem(INPUT))
//     db.push(data)
//     localStorage.setItem(INPUT, JSON.stringify(db))
//     counter++
// }
//
// backButton.onclick = () => {
//     const db = JSON.parse(localStorage.getItem(INPUT))
//     if (counter - 1 >= 0) {
//       counter--
//     }else {
//         counter = db.length - 1;
//     }
//       textArea.value = db[counter];
// }
//
// forwardButton.onclick = () => {
//     const db = JSON.parse(localStorage.getItem(INPUT))
//     if (counter + 1 < db.length) {
//     counter++
//     }else {
//         counter = 0;
//     }
//     textArea.value = db[counter];
// }














// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта


const form = document.getElementById('form-info');
const saveBtn = document.getElementById('save');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
let deleteBTN = document.getElementById('delete');
let remove = document.getElementById('remove');

const PERSON = 'person'
let objInform = {};
let counter = -1;


if (!localStorage.getItem(PERSON)) {
    localStorage.setItem(PERSON, '[]');
} else {
    console.log('reload...');
}

form.oninput = ({target: {value, name}}) => {
    objInform[name] = value;
}

saveBtn.onclick = () => {
    let getPersonArray = JSON.parse(localStorage.getItem(PERSON));
    getPersonArray.push(objInform);
    localStorage.setItem(PERSON, JSON.stringify(getPersonArray));
    counter++
}

backBtn.onclick = () => {
    let getPersonArray = JSON.parse(localStorage.getItem(PERSON));
    counter--;
    if (!(counter >= 0)) {
        counter = getPersonArray.length - 1
    }
    for (const formInput of form) {
        for (const formInputKey in getPersonArray[counter]) {
            if (formInput.name === formInputKey) {
                formInput.value = getPersonArray[counter][formInputKey];
            }
        }
    }
}

forwardBtn.onclick = () => {
    let getPersonArray = JSON.parse(localStorage.getItem(PERSON));
    counter++;
    if (!(counter <= getPersonArray.length - 1)) {
        counter = 0;
    }

    for (const formInput of form) {
        for (const formInputKey in getPersonArray[counter]) {
            if (formInput.name === formInputKey) {
                formInput.value = getPersonArray[counter][formInputKey];
            }
        }
    }
}

deleteBTN.onclick = () => {
    let getPersonArray = JSON.parse(localStorage.getItem(PERSON));
    getPersonArray.splice(counter, 1);
    localStorage.setItem(PERSON, JSON.stringify(getPersonArray));


    if (getPersonArray.length === 0) {
        for (const formItem of form) {
            formItem.value = '';
        }
    }

    for (const formInput of form) {
        for (const formInputKey in getPersonArray[counter]) {
            if (formInput.name === formInputKey) {
                formInput.value = getPersonArray[counter][formInputKey];
            }
        }
    }
}
remove.onclick = () => {
    let getPersonArray = JSON.parse(localStorage.getItem(PERSON));
    let removeObj = {};
    for (const formValue of form) {
        removeObj[formValue.name] = formValue.value;
    }
    getPersonArray[counter] =  removeObj;
    localStorage.setItem(PERSON,JSON.stringify(getPersonArray));
}


















