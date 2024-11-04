var firebaseConfig = {
  apiKey: "AIzaSyD3_hgY0lptbJKA9hXRdZW4_BvDQMejsIo",
  authDomain: "fir-auth-8f753.firebaseapp.com",
  projectId: "fir-auth-8f753",
  storageBucket: "fir-auth-8f753.firebasestorage.app",
  messagingSenderId: "419024832277",
  appId: "1:419024832277:web:bdffdeb220aa5e4b1d4b1c",
};

var app = firebase.initializeApp(firebaseConfig);

function signUp() {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  console.log(name.value);
  console.log(email.value);
  console.log(password.value);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

function login() {
  var email = document.getElementById("Loginemail");
  var password = document.getElementById("Loginpassword");

  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      window.location.href = "./Home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}
