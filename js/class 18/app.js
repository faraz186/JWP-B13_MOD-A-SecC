var studentArr = ["faraz", 23, "karachi", "faraz@gmail.com", "male"];

console.log(studentArr[3]);

var studentObj = {
  stdName: "faraz",
  stdAge: 23,
  stdCity: "karachi",
  stdEmail: "faraz@gmail.com",
  stdGender: "male",
  stdStatus: true,
};

studentObj.courses = ["html", "css", "js"];

studentObj.qualification = {
  education: "bachelors",
  CGPA: 3.4,
};

console.log(studentObj);

var studentObj = {
  stdName: "faraz",
  stdGetName: function () {
    console.log(this.stdEmail);
  },
  stdAge: 23,
  stdCity: "karachi",
  stdEmail: "faraz@gmail.com",
  stdGender: "male",
  stdStatus: true,
};

studentObj.stdGetName();

console.log();

document.write();

document.getElementById();

console.log();

// there are 3 types of function in JS

// 1) function Declaration

function abc() {
  console.log("function Declaration call");
}

abc();

// 2) Anonymous function / Regular function

var abc = function () {
  console.log("Anonymous function call");
};

abc();

// 3) Arrow function / Fat Arrow function

var response = "stdEmails" in studentObj;

delete studentObj.stdStatus;

var studentObj = {
  stdName: "faraz",
  stdGetName: function () {
    console.log(this.stdEmail);
  },
  stdAge: 23,
  stdCity: "karachi",
  stdEmail: "faraz@gmail.com",
  stdGender: "male",
  stdStatus: true,
};

console.log(studentObj);

var student1 = {
  name: "faraz",
  age: 23,
  city: "karachi",
  eduacation: "bachelors",
  email: "faraz@gmail.com",
};

var student1 = {
  name: "faraz",
  age: 23,
  city: "karachi",
  eduacation: "bachelors",
  email: "faraz@gmail.com",
};

function Book() {
  this.Bname, this.Bprice, this.Bedition, this.Bauthor;
}

function Student(name, age, city, email, education) {
  (this.stdname = name),
    (this.stdage = age),
    (this.stdcity = city),
    (this.stdemail = email),
    (this.stdeduacation = education);
}

Student.prototype.stdGetAge = function () {
  console.log(this.stdage);
};

var student1 = new Student(
  "faraz",
  23,
  "karachi",
  "faraz@gmail.com",
  "bachelors"
);

var student2 = new Student(
  "hamza",
  26,
  "lahore",
  "hamza@gmail.com",
  "bachelors"
);

console.log(student1.stdGetAge());

console.log(student2.stdGetAge());

new Date();

var student1 = {
  name: "faraz",
  qualification: {
    education: "bachelors",
    CGPA: 3.4,
  },
  age: 23,
  city: "karachi",
  eduacation: "bachelors",
  email: "faraz@gmail.com",
};

for (var key in student1) {
  console.log(student1[key]);
}

// for in loop
