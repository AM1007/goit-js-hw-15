// Обираємо DOM елементи:

const input = document.querySelector("input");
const addButton = document.querySelector("[data-create]");
const delButton = document.querySelector("[data-destroy]");
const divElts = document.querySelector("#boxes");

//Визначаємо обробники подій на кнопки "Create" і "Delete"
addButton.addEventListener("click", addButtonHandler);
delButton.addEventListener("click", delButtonHandler);

//Виклик функціїї createBoxes() з передачею введенного користувачем значення "input.value"
function addButtonHandler() {
  createBoxes(input.value);
}

// Функція видалення створених елементів 'div'
function delButtonHandler() {
  document.querySelectorAll(".box").forEach((e) => e.remove());
  input.value = "";
}

// Створюємо коллекцію елементів 'div', кількість яких приймається параметром 'number'
function createBoxes(number) {
  divElts.innerHTML = ""; // Обнуляє попереднє значення в input
  const divs = [];
  let size = 30;
  for (let i = 0; i < number; i += 1, size += 10) {
    const div = document.createElement("div");
    div.style.backgroundColor = getRandomHexColor();
    div.classList.add("box");
    div.style.height = `${size}px`;
    div.style.width = `${size}px`;
    divs.push(div);
  }
  divElts.append(...divs);
}

// Функція створення рандомного кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
