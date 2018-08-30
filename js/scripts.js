let pTags = document.getElementsByTagName("p"); //Returns an array

let specialPTag = document.getElementsByClassName("my-special-p-tag"); // Returns an array

let thisPTag = document.getElementById("this_p_tag"); //Returns 1 DOM node

let h1Tags = document.querySelectorAll("h1");
let queryPTags = document.querySelectorAll(".my-special-p-tag");
let idPtags = document.querySelectorAll("#this_p_tag");

//TRY IT OUT
function queryMyDOM(method, element) {
  let result;
  switch(method) {
    case "getElementsByTagName":
      result = document.getElementsByTagName(element);
      break;
    case "getElementsByClassName":
      result = document.getElementsByClassName(element);
      break;
    case "getElementById":
      result = document.getElementById(element);
      break;
    case "querySelector":
      result = document.querySelector(element);
      break;
    case "querySelectorAll":
      result = document.querySelectorAll(element);
      break;
    default: 
      result = "Sorry, that's not valid.";
  }
  console.log(result);
};

// queryMyDOM("getElementsByTagName", "h1");

//EVENT LISTENERS
let redDiv = document.querySelector(".red-background");

let count = 0; //This will keep track of how many times the user has moused over the div. 

redDiv.addEventListener( //Event Listener Takes TWO arguments
  "mouseover", //1. Valid DOM event 
  e => { //2. A callback function, which takes 1 argument (e) which refers to the event itself when this callback is called by JavaScript
    if(count < 10) { //Check if the count is less than 10 and increment if it is.
      count++;
    } else { //If the count has reached 10, change the backgroun color and reset the count to 0
      redDiv.style.backgroundColor = "#0000FF";
      redDiv.addEventListener("mouseleave", e => {
        redDiv.style.backgroundColor = "#E40007";
      });
      count = 0;
    }
  }
);


let input = document.querySelector("#my_input");

input.addEventListener("keydown", e => { //Logs the keycode of the key that you are typing.
  console.log(e.keyCode);
});
