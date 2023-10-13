# goit-js-hw-15

### Task 1

Write a script that, when the input loses focus (`blur` event), checks its content for the correct number of input characters.

```HTML
<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>
```

- How many characters should be in the input is specified in its `data-length` attribute.

- If the correct number of characters is entered, the `border` of the input becomes green, if the number is incorrect - red.

To add styles, use the CSS classes `valid` and `invalid`, which we have already added to the source files of the task.

```CSS
#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}
```

---

### Task 2

Write a script that responds to a change in the value of `input#font-size-control` (`input` event) and changes the inline style of `span#text` by updating the `font-size` property. As a result, dragging the slider will change the size of the text.

```HTML
<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
```

---

### Task 3

Write a script for managing the login form.

```HTML
<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
```

1. Processing of form submission `form.login-form` should occur according to the `submit` event.
2. The page should not reload when submitting the form.
3. If there are blank fields in the form, display an `alert` with a warning that all fields must be filled.
4. If the user filled in all the fields and sent the form, collect the values of the fields into an object, where the name of the field will be the name of the property, and the value of the field will be the value of the property. To access form elements, use the `elements` property.
5. Display the object with the entered data in the console and clear the values of the form fields using the `reset` method.

---

### Task 4

Write a script that changes the background colors of the `<body>` element through inline styling when `button.change-color` is clicked and displays the color value in `span.color`.

```HTML
<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>
```

To generate a random color, use the `getRandomHexColor` function.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

---

### Task 5

Write a script for creating and cleaning a collection of elements. The user enters the number of elements in `input` and clicks the `Create` button, after which the collection is rendered. Clicking the `Clear` button clears the collection of items.

```HTML
<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>
```

Create the createBoxes(amount) function, which accepts one parameter - a number. The function creates as many `<div>` as specified in `amount` and adds them to `div#boxes`.

1. The dimensions of the very first `<div>` are 30px by 30px.
2. Each element after the first must be wider and taller than the previous one by 10px.
3. All elements should have a random background color in HEX format. Use the ready function `getRandomHexColor` to get the color.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
```

Create a `destroyBoxes()` function that clears the contents of the `div#boxes`, thus removing all created elements.
