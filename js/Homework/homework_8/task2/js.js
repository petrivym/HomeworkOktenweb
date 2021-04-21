// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
//     Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
//     Сделайте ваш скрипт как можно более универсальным.


const forms = document.forms[0];
const recordElementsValues = forms.querySelectorAll('input, textarea');

for (const recordElementsValue of recordElementsValues) {
    if (recordElementsValue.type === 'text' || recordElementsValue.type === 'textarea') {
        recordElementsValue.value = localStorage.getItem(recordElementsValue.name)
    }
    if (recordElementsValue.type === 'radio') {
        (recordElementsValue.value === localStorage.getItem(recordElementsValue.name)) ? recordElementsValue.checked = true : recordElementsValue.checked = false;
    }
    if (recordElementsValue.type === 'checkbox') {
        if(!(localStorage.getItem(recordElementsValue.name) === null)){
        recordElementsValue.checked = !(localStorage.getItem(recordElementsValue.name) == 'false');
        }
    }
}

for (const formsElement of forms) {
    formsElement.onchange = (ev) => {
        if (formsElement.type === 'text' || formsElement.type === 'textarea') {
            localStorage.setItem(formsElement.name, formsElement.value);
        }
        if (formsElement.type === 'radio') {
            localStorage.setItem(formsElement.name, formsElement.value);
        }
        if (formsElement.type === 'checkbox') {
                localStorage.setItem(formsElement.name, formsElement.checked);
        }
    }
}
















