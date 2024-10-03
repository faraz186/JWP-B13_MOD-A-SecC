// Password generator program

var randomValues = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*";

var randomPassword = "";  

for (var i = 0; i < 10; i++) {
  var randomNumber = Math.round(Math.random() * randomValues.length);
  randomPassword += randomValues[randomNumber];  
}  

console.log(randomPassword);


// Date chap # 31


var date = new Date();

console.log(date.getTime());

console.log(typeof date);


console.log(date.slice(0, 10));

console.log(date.toString().slice(0, 10));


var daysArr = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];

console.log(daysArr[date.getDay()]);



var date = new Date("25 Feb 2015 15:35:40");

console.log(date.toLocaleTimeString());

console.log(date);


// Ramadan month Left


var firstRamadan = new Date("March 1, 2025").getTime();

var current = new Date().getTime();

var diff = firstRamadan - current;

var month = diff / (1000 * 60 * 60 * 24 * 30);

console.log(Math.round(month));

console.log("firstRamadan", firstRamadan);

console.log("current", current);


// Functions Chp # 35

function date() {
  var date = new Date().getFullYear();
  console.log(date);
}


date();
