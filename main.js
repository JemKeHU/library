const myLibrary = [];

const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const submitButton = document.querySelector("dialog button");
const myForm = document.querySelector("#book-form");
const bookContainer = document.querySelector("#container");

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  getInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages, Read: ${this.read}`;
  }
}

function addBookToLibrary(bookObj) {
  myLibrary.push(bookObj);
}

function displayLibrary() {
  // Clear existing books
  bookContainer.innerHTML = "";

  myLibrary.forEach((book, index) => {
    // Create a container for each book
    const bookElement = document.createElement("div");
    bookElement.setAttribute("class", "my-book-card");

    // Display book info
    const bookInfo = document.createElement("p");
    bookInfo.textContent = book.getInfo();
    bookElement.appendChild(bookInfo);

    // Create Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.setAttribute("class", "delete-button");

    // Delete book event
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(index, 1); // Remove book from array
      displayLibrary(); // Re-render the library
    });

    // Create Toggle Read button
    const readStatusButton = document.createElement("button");
    readStatusButton.innerText = "Toggle Read Status";
    readStatusButton.setAttribute("id", "toggleRead");

    // Toggle read status event
    readStatusButton.addEventListener("click", () => {
      book.read = book.read === "Yes" ? "No" : "Yes"; // Toggle status
      bookInfo.textContent = book.getInfo(); // Update displayed info
    });

    // Append buttons to book element
    bookElement.appendChild(deleteButton);
    bookElement.appendChild(readStatusButton);

    // Add the book element to the container
    bookContainer.appendChild(bookElement);
  });
}

// Form submission
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

  // Clear form
  myForm.reset();
  dialog.close();
});

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
submitButton.addEventListener("click", () => {
  dialog.close();
});
