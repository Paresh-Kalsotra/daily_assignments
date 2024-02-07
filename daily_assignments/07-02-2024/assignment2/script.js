function sumArrayValue(arr) {
  let sum = 0;
  for (let val of arr) {
    if (typeof val == "number") {
      sum += val;
      console.log(sum);
    }
  }
  return sum;
}
let arr = [1, 1, 5, "a", "jfufu", 4, undefined, 5.26];
alert("sum of number in array is " + sumArrayValue(arr));
