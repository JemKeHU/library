const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.sayInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
};

function addBookToLibrary(bookObj) {
    myLibrary.push(bookObj);
}

const bookContainer = document.querySelector("#container");
const addBook = document.querySelector(".add-book");

function displayLibrary() {
    bookContainer.innerHTML = "";
    myLibrary.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.textContent = book.sayInfo();
        bookContainer.appendChild(bookElement);
    });
}

let book1 = new Book("Miss Shamwoy with magic wand", "James Hedley Chase", 413, "no");
let book2 = new Book("Blown Creeper", "Katrix", 1, "yes");
let book3 = new Book("Jam Air", "Chalotte Bromte", 438, "yes");

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);

displayLibrary();