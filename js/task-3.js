const ref = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')
};

console.log(ref.nameInput);
console.log(ref.nameOutput);


ref.nameInput.addEventListener("input", () => {
    const trimmedValue = ref.nameInput.value.trim();

    ref.nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});