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
  createButtons(book, i);

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

/* Creates buttons in current book with remove book and read (Y/N) functionalities*/

function createButtons(book, i){

  var buttons = document.createElement("div");
  buttons.id = "buttons";
  book.appendChild(buttons);
  
  var readButton = document.createElement("BUTTON");
  readButton.id = "read-button";

  if(myLibrary[i].readStatus === true){

    readButton.textContent = "Read";

  }

  else{

    readButton.textContent = "Unread";

  }

  readButton.onclick = function() {changeReadStatus(readButton,i)};

  var removeInfo = document.createElement("BUTTON");
  removeInfo.textContent = "Remove Book";
  removeInfo.id = "remove-info";
  removeInfo.onclick = function(){book.remove()};

  buttons.appendChild(readButton);
  buttons.appendChild(removeInfo);

}

/*Changes text on button to show Read/Unread status*/

function changeReadStatus(readButton, i){

  
  if(myLibrary[i].readStatus === true){


    readButton.textContent = "Unread";
    myLibrary[i].readStatus = false;

  }

  else{

    readButton.textContent = "Read";
    myLibrary[i].readStatus = true;

  }

}














