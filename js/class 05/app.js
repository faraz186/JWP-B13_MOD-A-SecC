var percentage = +prompt("Enter your percentage");  

if (percentage <= 50) {  
  alert("YOur grade is D");
} else if (percentage <= 60) {  
  alert("YOur grade is C");
} else if (percentage <= 70) {  
  alert("YOur grade is B");
} else if (percentage <= 79) {    
  alert("YOur grade is A");
} else if (percentage <= 100) {   
  alert("YOur grade is A+");
} else {
  alert("incorrect");  
}


var maths = +prompt("Enter your maths marks");  
var english = +prompt("Enter your english marks");  
var computer = +prompt("Enter your computer marks");  

var totalMarks = 300;

var marksObtained = maths + english + computer;

document.write("<h1>MARKSHEET</h1> <br>");

document.write(`Total Marks: ${totalMarks} <br>
    Marks Obtained: ${marksObtained}
    `);



// Logical Operator


// && AND Operator

if(weight > 300   &&    time < 6){

}



// || OR Operator

if(weight > 300   ||    time < 6){

}



var userWeight = +prompt("Enter your weight");

var time = +prompt("Enter time");

var gender = prompt("Enter your gender");

if (userWeight <= 100 && time < 6 && gender) {
  console.log("come to our tryout!!");
} 
   
else {
  console.log("better luck next time!!");
}



var res = prompt("Enter resident");
   
if (res === "U.S.") {
  var age = +prompt("Enter your age");
  if (age > 65 || age < 21) {
    console.log("allow..");
  } else { 
    console.log("not allow..");
  }
} else {
  console.log("res not match");
}

if ((age > 65 || age < 21) && res === "U.S.") {
  console.log("allow..");
} else {
  console.log("not allow..");
}




var progLang = prompt("Enter your programming language");

if (progLang === "js") {
  var city = prompt("Enter your city");

  if (city === "karachi") {
    var experience = +prompt("Enter your experience");

    if (experience >= 2) {
      console.log("you are Hired!!");
    } else {
      console.log("experience lao!!");
    }
  } else {
    console.log("karachi ajao!!");
  }
} else {
  console.log("js seekho!!");
}



// Array Definition:-

// multiple values store in a single
   
//    variable is called array.



var num1 = 10;
var num2 = 20;
var num3 = 30;
var num4 = 40;
var num5 = 50;


// Array

var num = [10, 20, 30, 40, 50, 60];

var mixedValues = [10, "faraz", true, 40, undefined, 60];  

console.log(mixedValues[8]);

var a = 0;

if (!!a) {
  console.log("bulb on");
} else {
  console.log("bulb off");
}
