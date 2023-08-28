const changeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const nameColor = document.querySelector(".color");

changeColor.addEventListener("click", onClick);

function onClick() {
  bodyColor.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
