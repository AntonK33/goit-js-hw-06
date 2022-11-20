const changeButton = document.querySelector('#change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



changeButton.addEventListener('click', apdateColor);

function apdateColor() {
  let randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;

}
  
