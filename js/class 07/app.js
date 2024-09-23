// For Loop

// for (var i = 0;i < 10; i++) {
//   console.log(i);
// }

// for (var i = 9; i >= 0; i--) {
//   console.log(i);
// }

// var userInput = prompt("Enter your city");

// var citiesArr = [
//   "karachi",
//   "lahore",
//   "multan",
//   "quetta",
//   "peshawar",
//   "islamabad",
// ];

// for (var i = 0; i <= 5; i++) {
//   console.log(citiesArr[i]);
// }

// if (userInput === citiesArr[0]) {
//   console.log("value match");
// }

// else if (userInput === citiesArr[1]) {
//   console.log("value match");
// }
// else if (userInput === citiesArr[2]) {
//   console.log("value match");
// }
// else if (userInput === citiesArr[3]) {
//   console.log("value match");
// }
// else {
//   console.log("value not found..");
// }

// var userInput = prompt("Enter your city");

// var citiesArr = [
//   "karachi",
//   "lahore",
//   "multan",
//   "quetta",
//   "peshawar",
//   "islamabad",
// ];

// var faraz = 0;

// for (var i = 0; i <= 5; i++) {
//   if (userInput === citiesArr[i]) {
//     console.log("city found..");
//     faraz = 1;
//   }
// }

// if (faraz === 0) {
//   console.log("city not found..");
// }

// var firstNames = ["faraz "];

// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];

// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++)
// {
//   for (var j = 0; j < lastNames.length; j++)
//   {
//     fullNames.unshift(firstNames[i] + lastNames[j]);
//   }
// }

// console.log(fullNames);

// var firstNames = ["Muhammad ", "syed "];

// var lastNames = ["faraz", "farooq", "hamza", "ali"];

// var fullNames = [];

// for (var i = 0; i < firstNames.length; i++) {
//   for (var j = 0; j < lastNames.length; j++) {
//     fullNames.push(firstNames[i] + lastNames[j]);
//   }
// }

// console.log(fullNames);

var userInput = prompt("Enter your city");

var firstChar = userInput.slice(0, 1).toUpperCase();

var remainingChar = userInput.slice(1).toLowerCase();

var updatedValue = firstChar + remainingChar;

console.log(updatedValue);

var citiesArr = [
  "Karachi",
  "Lahore",
  "Multan",
  "Quetta",
  "Peshawar",
  "Islamabad",
];

var flag = false;

for (var i = 0; i <= 5; i++) {
  if (updatedValue === citiesArr[i]) {
    console.log("city found..");
    flag = true;
  }
}

if (flag === false) {
  console.log("city not found..");
}

// var text = "hello world";

// console.log(text.slice(6, 11));
