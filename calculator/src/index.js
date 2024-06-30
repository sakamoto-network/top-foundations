let a = new Number();
let b = new Number();
let operator = new String();
let operatorResult = new Number();

let display = document.getElementById("display");
let numbers = document.getElementsByClassName("calc-number");
let operators = document.getElementsByClassName("calc-button");

// this is the only way i could get the function to display numbers properly
function changeDisplay(num) {
  display.value += num.srcElement.innerHTML;
  checkForAbsolutes();
}

function backspace() {
  display.value = display.value.slice(0, -1);
  checkForAbsolutes();
}

function checkForAbsolutes() {
  if (
    display.value.includes(".") ||
    (display.value.match(".") || []).length > 1
  ) {
    numbers[10].disabled = true;
  } else {
    numbers[10].disabled = false;
  }

  if (
    display.value[0] == "-" ||
    (display.value.length > 0 && !display.value[0].includes("-"))
  ) {
    numbers[11].disabled = true;
  } else {
    numbers[11].disabled = false;
  }
}

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", changeDisplay);
}

operators[0].addEventListener("click", () => {
  clear();
  checkForAbsolutes();
});
operators[1].addEventListener("click", backspace);
for (let i = 2; i < 6; i++) {
  operators[i].addEventListener("click", changeOperator);
}
operators[6].addEventListener("click", operate);

function changeOperator(button) {
  if (operator === "+") {
    operatorResult = a + Number(display.value);
    display.value = "";
    display.placeholder = operatorResult;
  } else if (operator === "-") {
    operatorResult = a - Number(display.value);
    display.value = "";
    display.placeholder = operatorResult;
  } else if (operator === "*") {
    operatorResult = a * Number(display.value);
    display.value = "";
    display.placeholder = operatorResult;
  } else if (operator === "/") {
    operatorResult = a / Number(display.value);
    display.value = "";
    display.placeholder = operatorResult;
  } else {
    a = Number(display.value);
    display.value = "";
    display.placeholder = a;
  }

  operator = button.currentTarget.innerText;
  checkForAbsolutes();
}

function clear() {
  a = new Number();
  b = new Number();
  operator = "";
  display.value = "";
  display.placeholder = 0;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate() {
  b = Number(display.value);
  operator === "+"
    ? (result = add(operatorResult, b))
    : operator === "-"
      ? (result = subtract(operatorResult, b))
      : operator === "*"
        ? (result = multiply(operatorResult, b))
        : operator === "/" && display.value != "0"
          ? (result = divide(operatorResult, b))
          : null;

  if (b === 0 && a != 0) {
    display.value = "";
    display.placeholder = "nice try";
  } else {
    display.value = Math.round(result * 100) / 100;
  }
}
