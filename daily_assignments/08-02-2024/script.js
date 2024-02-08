let purpose,
  active_status = "yes";
id = 1;
libraryArray = [];

function Book(title, author, isBorrowed = false) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.isBorrowed = isBorrowed;
}

function addBook(title, author, isBorrowed = false) {
  libraryArray.push(new Book(title, author, isBorrowed));
  id++;
  return "Book Added";
}

function borrowBook(id) {
  let flag = 0;
  for (let bookdetails of libraryArray) {
    if (bookdetails.id == id && bookdetails.isBorrowed == false) {
      alert("Book Available for borrowing");
      bookdetails.isBorrowed = true;
      flag++;
      break;
    }
  }
  if (flag == 0) {
    alert("Book unavailable");
  }
}

function returnBook(id) {
  for (let bookdetails of libraryArray) {
    if (bookdetails.id == id) {
      bookdetails.isBorrowed = false;
      alert("Thank you for Returning the book");
      break;
    }
  }
}

function listAvailableBooks() {
  let list = [];
  for (let bookDetails of libraryArray) {
    if (bookDetails.isBorrowed == false) {
      list.push(
        `\n Id = ${bookDetails.id} , ${bookDetails.title} by ${bookDetails.author} `
      );
    }
  }
  return list;
}

function searchBook(title) {
  let book = null;
  for (let bookdetails of libraryArray) {
    if (bookdetails.title == title) {
      book = `Details: ID= ${bookdetails.id}, ${bookdetails.title} by ${bookdetails.author}`;
    }
  }
  return book;
}

//----------------------------------------
function managementSystem() {
  purpose = parseInt(
    prompt(
      "State your purpose:\n Enter 1 to Add a book\n Enter 2 to Borrow a book \n Enter 3 to Return a book \n Enter 4 to View list of available books \n Enter 5 to Search for a book"
    )
  );

  switch (purpose) {
    case 1:
      input_title = prompt("Enter Book Title");
      input_author = prompt("Enter Author name");
      alert(addBook(input_title, input_author));
      break;
    case 2:
      input_id = parseInt(
        prompt("Enter Book Id form the available list" + listAvailableBooks())
      );
      alert(input_id);
      borrowBook(input_id);
      break;
    case 3:
      input_id = parseInt(prompt("Enter Book Id"));
      returnBook(input_id);
      break;
    case 4:
      alert(" Available books:" + listAvailableBooks());
      break;
    case 5:
      input_title = prompt("Enter Book Title");
      alert(searchBook(input_title));
      break;
    default:
      alert;
  }

  active_status = prompt("Do you have another request?: yes or no");
  console.log(libraryArray);
  if (active_status == "yes") {
    managementSystem();
  }
}
//----------------------------------------------

addBook("Burning Days", " John", true);
addBook("White mountain", " Amit", true);
addBook("Hardwork beats Talent", "Will", false);
addBook("Into the mist", " Emily ");

alert("Welcome to library management system");
managementSystem();
