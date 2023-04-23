
const typedTitle = document.querySelector('.title');
const authorInput = document.querySelector('.author');
const messageInput = document.querySelector('#comments');
const books = document.getElementById('contact-form');
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
