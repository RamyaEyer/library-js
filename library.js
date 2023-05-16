let myLibrary = [];
let bookInfo = document.getElementById("book-info");

/*Book Object constructor*/

function Book(title, author, year, read_status) {

  this.title = title;
  this.author = author;
  this.year = year;
  this.read_status = read_status;

}

/*Add Book Object to my Library Array*/

function addBookToLibrary(bookMade) {

  myLibrary.push(bookMade);
  
}

/* When clicking 'Add Book' button, form to enter in values for new book appears. */

function revealForm(){

  let enterBook = document.querySelector(".enter-book");
  enterBook.style.display = "block";


}

/*Taking book information, creating a new book object and add book to myLibrary array. Remove form when submitted. */

function submitBookInfo(){

  let bookTitle = document.getElementById("title");
  let bookAuthor = document.getElementById("author");
  let bookYear = document.getElementById("year");
  let bookReadStatus = document.getElementById("book-read");
  let bookMade = new Book(bookTitle, bookAuthor, bookYear, bookReadStatus);
  addBookToLibrary(bookMade);
  enterBook.style.display = "none";

}





