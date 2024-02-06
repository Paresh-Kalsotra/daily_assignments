let again, val;
do {
  val = prompt(
    "Enter the value to check if it is truthy or falsy (suggestions: empty string, 0, null, undefined, NaN, false, a non-empty string, any number other than zero) "
  );
  if (
    val == "" ||
    val == "0" ||
    val == "undefined" ||
    val == "null" ||
    val == "NaN"
  ) {
    alert("Entered value is falsy.");
  } else {
    alert("Entered value is truthy.");
  }

  again = prompt("Type yes if you want to check another.");
} while (again == "yes");
