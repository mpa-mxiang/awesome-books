// Load saved book collection from local storage
let bookCollection = localStorage.getItem("bookCollection");
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
console.log(typedTitle.value)
console.log(savedData)
if (bookData.title) {
  typedTitle.value = bookData.title;
}
if (bookData.author) {
  authorInput.value = bookData.author;
}
console.log(bookData)
console.log(savedData)
books.addEventListener('input', (event) => {
  bookData[event.target.name] = event.target.value;
  localStorage.setItem('formData', JSON.stringify(bookData));
});
console.log(bookData)
console.log(savedData)
if (savedData) {
  authorInput.value = savedData.author;
  typedTitle.value = savedData.title;
}
// error is here
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
    bookList.appendChild(bookDiv);
  });
}

// Function to add a new book to the collection
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const book = { title, author };
  bookCollection.push(book);
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
}

// Function to remove a book from the collection
function removeBook(title) {
  bookCollection = bookCollection.filter((book) => book.title !== title);
  displayBooks();
}

// Add event listener for form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
});

// Add event listener for remove button clicks (using event delegation)
const bookList = document.getElementById("bookList");
bookList.addEventListener("click", (e) => {
  if (e.target.classList.contains("removeButton")) {
    const title = e.target.dataset.title;
    removeBook(title);
  }
});

// Display the initial book collection
displayBooks();