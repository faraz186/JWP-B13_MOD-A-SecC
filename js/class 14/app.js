var paraElement = document.getElementById("para");

var h1Element = document.getElementById("heading");

var anchorElement = document.getElementById("link");

h1Element.innerText = "Hello JS";

paraElement.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum beatae in numquam nostrum doloribus velit ipsa mollitia laudantium impedit! Sed dolorum quasi, commodi laudantium quisquam sit ex ratione sapiente facilis reprehenderit nisi blanditiis quis dicta libero? Sunt, expedita! Aliquid assumenda, ab illo amet reiciendis ipsum perferendis quia quas quisquam dolorem.`;

console.log(paraElement.innerHTML);

console.log(h1Element.innerText);

console.log(anchorElement.innerHTML);


// two properites of document


// .innerHTML

// .innerText



var anchorElement = document.getElementById("link");

// anchorElement.innerHTML = "Google";

// anchorElement.href = "https://www.google.com";

// anchorElement.target = "_blank";

// anchorElement.style.textDecoration = "none";

// anchorElement.style.fontStyle = "italic";

// console.log(anchorElement);

// var div = document.getElementById("container");

// div.innerHTML = "<h1>container heading</h1>";

// console.log(div);

// function on() {
//   var img = document.getElementById("img");

//   img.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiC2UGjYAOn4uISa9Ho_SLHTqWi4JR-bFW7A&s";
// }

// function off() {
//   var img = document.getElementById("img");

//   img.src =
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOzfvj4CDlwGDVlVhDJJaPHex1Uj6IpYPJw&s";

//   img.width = "200";
// }

// function on() {
//   var img = document.getElementById("img");

//   var btn = document.getElementById("btn");

//   if (btn.innerText === "On") {
//     img.src =
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiC2UGjYAOn4uISa9Ho_SLHTqWi4JR-bFW7A&s";

//     btn.innerText = "off";
//   } else {
//     img.src =
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkOzfvj4CDlwGDVlVhDJJaPHex1Uj6IpYPJw&s";

//     btn.innerText = "On";
//   }
// }

// function completePara() {
//   var para = document.getElementById("para");

//   var link = document.getElementById("link");

//   if (link.innerHTML === "Read More") {
//     para.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima temporibus quo rerum a natus enim explicabo voluptates! Nam, harum quos dignissimos rem ducimus similique accusamus perspiciatis corrupti voluptate, adipisci porro libero error facere exercitationem reiciendis et laboriosam sequi vel consequatur sed. Eaque, maxime veritatis. Voluptas autem dignissimos ipsam, tempora in suscipit neque nulla quasi? Excepturi error voluptatibus vel distinctio laudantium.`;

//     link.innerHTML = "Read Less";
//   } else {
//     para.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima temporibus`;

//     link.innerHTML = "Read More";
//   }
// }

// function completePara() {
//   var paraElement = document.getElementById("para");

//   var anchor = document.getElementById("link");

//   if (anchor.innerHTML === "Read More") {
//     paraElement.innerText =
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut neque repudiandae consectetur odit necessitatibus veniam dolore modi sapiente ullam aperiam! Repudiandae, est dolor cupiditate odit consequuntur amet. Ipsa, dolorum. Officia consectetur excepturi eos dolores aliquid ab, quam nemo blanditiis, modi itaque velit praesentium fugiat odit laboriosam ex reprehenderit a qui? Atque nemo doloribus doloremque illum voluptas iste cumque perferendis molestias temporibus, maiores culpa magnam vel minima quas exercitationem necessitatibus facere.";

//     anchor.innerHTML = "Read Less";
//   } else {
//     paraElement.innerHTML =
//       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut neque repudiandae consectetur";

//     anchor.innerHTML = "Read More";
//   }
// }

// var div = document.getElementById("main");

// div.innerHTML = "<p>Lorem ipsum dolor sit amet.</p>";

// console.log(div);

// var div = document.getElementById("main");

// div.className = "div";

// console.log(div);

function hideImG() {
  var img = document.getElementById("img");

  img.className += " hide";
}

document.getElementById("h1").style.margin = "10px 20px 10px 60px";
