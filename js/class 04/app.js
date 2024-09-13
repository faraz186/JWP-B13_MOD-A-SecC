var name = prompt("Enter your name", "faraz");

var age = prompt("Enter your age", 23);
   
console.log("Hello! My name is " + name + " . I am " + age + " years old.");


// template literals

console.log(`Hello! My name is ${name}. my age is ${age}`);


var a = 10,
  b = 20,
  c = 30,
  d = 40,
  e = 50;

document.write(`<select>
            <option value="">${a}</option>
            <option value="">${b}</option>
            <option value="">${c}</option>
            <option value="">${d}</option>
            <option value="">${e}</option>
        </select>`);


// if statement

// () = > parenthesis
   
alert("welcome user!!");


// datatypes

// String
// Number
// undefined
// Boolean   true or false   



if (false) {
  alert("welcome user!!");  
}



// comparison operator

// ==,
// ===,
// <,   
// >,
// <=,
// >=,
// !==  Not operator  (toggle)



var city = prompt("Enter where do you live?");

if (city === "karachi")
{
  alert("welcome user..");
}

else
{
  alert("you lived in " + city);
}




var age = +prompt("Enter your age");

if (age >= 18)
{
  console.log("you are eligible for CNIC..");
}

else
{
  console.log("you are not eligible for CNIC..");
}




var gender = prompt("Enter your gender");
var message;

if (gender === "male") {
  message = "welcome boy..";
} 

else if (gender === "female") {
  message = "welcome sister..";
} 

else {
  console.log("incorrect input!!");
}

alert(message);



var rollno = +prompt("Enter your rollno");

if (rollno !== 500) {
  console.log("you are  allow to sit in exam");
} else {
  console.log("you are not allow to sit in exam");
}


// toggle

var a = undefined;

if (!a) {
  console.log("true");
} else {
  console.log("false");
}



var percentage = +prompt("Enter your percentage");

if (percentage <= 50) {
  console.log("your grade is D");
} 

else if (percentage <= 60) {
  console.log("your grade is C");
} 

else if (percentage <= 70) {
  console.log("your grade is B");
} 

else if (percentage <= 79) {
  console.log("your grade is A");
} 

else if (percentage <= 100) {
  console.log("your grade is A+");
} 

else {
  console.log("invalid percentage");
}



// false
// 0
// '',""
// undefined
// null



var a = null;

if (a) {
  console.log("true");
} else {
  console.log("false");
}



var table = +prompt("Enter any number");

if (table == "") {
  document.write(`<h1>Multiplication Table of 5</h1> <br>`);

  document.write(`5 x 1 = ${5 * 1} <br>
        5 x 2 = ${5 * 2} <br>
        5 x 3 = ${5 * 3} <br>
        5 x 4 = ${5 * 4} <br>
        5 x 5 = ${5 * 5} <br>
        5 x 6 = ${5 * 6} <br>
        5 x 7 = ${5 * 7} <br>
        5 x 8 = ${5 * 8} <br>
        5 x 9 = ${5 * 9} <br>
        5 x 10 = ${5 * 10} <br>
        5 x11 = ${5 * 11} <br>
        5 x12 = ${5 * 12} 
        
        `);
} 

else {
  document.write(`<h1>Multiplication Table of ${table}</h1> <br>`);

  document.write(`${table} x 1 = ${table * 1} <br>
        ${table} x 2 = ${table * 2} <br>
        ${table} x 3 = ${table * 3} <br>
        ${table} x 4 = ${table * 4} <br>
        ${table} x 5 = ${table * 5} <br>
        ${table} x 6 = ${table * 6} <br>
        ${table} x 7 = ${table * 7} <br>
        ${table} x 8 = ${table * 8} <br>
        ${table} x 9 = ${table * 9} <br>
        ${table} x 10 = ${table * 10} <br>
        ${table} x11 = ${table * 11} <br>
        ${table} x12 = ${table * 12} 
        
        `);
}
