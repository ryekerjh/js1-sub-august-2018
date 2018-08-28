// TODO: Takehome day 4
let todos = [];
let todo1 = prompt("Hey there, what you doing?", "Eat Cheese.");
let todo2 = prompt("Hey there, what you doing?", "Eat Cheese.");
let todo3 = prompt("Hey there, what you doing?", "Eat Cheese.");

let todoOneArray = [todo1];
let todoTwoArray = [todo2];
let todoThreeArray = [todo3];

todos.push(todoOneArray, todoTwoArray, todoThreeArray);

for(let i = 0; i < todos.length; i++) {
  let timeframe = prompt(`How long should ${todos[i][0]} take? (Please provide in days)`, "1");
  let transformed = parseInt(timeframe);
  if(!isNaN(transformed) {
    todos[i].push(transformed);
 } else {
   todos[i].push(1); //Edge Casing: catching potential errors for your user.
 };
} 

let n = 0;
let max = 0;
while(n < todos.length) {
  if(max < todos[n][1]) {
    max = todos[n][1];
  } 
  n++;
};

let m = 0;
do {
  if(todos[m][1] === max) {
    console.log(todos[m]);
  } else {
    todos[m].push("easy-peasy");
    alert(todos[m]);
  }
  m++;
} while(m < todos.length);


console.log(parseInt("hello world"));
isNaN(); //How you evaluate if somehting is NOT a number.





//
