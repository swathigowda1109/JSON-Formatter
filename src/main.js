const inputArea = document.querySelector('.large-input');
const outputArea = document.querySelector('.large-output');
const btnFormat = document.querySelector('.button--format');
const btnMinify = document.querySelector('.button--minify');

btnFormat.addEventListener('click', () => {
  //JSON.parse(value,replacer,space) here 5 represents space
  const formatted = JSON.stringify(JSON.parse(inputArea.value), null, 5);

  outputArea.value = formatted;
});
window.addEventListener('contextmenu', (e) => e.preventDefault());

btnMinify.addEventListener('click', () => {
  const minified = JSON.stringify(JSON.parse(inputArea.value));

  outputArea.value = minified;
});
