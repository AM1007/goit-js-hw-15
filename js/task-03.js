const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const form = evt.target;
  const data = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  if (data.email === "" || data.password === "") {
    return alert("Please fill in all the fields!");
  }

  console.dir(data);
  form.reset();
}
