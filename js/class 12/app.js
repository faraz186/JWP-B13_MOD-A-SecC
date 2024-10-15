var arr = [1, 54, true, "faraz", undefined];

for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// while loop

var arr = [1, 54, true, "faraz", undefined];

var i = 0;

while (i < arr.length) {
  console.log(arr[i]);
  i++;
}

var word = prompt("Enter a word");
var reverse = "";

var i = word.length - 1;

while (i >= 0) {
  reverse += word[i];
  i--;
}

if (word === reverse) {
  console.log(word, " is palindrome");
} else {
  console.log(word, " is not palindrome");
}

// do-while loop

var arr = [1, 54, true,"faraz", undefined];

var i = 0;

do {
  console.log(arr[i]);
  i++;
} while (i < arr.length);


function multiplicationTable(tableNum, range) {
  var i = 1;

  do {
    document.write(`${tableNum} x ${i} = ${tableNum * i} <br>`);
    i++;
  } while (i <= range);
}

multiplicationTable(+prompt("Enter any number"), +prompt("Enter range"));
  
alert("alert call...");

function signUp() {
  Swal.fire({
    title: "Good job!",
    text: "signup successfully!",
    icon: "warning",
  });
}

function greet() {
    Swal.fire({
      title: "Good job!",
      text: "signup successfully!",
      icon: "warning",
    });
  }

function changeStyle(element) {
  console.log(element);

  element.style.color = "red";
  element.style.backgroundColor = "black";
  element.style.fontFamily = "arial";
}

function setHref(element) {
  element.style.textDecoration = "none";
  element.style.color = "green";
}
