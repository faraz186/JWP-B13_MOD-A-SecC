var firebaseConfig = {
  apiKey: "AIzaSyD3_hgY0lptbJKA9hXRdZW4_BvDQMejsIo",  
  authDomain: "fir-auth-8f753.firebaseapp.com",
  databaseURL: "https://fir-auth-8f753-default-rtdb.firebaseio.com",  
  projectId: "fir-auth-8f753",
  storageBucket: "fir-auth-8f753.firebasestorage.app",  
  messagingSenderId: "419024832277",
  appId: "1:419024832277:web:bdffdeb220aa5e4b1d4b1c",
};

var app = firebase.initializeApp(firebaseConfig);

function saveData() {
  try {
    var name = document.getElementById("name").value;  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var userObj = {
      userName: name,
      userEmail: email,  
      userPassword: password,
    };

    // save Data on DB

    // set() Method

    // firebase.database().ref("users").set(userObj);

    // push() Method

    firebase.database().ref("users").push(userObj);
  } catch (error) {
    console.log(error);
  }
}

function deleteData() {
  firebase.database().ref("users/-OB6HlzulUMIzdI2KMlu").remove();
}

function editData() {
  firebase.database().ref("users/-OB6HjjGoXfRsKVvxDSd").set({
    userEmail: "hamza56@gmail.com",
    userName: "Muhammad hamza",
    userPassword: "hamza12345",
  });
}

function getDataFromDatabase() {
  // on() method

  firebase
    .database()
    .ref("users")
    .on("child_added", function (data) {
      console.log(data.val());
    });
}

getDataFromDatabase();

// var userObj = {
//   name: "faraz",
//   email: "faraz@gmail.com",
//   password: "12f1a3f1sa3f1af",
//   status: true,
// };

// // data save on local Storage

// localStorage.setItem("biodata",

//     JSON.stringify(userObj));

// localStorage.setItem("username", "faraz");
// localStorage.setItem("age", 24);
// localStorage.setItem("city", "karachi");

// // get data from local Storage

// var response = localStorage.getItem("biodata");

// var response2 = localStorage.getItem("city");

// console.log(JSON.parse(response));

// console.log(response2);

// // delete single data from local Storage

// localStorage.removeItem("age");

// localStorage.removeItem("city");

// // delete all data from local Storage

// localStorage.clear();
