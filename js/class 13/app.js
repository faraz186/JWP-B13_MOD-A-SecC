// Events

function addLink(anchorElement) {
  console.log(anchorElement);    

  anchorElement.href = "https://www.google.com";  

  anchorElement.target = "_blank";

  anchorElement.style.color = "green";

  anchorElement.style.textDecoration = "none";  
}

console.log(document.getElementById("para1"));  

console.log(document.getElementById("para2"));

var imageElement = document.getElementById("img");

imageElement.src =
  "https://png.pngtree.com/png-clipart/20231019/original/pngtree-user-profile-avatar-png-image_13369988.png";

imageElement.width = "300";

imageElement.style.borderRadius = "10px";

function submit() {
  var emailElement = document.getElementById("email");

  var passwordElement = document.getElementById("password");

  if (emailElement.value.trim() && passwordElement.value.trim()) {
    console.log(emailElement.value);

    console.log(passwordElement.value);

    emailElement.value = "";
    passwordElement.value = "";
  } else {
    alert("required fields empty..");
  }
}

function submit() {
  var dropdown = document.getElementById("dropdown");

  console.log(dropdown.value);
}

function submit() {
  var radios = document.getElementsByClassName("genders");

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      console.log(radios[i].value);
    }
  }

var maleInput = document.getElementById("male");
var femaleInput = document.getElementById("female");
var othersInput = document.getElementById("others");

if (maleInput.checked) {
  console.log(maleInput.value);
} else if (femaleInput.checked) {
  console.log(femaleInput.value);
} else if (othersInput.checked) {
  console.log(othersInput.value);
}
}

var paras = document.getElementsByClassName("para");

console.log(paras);

for (var i = 0; i < paras.length; i++) {
  paras[i].style.color = "red";
}

paras[1].style.color = "red";
paras[2].style.color = "red";
paras[3].style.color = "red";

function set() {
  var input = document.getElementById("inp");

  input.value = "faraz";
}
