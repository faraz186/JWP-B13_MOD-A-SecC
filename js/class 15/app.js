// var div = document.getElementById("main");

// console.log(div);

// var paras = div.getElementsByTagName("p");

// console.log(paras);

// // console.log(paras[0]);
// // console.log(paras[1]);

// for (var i = 0; i < paras.length; i++) {
//   paras[i].style.color = "green";
//   paras[i].style.textDecoration = "underline";
//   paras[i].style.fontStyle = "italic";
//   paras[i].style.border = "2px solid black";
//   console.log(paras[i]);
// }

// var div = document.getElementById("box");

// var anchor = div.getElementsByTagName("a");

// for (var i = 0; i < anchor.length; i++) {
//   console.log(anchor[i]);
// }

// setInterval()

var interval;

function stop() {
  clearInterval(interval);
}

function timer() {
  console.log("function call..");
}

interval = setInterval(timer, 1000);

// setTimeout()

function timer() {
  alert("welcome user");
}

setTimeout(timer, 3000);
