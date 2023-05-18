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
  let bookReadStatus = document.getElementById("read");
  let bookMade = new Book(bookTitle, bookAuthor, bookYear, bookReadStatus);
  myLibrary.push(bookMade);
  bookInfo.style.display = "none";
  printBookInfo();
  
}

function printBookInfo(){

  let i = myLibrary.length - 1;
  var book = document.createElement("div");
  book.id = "book";
  library.appendChild(book);
  displayInfo(book, i);
  createButtons(book);

}

function displayInfo(book, i){

  displayTitle = document.createElement("div");
  displayTitle.textContent = myLibrary[i].title.value;
  book.appendChild(displayTitle);

  displayAuthor = document.createElement("div");
  displayAuthor.textContent = myLibrary[i].author.value;
  book.appendChild(displayAuthor);

  displayYear = document.createElement("div");
  displayYear.textContent = myLibrary[i].year.value;
  book.appendChild(displayYear);

}

function createButtons(book){

  var buttons = document.createElement("div");
  buttons.id = "buttons";
  book.appendChild(buttons);
  

  var readYes = document.createElement("BUTTON");
  var readNo  = document.createElement("BUTTON");
  var removeInfo = document.createElement("BUTTON");

  readYes.textContent = "Read";
  readNo.textContent = "Not Read";
  removeInfo.textContent = "Remove Book";

  readYes.id = "read-yes";
  readNo.id = "read-no";
  removeInfo.id = "remove-info";

  buttons.appendChild(readYes);
  buttons.appendChild(readNo);
  buttons.appendChild(removeInfo);

}

function checkReadStatus{




}








