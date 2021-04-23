``// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
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


















