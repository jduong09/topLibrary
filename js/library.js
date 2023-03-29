function arrangeLibrary(library) {
  const divBooks = document.getElementById('div-books');

  divBooks.innerHTML = '';

  // Write a function that loops through the array and displays each book on the page.
  for (let i = 0; i < library.length; i++) {
    const book = library[i];
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('div-card');

    const titleHeader = document.createElement('h2');
    titleHeader.classList.add('book-title');
    titleHeader.innerHTML = book.title;

    const bookAuthor = document.createElement('span');
    bookAuthor.classList.add('book-author');
    bookAuthor.innerHTML = book.author;

    const publicationDate = document.createElement('span');
    publicationDate.classList.add('book-publication-date');
    publicationDate.innerHTML = book.publicationDate;

    const pages = document.createElement('span');
    pages.classList.add('book-pages');
    pages.innerHTML = book.pages;

    const genreList = document.createElement('ul');
    genreList.classList.add('ul-genres');
    for (let j = 0; j < book.genre; j++) {
      const genreName = book.genre[j];
      const listItem = document.createElement('li');
      listItem.innerHTML = genreName;
      genreList.append(listItem);
    }

    cardDiv.append(titleHeader, bookAuthor, publicationDate, pages, genreList);
    divBooks.append(cardDiv);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const buttonNewBook = document.getElementById('button-new-book');
  const formNewEntry = document.getElementById('form-new-book');
  const divForm = document.getElementById('div-form');

  let myLibrary = [
    {
      title: 'And Then There Were None',
      author: 'Agatha Christie',
      publicationDate: '1939-11-06',
      pages: 272,
      genre: ['Mystery', 'Crime', 'Psychological Thriller']
    },
    {
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      publicationDate: '1869-01-01',
      pages: 1225,
      genre: ['Historical']
    },
    {
      title: "The High King's Golden Tongue",
      author: 'Megan Derr',
      publicationDate: '2012-05-01',
      pages: 41,
      genre: ['M M Romance', 'Historical', 'Fantasy']
    }
  ];

  arrangeLibrary(myLibrary);

  function Book() {
    // constructor...
  }

  function addBookToLibrary(book) {
    // Do stuff here...
    myLibrary.push(book);


  }

  buttonNewBook.addEventListener('click', (e) => {
    e.preventDefault();

    // open form modal.
    divForm.classList.remove('hide');
  });

  // Grab Form entry, make new book object and push into myBooks array.
  formNewEntry.addEventListener('submit', (e) => {
    e.preventDefault();
    const formElements = formNewEntry.elements;
    const newBook = {};

    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      
      if (element.tagName === 'button') {
        continue;
      }

      newBook[element.name] = element.value;
    }

    addBookToLibrary(newBook);
    arrangeLibrary(myLibrary);
    console.log(myLibrary);
  });


});