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

for (var keys in student1) {
  for (var objKeys in student1[keys]) {
    console.log(student1[keys][objKeys]);
  }
}

// Array of Object

var users = [
  {
    id: 1,
    name: "faraz",
    status: false,
  },
  {
    id: 2,
    name: "hamza",
    status: true,
  },
  {
    id: 3,
    name: "ali",
    status: false,
  },
  {
    id: 4,
    name: "ahmed",
    status: true,
  },
];

for (var i = 0; i < users.length; i++) {
  //   console.log(users[i]);
  for (var keys in users[i]) {
    console.log(users[i][keys]);
  }
}

function greet() {
  try {
    console.lg("hello world");
  } catch (err) {
    console.log(err);
  }
}

greet();
