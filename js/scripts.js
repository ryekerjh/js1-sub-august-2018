//HOISTING
var name; //Declare
name = "Maurice"; //define

//FUNCTIONS

//Anonymous FUNCTIONS
// function(name, age) {
//   return `My name is ${name} and I am ${age} years old`;
// }; //Function DEFINITION
let todos = [];
//Named Functions
function getTodos(question) {
  todos.push(prompt(question)); 
};//fucntion DEFINITION

// getTodos("Whats the first thing you want to do?"); //Function call site;

// nameThatBand("Coldplay");

function nameThatBand(bandName) { //Function DECLARATION
  let name = "The Best";
  return alert(`${bandName} is overrated`);
};

let sayHello = function() { //function EXPRESSION
  alert("Hello");
};
// sayHello();

let incrementor = 0;
let sayGoodbye = function() { //RECURSIVE function
  if(incrementor > 5){
    alert("Hello");
    incrementor++;
    sayGoodbye();
  } else {
    return;
  }
}
// sayGoodbye();

//"FAT" Arrow FUNCTIONS
// () => (); //POINTLESS but basic form
// 
// () => { //Arrow funciton that takes 0 args and performs data manipulation
//   incrementor++;
//   if(incrementor < 5) {
//     sayGoodbye();
//   }
// };
// 
// pasta => { //takes 1 argument (can have parentheses or not) and alerts a string
//   alert(`My favorite pasta is ${pasta}!`);
// };
// 
// pasta => (pasta.toUpperCase());
// 
// (car, house) => {
//   //call an API to save this data...
//   return `The returned info is ${data}`;
// };




//TRY IT OUT 

/** 
Write a Function that...
Accepts 1 argument (age of the dog in years).
Returns the age of the dog using the conversion rate of 1 year to 7 "dog" years.
Alerts the answer.
Make sure you're checking for edge-cases!
*/

function calculateDogYears(age) {
  let parsed = parseInt(age);
  if(!isNaN(parsed)) {
    return parsed * 7;
  } else {
    let newAnswer = prompt("Come on! I said a NUMBER of years!", "1");
    calculateDogYears(newAnswer);
  }
};

// let dogAge = prompt("How old is your dog?", "10");
// alert(calculateDogYears(dogAge));`



parseInt();

"Ryeker".toUpperCase();







//
