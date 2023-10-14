const slider = document.getElementById("font-size-control");
const span = document.getElementById("text");

span.style.fontSize = `${slider.value}px`;

const onInput = (evt) => {
  span.style.fontSize = evt.currentTarget.value + "px";
};

slider.addEventListener("input", onInput);
