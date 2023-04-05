/*
let myLibrary = [
  new Book('And Then There Were None', 'Agatha Christie', '1939-11-06', 272, ['Mystery', 'Crime', 'Psychological Thriller'], true),
  new Book('War and Peace', 'Leo Tolstoy', '1869-01-01', 1225, ['Historical'], true),
  new Book("The High King's Golden Tongue", 'Megan Derr', '2012-05-01', 41, ['M M Romance', 'Historical', 'Fantasy'], false),
];

function Book(title, author, publicationDate, pages, genres, read) {
  this.title = title;
  this.author = author;
  this.publicationDate = publicationDate;
  this.pages = pages;
  this.genres = genres;
  this.read = read;


  this.deleteBook = function(idx) {
    myLibrary.splice(idx, 1);
    arrangeLibrary(myLibrary);
  }

  this.toggleRead = function() {
    this.read = !this.read;
    arrangeLibrary(myLibrary);
  }

}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function arrangeLibrary(library) {
  const divBooks = document.getElementById('div-books');

  divBooks.innerHTML = '';

  // Write a function that loops through the array and displays each book on the page.
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const cardDiv = document.createElement('div');
    cardDiv.setAttribute('data-index', `${i}`);
    cardDiv.classList.add('div-card');

    const titleHeader = document.createElement('h2');
    titleHeader.classList.add('book-title');
    titleHeader.innerHTML = book.title;

    const bookAuthor = document.createElement('span');
    bookAuthor.classList.add('book-author');
    bookAuthor.innerHTML = `Author: ${book.author}`;

    const publicationDate = document.createElement('span');
    publicationDate.classList.add('book-publication-date');
    publicationDate.innerHTML = `Publication Date: ${book.publicationDate}`;

    const pages = document.createElement('span');
    pages.classList.add('book-pages');
    pages.innerHTML = `Pages: ${book.pages}`;

    const genreList = document.createElement('ul');
    genreList.classList.add('ul-genres');
    for (let j = 0; j < book.genres.length; j++) {
      const genreName = book.genres[j];
      const listItem = document.createElement('li');
      listItem.innerHTML = genreName;
      genreList.append(listItem);
    }

    const isRead = document.createElement('span');
    isRead.classList.add('book-read');
    isRead.innerHTML = `Read: ${book.read}`;

    const divButtons = document.createElement('div');
    divButtons.classList.add('div-buttons');

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('btn-delete');
    buttonDelete.innerHTML = 'Delete';

    buttonDelete.addEventListener('click', (e) => {
      e.preventDefault();

      const divCard = e.currentTarget.parentElement.parentElement;

      const dataIndex = divCard.getAttribute('data-index');
      myLibrary[dataIndex].deleteBook(dataIndex);
    });

    const buttonRead = document.createElement('button');
    buttonRead.classList.add('btn-read');
    buttonRead.innerHTML = 'Read';

    buttonRead.addEventListener('click', (e) => {
      e.preventDefault();

      const divCard = e.currentTarget.parentElement.parentElement;

      const dataIndex = divCard.getAttribute('data-index');

      if (buttonRead.classList.contains('read')) {       
        myLibrary[dataIndex].toggleRead();
        buttonRead.classList.remove('read');
      } else {
        myLibrary[dataIndex].toggleRead();
        buttonRead.classList.add('read');
      }
    });

    divButtons.append(buttonDelete, buttonRead);

    cardDiv.append(titleHeader, bookAuthor, publicationDate, pages, genreList, isRead, divButtons);
    divBooks.append(cardDiv);
  }
}
*/

class Book {
  constructor(title, author, publicationDate, pages, genres, read) {
    this.title = title;
    this.author = author;
    this.publicationDate = publicationDate;
    this.pages = pages;
    this.genres = genres;
    this.read = read;
  }

  toggleRead = () => {
    this.read = !this.read;
  }
}

class Library {
  constructor() {
    this.storage = [
      new Book('And Then There Were None', 'Agatha Christie', '1939-11-06', 272, ['Mystery', 'Crime', 'Psychological Thriller'], true),
      new Book('War and Peace', 'Leo Tolstoy', '1869-01-01', 1225, ['Historical'], true),
      new Book("The High King's Golden Tongue", 'Megan Derr', '2012-05-01', 41, ['M M Romance', 'Historical', 'Fantasy'], false)
    ]
  }

  addBookToLibrary(book) {
    this.storage.push(book);
  }

  deleteBook(idx) {
    this.storage.splice(idx, 1);
    this.arrangeLibrary();
  }

  arrangeLibrary() {
    const divBooks = document.getElementById('div-books');
  
    divBooks.innerHTML = '';
  
    // Write a function that loops through the array and displays each book on the page.
    for (let i = 0; i < this.storage.length; i++) {
      const book = this.storage[i];
      const cardDiv = document.createElement('div');
      cardDiv.setAttribute('data-index', `${i}`);
      cardDiv.classList.add('div-card');
  
      const titleHeader = document.createElement('h2');
      titleHeader.classList.add('book-title');
      titleHeader.innerHTML = book.title;
  
      const bookAuthor = document.createElement('span');
      bookAuthor.classList.add('book-author');
      bookAuthor.innerHTML = `Author: ${book.author}`;
  
      const publicationDate = document.createElement('span');
      publicationDate.classList.add('book-publication-date');
      publicationDate.innerHTML = `Publication Date: ${book.publicationDate}`;
  
      const pages = document.createElement('span');
      pages.classList.add('book-pages');
      pages.innerHTML = `Pages: ${book.pages}`;
  
      const genreList = document.createElement('ul');
      genreList.classList.add('ul-genres');
      for (let j = 0; j < book.genres.length; j++) {
        const genreName = book.genres[j];
        const listItem = document.createElement('li');
        listItem.innerHTML = genreName;
        genreList.append(listItem);
      }
  
      const isRead = document.createElement('span');
      isRead.classList.add('book-read');
      isRead.innerHTML = `Read: ${book.read}`;
  
      const divButtons = document.createElement('div');
      divButtons.classList.add('div-buttons');
  
      const buttonDelete = document.createElement('button');
      buttonDelete.classList.add('btn-delete');
      buttonDelete.innerHTML = 'Delete';
  
      buttonDelete.addEventListener('click', (e) => {
        e.preventDefault();
  
        const divCard = e.currentTarget.parentElement.parentElement;
  
        const dataIndex = divCard.getAttribute('data-index');
        this.deleteBook(dataIndex);
      });
  
      const buttonRead = document.createElement('button');
      buttonRead.classList.add('btn-read');
      buttonRead.innerHTML = 'Read';
  
      buttonRead.addEventListener('click', (e) => {
        e.preventDefault();
  
        const divCard = e.currentTarget.parentElement.parentElement;
  
        const dataIndex = divCard.getAttribute('data-index');
  
        if (buttonRead.classList.contains('read')) {       
          this.storage[dataIndex].toggleRead();
          buttonRead.classList.remove('read');
        } else {
          this.storage[dataIndex].toggleRead();
          buttonRead.classList.add('read');
        }

        this.arrangeLibrary();
      });
  
      divButtons.append(buttonDelete, buttonRead);
  
      cardDiv.append(titleHeader, bookAuthor, publicationDate, pages, genreList, isRead, divButtons);
      divBooks.append(cardDiv);
    }
  }
}

function clearInputs() {
  const formNewEntry = document.getElementById('form-new-book');
  const formElements = formNewEntry.elements;

  for (let i = 0; i < 5; i++) {
    formElements[i].value = '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonNewBook = document.getElementById('button-new-book');
  const formNewEntry = document.getElementById('form-new-book');
  const divForm = document.getElementById('div-form');
  const library = new Library();

  library.arrangeLibrary();

  buttonNewBook.addEventListener('click', (e) => {
    e.preventDefault();

    divForm.classList.remove('hide');
  });

  formNewEntry.addEventListener('submit', (e) => {
    e.preventDefault();
    const formElements = formNewEntry.elements;
    const newBook = new Book(formElements[0].value, formElements[1].value, formElements[2].value, formElements[3].value, [formElements[4].value], false);
    
    library.addBookToLibrary(newBook);
    library.arrangeLibrary();
    clearInputs();
    divForm.classList.add('hide');
  });
});