// - Дана textarea.
//     В неё вводится текст.
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


// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
//     Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// navigator.geolocation.getCurrentPosition((data)=>{
//     console.log(data);
// });






















