// Load saved book collection from local storage
let bookCollection = localStorage.getItem("bookCollection");
if (bookCollection) {
  bookCollection = JSON.parse(bookCollection);
} else {
  bookCollection = [];
}

// Function to display all books saved in the collection
function displayBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  bookCollection.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `<h2>${book.title}</h2><p>${book.author}</p><button class="removeButton" data-title="${book.title}">Remove</button>`;
    bookList.appendChild(bookDiv);
  });
}

// Function to add a new book to the collection
function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const book = { title, author };
  bookCollection.push(book);
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
  displayBooks();
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
}

// Function to remove a book from the collection
function removeBook(title) {
  bookCollection = bookCollection.filter((book) => book.title !== title);
  localStorage.setItem("bookCollection", JSON.stringify(bookCollection));
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
