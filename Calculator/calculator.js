let num1 = 10;
let num2 = 20;

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
total = document.getElementById("sum-el");

function add() {
  console.log("Hey bro I'm addition");
  num3 = num1 + num2;
  total.textContent = "Total sum of given number is" + " " + num3;
}
function subtract() {
  console.log("Hey bro I'm Subtraction");
  num3 = num1 - num2;
  total.textContent = "Subtraction of given number is " + " " + num3;
}
function multiple() {
  console.log("Hey bro I'm multiplication");
  num3 = num1 * num2;
  total.textContent = "Multiplicaiton of the given number is " + " " + num3;
}
function division() {
  console.log("Hey bro I'm Division");
  num3 = num1 / num2;
  total.textContent = "Division of the given number is " + " " + num3;
}
