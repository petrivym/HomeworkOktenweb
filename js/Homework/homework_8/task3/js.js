
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



// Другу удосконалена розявязок з відео
const textArea = document.getElementById('textArea');
const saveButton = document.getElementById('save');
const forwardButton = document.getElementById('forward');
const backButton = document.getElementById('back');
const INPUT = 'INPUT';
let counter = 0;

if (!localStorage.getItem(INPUT)) {
    localStorage.setItem(INPUT, '[]');
}else {
    const db = JSON.parse(localStorage.getItem(INPUT));
    counter = db.length-1
    textArea.value = db[counter];
}

saveButton.onclick = ({target}) => {
    const data = textArea.value;
    const db = JSON.parse(localStorage.getItem(INPUT))
    db.push(data)
    localStorage.setItem(INPUT, JSON.stringify(db))
    counter++
}

backButton.onclick = () => {
    const db = JSON.parse(localStorage.getItem(INPUT))
    if (counter - 1 >= 0) {
      counter--
    }else {
        counter = db.length - 1;
    }
      textArea.value = db[counter];
}

forwardButton.onclick = () => {
    const db = JSON.parse(localStorage.getItem(INPUT))
    if (counter + 1 < db.length) {
    counter++
    }else {
        counter = 0;
    }
    textArea.value = db[counter];
}


















