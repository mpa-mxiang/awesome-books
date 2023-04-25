class Display {
  books = [];

<<<<<<< HEAD
  bookListContainer = document.getElementById('bookList');

  constructor() {
    if (localStorage.getItem('books')) {
      this.books = JSON.parse(localStorage.getItem('books')).map((book) => new Book(book.title, book.author, book.id));
    }
  }

  addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = { title, author };
    bookCollection.push(book);
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
    displayBooks();
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
  }

  render() {

  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

// Load saved book collection from local storage
let bookCollection = localStorage.getItem('bookCollection');
=======
// Load saved book collection from local storage
let bookCollection = localStorage.getItem("bookCollection");
>>>>>>> origin/temp
if (bookCollection) {
  bookCollection = JSON.parse(bookCollection);
} else {
  bookCollection = [];
}

const typedTitle = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const books = document.getElementById('book-form');
const bookData = JSON.parse(localStorage.getItem('bookData')) || {};
const savedData = JSON.parse(localStorage.getItem('bookData'));
<<<<<<< HEAD
=======

>>>>>>> origin/temp
if (bookData.title) {
  typedTitle.value = bookData.title;
}
if (bookData.author) {
  authorInput.value = bookData.author;
}
books.addEventListener('input', (event) => {
  bookData[event.target.name] = event.target.value;
<<<<<<< HEAD
  localStorage.setItem('formData', JSON.stringify(bookData));
});
if (savedData) {
  authorInput.value = savedData.author;
  typedName.value = savedData.title;
}
// error is here
book.addEventListener('submit', () => {
  localStorage.clear();
});
// Function to display all books saved in the collection
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = '';
  bookCollection.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = `<h2>${book.title}</h2><p>${book.author}</p><button class="removeButton" data-title="${book.title}">Remove</button>`;
=======
  localStorage.setItem('bookData', JSON.stringify(bookData));
});
if (savedData) {
  authorInput.value = savedData.author;
  typedTitle.value = savedData.title;
}

books.addEventListener('submit', () => {
  localStorage.clear();
});

// Function to display all books saved in the collection
function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  bookCollection.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `<h2>${book.title}</h2><p>${book.author}</p><button class="removeButton" data-title="${book.title}">Remove</button><hr />`;
>>>>>>> origin/temp
    bookList.appendChild(bookDiv);
  });
}

// Function to add a new book to the collection
function addBook() {
<<<<<<< HEAD
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const book = { title, author };
  bookCollection.push(book);
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  displayBooks();
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
=======
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const book = { title, author };
  bookCollection.push(book);
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
  displayBooks();
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
>>>>>>> origin/temp
}

// Function to remove a book from the collection
function removeBook(title) {
  bookCollection = bookCollection.filter((book) => book.title !== title);
<<<<<<< HEAD
  localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
=======
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
>>>>>>> origin/temp
  displayBooks();
}

// Add event listener for form submission
<<<<<<< HEAD
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
=======
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
>>>>>>> origin/temp
  e.preventDefault();
  addBook();
});

// Add event listener for remove button clicks (using event delegation)
<<<<<<< HEAD
const bookList = document.getElementById('bookList');
bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('removeButton')) {
    const { title } = e.target.dataset;
=======
const bookList = document.getElementById("bookList");
bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    const title = e.target.dataset.title;
>>>>>>> origin/temp
    removeBook(title);
  }
});

// Display the initial book collection
displayBooks();
