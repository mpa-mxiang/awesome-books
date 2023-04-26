const typedTitle = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const books = document.getElementById('form');
const bookData = JSON.parse(localStorage.getItem('bookData')) || {};
const savedData = JSON.parse(localStorage.getItem('bookData'));

if (bookData.title) {
  typedTitle.value = bookData.title;
}
if (bookData.author) {
  authorInput.value = bookData.author;
}
books.addEventListener('input', (event) => {
  bookData[event.target.name] = event.target.value;
  localStorage.setItem('bookData', JSON.stringify(bookData));
});
if (savedData) {
  authorInput.value = savedData.author;
  typedTitle.value = savedData.title;
}

books.addEventListener('submit', () => {
  localStorage.clear();
});