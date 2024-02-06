let score = prompt("Enter your score");
if (score >= 90) {
  alert("Your grade is A");
} else if (score >= 80 && score < 90) {
  alert("Your grade is B");
} else if (score >= 70 && score < 80) {
  alert("Your grade is C");
} else if (score >= 50 && score < 70) {
  alert("Your grade is D");
} else {
  alert("Your grade is F");
}
