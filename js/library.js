document.addEventListener('DOMContentLoaded', () => {
  const divBooks = document.getElementById('div-books');

  let myLibrary = [
    {
      name: 'And Then There Were None',
      author: 'Agatha Christie',
      publicationDate: '11/6/1939',
      pages: 272,
      genre: ['Mystery', 'Crime', 'Psychological Thriller']
    }
  ];

  function Book() {
    // constructor...
  }

  function addBookToLibrary(book) {
    // Do stuff here...
    myLibrary.push(book);
  }

  // Write a function that loops through the array and displays each book on the page.
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('div-card');

    const titleHeader = document.createElement('h2');
    titleHeader.classList.add('book-title');
    titleHeader.innerHTML = book.name;

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
});