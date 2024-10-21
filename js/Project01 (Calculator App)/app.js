var input = document.getElementById("inputField");

function getValue(number) {
  input.value += number;
}

function clrAll() {
  input.value = 0;
}

function deleteChar() {
  input.value = input.value.slice(0, -3);
}

function square() {
  input.value = input.value * input.value;
}

function equal() {
  if (input.value) {
    input.value = eval(input.value);
  } else {
    input.value = "syntax error";
  }
}
