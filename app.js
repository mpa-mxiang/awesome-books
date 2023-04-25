class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class BookCollection {
  constructor() {
    let bookCollection = localStorage.getItem("bookCollection");
    this.bookList = bookCollection ? JSON.parse(bookCollection) : [];
  }

  // Function to display all books saved in the collection
  displayBooks() {
    const bookListElement = document.getElementById("bookList");
    bookListElement.innerHTML = "";
    this.bookList.forEach((book) => {
      const bookDiv = document.createElement("li");
      bookDiv.innerHTML = `<h2>${book.title}</h2><p>${book.author}</p><button class="removeButton" data-title="${book.title}">Remove</button>`;
      bookListElement.appendChild(bookDiv);
    });
  }

  // Function to add a new book to the collection
  addBook(title, author) {
    const book = new Book(title, author);
    this.bookList.push(book);
    localStorage.setItem("bookCollection", JSON.stringify(this.bookList));
    this.displayBooks();
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
  }

  // Function to remove a book from the collection
  removeBook(title) {
    this.bookList = this.bookList.filter((book) => book.title !== title);
    localStorage.setItem("bookCollection", JSON.stringify(this.bookList));
    this.displayBooks();
  }
}

// Create a new instance of the BookCollection class
const myBookCollection = new BookCollection();

// Add event listener for form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  myBookCollection.addBook(title, author);
});

// Add event listener for remove button clicks (using event delegation)
const bookListElement = document.getElementById("bookList");
bookListElement.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    const title = e.target.dataset.title;
    myBookCollection.removeBook(title);
  }
});

// Display the initial book collection
myBookCollection.displayBooks();
