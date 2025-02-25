function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = {
  inputNumber: document.querySelector('#controls input'),
  createBtn: document.querySelector('#controls [data-create]'),
  destroyBtn: document.querySelector('#controls [data-destroy]'),
  boxesContainer: document.querySelector('#boxes'),
};

function createBoxes(amount)
{
  const fragment = document.createDocumentFragment();
  let size = 30;

  for (let i = 0; i < amount; i++)
  {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.margin = "5px";

    size += 10;

    fragment.appendChild(box);
  }
  
    controls.boxesContainer.appendChild(fragment);
}

controls.createBtn.addEventListener("click", () => {
  const amount = Number(controls.inputNumber.value);

  if (amount < 1 || amount > 100)
  {
    alert("Введіть число від 1 до 100!");
    return;
  }

  controls.boxesContainer.innerHTML = "";

  createBoxes(amount);

  controls.inputNumber.value = "";
});

controls.destroyBtn.addEventListener("click", () => {
  controls.boxesContainer.innerHTML = "";
});

