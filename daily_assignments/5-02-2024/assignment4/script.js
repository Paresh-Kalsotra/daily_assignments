let princ, rate, time, si;

princ = parseInt(prompt("Enter the principle amount"));
rate = parseFloat(prompt("Enter the rate of interest"));
time = parseFloat(prompt("Enter the time in years"));

si = (princ * rate * time) / 100;

alert("Simple interest: " + si);
