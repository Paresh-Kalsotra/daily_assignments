let num1, num2, op;
alert(
  "The calculator can perform following operations: add, subtract, multiply, divide "
);
op = prompt(
  "Enter the operator for the operation to be performed: + for addition, - for sub, * for multiply , / for divide"
);
num1 = prompt("Enter first number");
num2 = prompt("Enter Second number");

switch (op) {
  case "+":
    alert("additon of numbers : " + (num1 + num2));
    break;
  case "-":
    alert("Subtract of numbers: " + (num1 - num2));
    break;
  case "*":
    alert("multiplication of numbers: " + num1 * num2);
    break;
  case "/":
    alert("division of numbers: " + num1 / num2);
    break;
  default:
    alert("enter a valid operator");
}
