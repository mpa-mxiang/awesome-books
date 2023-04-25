import FormBook from './formBook.js';
import Book from './createBook.js';

class Display {
  constructor() {
    if (localStorage.getItem('books')) {
      // eslint-disable-next-line max-len
      // Create new book with the structure of createBook class. Each object(book) will have the method(function) "createNode" that we can later invoke to obtain the final <div> to insert in the index.
      this.books = JSON.parse(localStorage.getItem('books')).map((book) => new Book(book.title, book.author, book.id));
    }
    // We call the "setCurrentForm" method to export the form data.
    this.setCurrentForm();
  }

  books = [];

  workForm = '';

  bookListContainer = document.getElementById('bookList');

  setCurrentForm(name = 'formBook') {
    this.workForm = new FormBook(name);
    // All the content of the form will be stored in "workForm".
    this.workForm.form.onsubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line max-len
    this.addBook(this.workForm.form.title.value, this.workForm.form.author.value, this.books.length + 1);
    this.workForm.form.reset();
  }

  addBook(title, author, index) {
    const book = new Book(title, author, index);
    this.books.push(book);
    this.saveBooks();
    this.render();
  }

  // removeBook(){
  // }

  render() {
    this.bookListContainer.innerHTML = '';
    if (this.books.length === 0) {
      this.bookListContainer.innerHTML = '<h3>There are no books.</h3>';
    } else {
      // In this part we go through all the objects in our matrix
      this.books.forEach((book) => {
        // eslint-disable-next-line max-len
        // By saving the books as objects we have the possibility to add methods and use them later. E.g. We will use the method "createNode" previously saved to create the final <div>.
        const bookNode = book.createNode();
        this.bookListContainer.append(bookNode);
      });
    }
  }

  saveBooks() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

export default new Display();