export default class createBook {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.index = id;
  }

  createNode() {
    const bookDiv = document.createElement('div');
    bookDiv.innerHTML = `<h2>${this.title}</h2><p>${this.author}</p><button class="removeButton" data-title="${this.title}">Remove</button>`;
    return bookDiv;
  }
}