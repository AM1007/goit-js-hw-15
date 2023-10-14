const input = document.getElementById("validation-input");

const onBlur = (evt) => {
  const targetLength = input.dataset.length;
  const isInputValid = targetLength == evt.currentTarget.value.length;

  input.classList.remove(isInputValid ? "invalid" : "valid");
  input.classList.add(isInputValid ? "valid" : "invalid");
};

input.addEventListener("blur", onBlur);
