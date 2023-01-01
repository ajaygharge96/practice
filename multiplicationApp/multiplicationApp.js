// declare random number for question
const num1 = Math.ceil(Math.random() * 10); // we can also use Math.floor insted of ceil
const num2 = Math.ceil(Math.random() * 10);
// get data by DOM
const questionElement = document.getElementById("question");
const inputElement = document.getElementById("input");
const formElement = document.getElementById("form");
const scoreElement = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score")); //get data from local strg and to convert into int use json.parse /or parseInt
if (!score /*|| score<=0*/) {
  score = 0;
}
scoreElement.innerText = `Score: ${score}`; //Set value of score
questionElement.innerText = `What is ${num1} Multiply by ${num2}?`; // Create Question randomly
const correctAns = num1 * num2; // Declaaring Identification of Answer
//event listner for submit
formElement.addEventListener("submit", () => {
  const userAns = +inputElement.value; //we have to use + befor inputElemnt.vlue so it'll in number else its in string frmt
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});
// Store answer in local storage of browser
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
} //we need to convert data into string
