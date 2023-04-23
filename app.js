// Define a global array to store the book collection
let bookCollection = [];

// Function to add a new book to the collection
function addBook() {
    // Get the input values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;

    // Create a new book object and add it to the collection
    const newBook = { title, author };
    bookCollection.push(newBook);

    // Clear the input fields
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";

    // Refresh the book list
    displayBooks();
}

// Function to remove a book from the collection
function removeBook(index) {
    // Remove the book at the given index from the collection
    bookCollection.splice(index, 1);

    // Refresh the book list
    displayBooks();
}

// Function to display all books in the collection
function displayBooks() {
    const bookList = document.getElementById("book-list");

    // Clear the book list
    bookList.innerHTML = "";

    // Add each book to the book list
    for (let i = 0; i < bookCollection.length; i++) {
        const book = bookCollection[i];

        const li = document.createElement("li");
        const title = document.createElement("span");
        const author = document.createElement("span");
        const removeBtn = document.createElement("button");

        title.textContent = book.title;
        author.textContent = ` by ${book.author}`;
        removeBtn.textContent = "Remove";
        removeBtn.addEventListener("click", () => removeBook(i));

        li.appendChild(title);
        li.appendChild(author);
        li.appendChild(removeBtn);
        bookList.appendChild(li);
    }
}

// Add event listener to the Add button
document.getElementById("add-btn").addEventListener("click", addBook);

