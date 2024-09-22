var arr = [10,"faraz",true,undefined,50];  

console.log(arr[2])
  

var arr = [];

arr[0] = 100;
arr[1] = true;
arr[3] = undefined;

console.log(arr[2])

var userArr = [prompt("Enter your first name"),
    prompt("Enter your last name"),    
    prompt("Enter your age"),
    prompt("Enter your city")]
  
console.log(`My name is ${userArr[0]} ${userArr[1]}. My age is ${userArr[2]} and i lived in ${userArr[3]}`);


// Array methods


// 1) push() method   (Add data in the end of an array)


fruitsArr.push("orange","mango","grapes");

// 2) unshift() method   (Add data in the start of an array)

fruitsArr.unshift("mango","pine apple")

// 3) pop() method   (delete data in the end of an array)

fruitsArr.pop()
fruitsArr.pop()
fruitsArr.pop()


var fruitsArr = ["apple","banana","mango","pine apple","orange"];

// 4) shift() method   (delete data in the start of an array)

fruitsArr.shift();
fruitsArr.shift();


// 5) splice() method  (both add or delete in any index number)

var fruitsArr = ["apple","banana","mango","pine apple","orange"];

fruitsArr.splice(-2,1,'faraz');

fruitsArr.splice(2,3)

fruitsArr.splice(2,0,"faraz",500,true)

fruitsArr.splice(4,0,"faraz",500,true)

var fruitsArr = ["apple","banana","mango","pine apple","orange"];

// 5) slice() method  (to copy array of elements)

var copy = fruitsArr.slice(0,4)

console.log(copy)


console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');
console.log('JavaScript Class');


// bad practice  / best practice

// Loops

// iteration of a process or repeatation of something is called loop

// 1) for loop


// for(initialization;condition;increment/decrement){

// }

for(var i = 0;i<=50;i++){
console.log(i,"hello world");
}

// 2) while loop

// 3) do-while loop
