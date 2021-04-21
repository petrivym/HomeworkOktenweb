// - Дана textarea.
//     В неё вводится текст.1
//     Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

const textArea = document.getElementById('textAr');

textArea.value = localStorage.getItem('valueTextArea');
textArea.oninput = () => {
    localStorage.setItem('valueTextArea', textArea.value);
}
// .....................................................................................Variant - 2.

// const textArea = document.getElementById('textAr');
// const INPUT = 'input';
//
// textArea.value = localStorage.getItem(INPUT);
//
// textArea.onchange = ({target:{value}}) =>{
//     localStorage.setItem(INPUT,value)
// }





















