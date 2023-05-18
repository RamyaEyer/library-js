let myLibrary = [];

let bookInfo = document.getElementById("book-info");
let library = document.getElementById("library");


/*Book Object constructor*/

function Book(title, author, year, readStatus) {

  this.title = title;
  this.author = author;
  this.year = year;
  this.readStatus = readStatus;

}

/* When clicking 'Add Book' button, form to enter in values for new book appears. */

function revealForm(){

  bookInfo.style.display = "block";

}

/*Taking book information, creating a new book object and add book to myLibrary array. Remove form when submitted. */

function submitBookInfo(){

  let bookTitle = document.getElementById("title");
  let bookAuthor = document.getElementById("author");
  let bookYear = document.getElementById("year");
  let bookReadStatus = document.getElementById("read").checked;
  let bookMade = new Book(bookTitle, bookAuthor, bookYear, bookReadStatus);
  myLibrary.push(bookMade);
  bookInfo.style.display = "none";
  printBookInfo();
  
}

/*Create and display book info and create buttons*/

function printBookInfo(){

  let i = myLibrary.length - 1;
  var book = document.createElement("div");
  book.id = "book";
  library.appendChild(book);
  displayInfo(book, i);
  createButtons(book);

}

/*Prints information from Book Object to page.*/

function displayInfo(book, i){

  displayTitle = document.createElement("div");
  displayTitle.id = "book-title";
  displayTitle.textContent = "Title: " + myLibrary[i].title.value;
  book.appendChild(displayTitle);

  displayAuthor = document.createElement("div");
  displayAuthor.id = "book-author";
  displayAuthor.textContent = "Author: " + myLibrary[i].author.value;
  book.appendChild(displayAuthor); 

  displayYear = document.createElement("div");
  displayYear.id = "book-year";
  displayYear.textContent = "Year: " + myLibrary[i].year.value;
  book.appendChild(displayYear);

}

/* Creates "buttons" (properties but it's a keyword) in current book with remove book and read (Y/N) functionalities*/

function createButtons(book, i){

  var buttons = document.createElement("div");
  buttons.id = "buttons";
  book.appendChild(buttons);
  
  var readCheck = document.createElement("INPUT");
  readCheck.setAttribute("type", "checkBox");
  var removeInfo = document.createElement("BUTTON");

  readCheck.id = "read-check";
  readCheck.onchange = function(){changeCheck(book)};

  removeInfo.textContent = "Remove Book";
  removeInfo.id = "remove-info";
  removeInfo.onclick = function(){removeBook(book)};

  buttons.appendChild(readCheck);
  buttons.appendChild(removeInfo);

}

function changeCheck(book){

  book.readStatus = document.getElementById("read-check").checked;

}

function removeBook(book){

  book.remove();

}












