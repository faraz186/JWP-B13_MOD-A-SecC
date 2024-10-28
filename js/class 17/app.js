// Attributes

var divELement = document.getElementById("main");

divELement.className = "container";

divELement.setAttribute("class", "container01");

console.log(divELement);

var btn = document.getElementById("btn");

btn.setAttribute("class", "button");

btn.setAttribute("onclick", "greet(this)");

console.log(btn.attributes[2].nodeValue);

var getAttr = btn.getAttribute("onclick");

console.log(getAttr);

console.log(btn.hasAttribute("onmouseover"));

// function greet(e) {
//   console.log(e);
// }

// CREATE H1 ELEMENT WITH DOM

var h1Element = document.createElement("h1");

var h1Text = document.createTextNode("hello world");

h1Element.appendChild(h1Text);

console.log(h1Element);

// CREATE A ELEMENT WITH DOM

var anCHORelement = document.createElement("a");

var anchorText = document.createTextNode("Google");

anCHORelement.appendChild(anchorText);

anCHORelement.setAttribute("href", "https://www.google.com");

console.log(anCHORelement);

// Move to div container element in html

var divElement = document.getElementById("main");

divElement.appendChild(h1Element);

divElement.appendChild(anCHORelement);
