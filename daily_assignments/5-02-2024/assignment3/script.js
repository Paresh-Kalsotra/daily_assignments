let system, value, org_unit, new_unit;
system = prompt(
  "Enter the system you want to use for conversion: length, temperature, weight"
);
value = parseFloat(prompt("Enter the value you want to convert"));

if (system == "length") {
  org_unit = prompt("Enter the unit you are converting from: km, miles");
  new_unit = prompt("Enter the unit you want to convert into: km, miles");
  if (org_unit == "km" && new_unit == "miles") {
    value = value * 0.621371;
  } else if (org_unit == "miles" && new_unit == "km") {
    value = value * 1.60934;
  }
  alert("Converted value is: " + value + " " + new_unit);
} else if (system == "temperature") {
  org_unit = prompt(
    "Enter the unit you are converting from: celcius,fahrenheit"
  );
  new_unit = prompt(
    "Enter the unit you want to convert into: celcius,fahrenheit"
  );
  if (org_unit == "celcius" && new_unit == "fahrenheit") {
    value = value * (9 / 5) + 32;
  } else if (org_unit == "fahrenheit" && new_unit == "celcius") {
    value = (value - 32) * (5 / 9);
  }
  alert("Converted value is: " + value + " " + new_unit);
} else if (system == "weight") {
  org_unit = prompt("Enter the unit you are converting from:kgm, gram");
  new_unit = prompt("Enter the unit you want to convert into: kg, gram");
  if (org_unit == "kg" && new_unit == "gram") {
    value = value * 1000;
  } else if (org_unit == "gram" && new_unit == "kg") {
    value = value / 1000;
  }
  alert("Converted value is: " + value + " " + new_unit);
} else {
  alert("Conversion system not supported.");
}
