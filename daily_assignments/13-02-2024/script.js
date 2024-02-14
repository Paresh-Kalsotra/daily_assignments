//-------- object creation
const student = {
  Name: "virat",
  age: 20,
  grade: "a",
  subjects: ["mathematics", "statistics", "programming", "economics"],
  marks: [80, 60, 70, 90],
};

//-----------------------------
//func def to display information
function displayInfo(message) {
  console.log(message + this.Name);
  console.log(this.Name);
  console.log(this.age);
  console.log(this.grade);
}

// binding object and func
const boundDisplayInfo = displayInfo.bind(student);

boundDisplayInfo("hello !!"); //calling bounded func

//func call using call and apply
displayInfo.call(student, "Details of student, ");
boundDisplayInfo.apply(null, ["Details of "]);

//----------------------------
subArray = [" english", " history", " biology"];

// function callback
function processSubjects(arr, func) {
  let newarray = arr.concat(func(subArray));
  console.log(newarray);
}
const ret = (Array) => Array;

processSubjects(student.subjects, ret);

//------------------------
//map and filter

function doubleGrade(array) {
  return array.map((x) => x * 2); //map method
}

function passingSubject(arr) {
  let passSub = [];
  arr.filter((marks, key) => {
    if (marks >= 70) {
      passSub.push(student.subjects[key]);
    }
  });
  return passSub;
}

console.log(`Original Grades: ${student.marks}`);
console.log(`modified Grades: ${doubleGrade(student.marks)}`); //calling func with map method

console.log(`passed subject: ${passingSubject(student.marks)}`); //calling func with filter method
