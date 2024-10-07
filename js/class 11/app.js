// function

// There are 3 types of functions in js.

// 1) Function Decalaration

// 2) Anonymous Decalaration

// 3) Arrow Function / Fat Arrow Function

function greet() {
  console.log("function call..");
}

greet();

function add() {
  var a = 20,
    b = 50;
  console.log(a + b);
}

add();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(10, 40);

function bioData(name, age, city) {
  console.log(`My name is
    ${name}. I am ${age}
    years old and I lived
    in ${city}`);
}

bioData(prompt("Enter name"), prompt("Enter age"), prompt("Enter city"));

// Multiplication Table

function MultiplicationTable(table, range) {
  for (var i = 1; i <= range; i++) {
    document.write(`${table} x ${i} = ${table * i} <br>`);
  }
}

MultiplicationTable(+prompt("Enter any number"), +prompt("Enter range"));

function palindrome(word) {
  var reserveWord = "";

  for (var i = word.length - 1; i >= 0; i--) {
    reserveWord += word[i];
  }

  if (word === reserveWord) {
    console.log("word is palindrome");
  } else {
    console.log("word is not palindrome");
  }
}

palindrome(prompt("Enter a word"));

function getVar(a, b) {
  var res = a + b;
  return res;
}

var getDatafromFunction = getVar(20, 20);

console.log(getDatafromFunction);

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var copy = arr.slice(1, 7);

console.log(copy);

function greet(message) {
  return message;
}

var messageGet = greet("hello function..");

console.log(messageGet);

// Calculator Program

function calc(firstVal, secondVal, operator) {
  if (operator === "+") {
    return firstVal + secondVal;
  } else if (operator === "-") {
    return firstVal - secondVal;
  } else if (operator === "*") {
    return firstVal * secondVal;
  } else if (operator === "/") {
    return firstVal / secondVal;
  } else if (operator === "%") {
    return firstVal % secondVal;
  } else {
    return "Invalid Operator";
  }
}

console.log(
  calc(
    +prompt("Enter first Value"),
    +prompt("Enter Second Value"),
    prompt("Enter operator")
  )
);

function abc() {
  var number = 40;
}
console.log(number);

abc();

// Switch Statement

var userInput = prompt("Enter day of week");

userInput = userInput.slice(0, 3).toLowerCase();

switch (userInput) {
  case "mon":
    alert("Monday is working day...");
    break;

  case "tue":
    alert("tuesday is working day...");
    break;

  case "wed":
    alert("wednesday is working day...");
    break;

  case "thu":
    alert("thursday is working day...");
    break;

  case "fri":
    alert("friday is working day...");
    break;

  case "sat":
    alert("saturaday is rest day...");
    break;

  case "sun":
    alert("sunday is family day...");
    break;

  default:
    alert("invalid input");
}

// Complete Chapter 40
