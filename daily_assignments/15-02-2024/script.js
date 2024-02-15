const url1 = "https://jsonplaceholder.typicode.com/users";
const url2 = "https://jsonplaceholder.typicode.com/albums";
const url3 = "https://jsonplaceholder.typicode.com/todos";

// async function to fetch data
async function getData(url) {
  const fet = await fetch(url);
  const data = await fet.json();
  return data;
}
//destructuring nested object in string
function destructure(value) {
  if (typeof value == "object") {
    let destValue = "";
    for (key in value) {
      if (typeof value[key] == "object") {
        destValue += `${key}: ${destructure(value[key])}`;
      } else {
        destValue += value[key] + " ";
      }
    }
    value = destValue;
  }
  return value;
}

//function to display data to ui
async function disp(data, table_id) {
  const table = document.getElementById(table_id);
  //table heading row
  const row = table.insertRow();
  for (const key in data[0]) {
    const th = document.createElement("th");
    th.innerText = key;
    row.appendChild(th);
  }
  //table content
  for (const obj of data) {
    const row = table.insertRow();
    for (const key in obj) {
      const td = document.createElement("td");
      td.innerText = destructure(obj[key]);
      row.appendChild(td);
    }
  }
}

let user_pr = getData(url1);
console.log(user_pr);
let album_pr = getData(url2);
console.log(album_pr);
let todos_pr = getData(url3);
console.log(todos_pr);

user_pr.then((resolve) => disp(resolve, "userTable"));
album_pr.then((resolve) => disp(resolve, "albumTable"));
todos_pr.then((resolve) => disp(resolve, "todosTable"));
