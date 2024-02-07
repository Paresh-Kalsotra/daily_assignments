let op;
op = prompt("enter operator : + , - , * , / ,");
num1 = prompt("enter num 1");
num2 = prompt("enter num 2");

switch (op) {
  case "+":
    sum(num1, num2);
    break;
  case "-":
    sub(num1, num2);
  case "*":
    prod(num1, num2);
    break;
  case "/":
    divide(num1, num2);
    break;
  default:
    break;
}
function sum(fNum, sNum) {
  alert("sum of two numbers is: " + fNum + sNum);
}
function sub(fNum, sNum) {
  alert("sub of two numbers is: " + fNum - sNum);
}
function prod(fNum, sNum) {
  alert("product of two numbers is: " + fNum * sNum);
}
function divide(fNum, sNum) {
  alert("division of two numbers is: " + fNum / sNum);
}
