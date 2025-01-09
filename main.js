const myLibrary = [];

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");
const myForm = document.querySelector("#book-form");
const deleteButton = document.createElement("button");
deleteButton.innerText = "Detele";
deleteButton.setAttribute("class", "delete-button");

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

function displayLibrary() {
    bookContainer.innerHTML = "";
    myLibrary.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.setAttribute("class", "my-book-card");
        bookElement.textContent = book.sayInfo();
        bookContainer.appendChild(bookElement);
        bookContainer.appendChild(deleteButton)
    });
}

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get("title");
    const author = formData.get("author");
    const pages = parseInt(formData.get("pages"));
    const read = formData.get("read");

    const newBook = new Book(title, author, pages, read);

    addBookToLibrary(newBook);  
    displayLibrary();  
});

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
    dialog.showModal();
});

// "Close" button closes the dialog
submitButton.addEventListener("click", () => {
    dialog.close();
});

const bookContainer = document.querySelector("#container");
const addBook = document.querySelector(".add-book");
