import React, { FC, useState } from 'react';
import { IBookList } from './Types';

import './styles/App.css';

import AddBook from './components/AddBook';
import BookList from './components/BookList';
import Header from './components/Header';

const App: FC = () => {
  const [bookList, setBookList] = useState<IBookList[]>([
    {
      bookId: 1,
      bookTitle: 'Book1',
      bookAuthor: 'Bob',
      bookDescription: 'Book1 Description',
      bookReleaseDate: '2020',
    },
    {
      bookId: 2,
      bookTitle: 'Book2',
      bookAuthor: 'Bob2',
      bookDescription: 'Book2 Description',
      bookReleaseDate: '2021',
    },
    {
      bookId: 3,
      bookTitle: 'Book3',
      bookAuthor: 'Bob3',
      bookDescription: 'Book3 Description',
      bookReleaseDate: '2022',
    },
  ]);

  console.log(bookList);
  return (
    <div className="App">
      <Header />
      <div>
        <AddBook bookList={bookList} setBookList={setBookList} />
        {bookList && <BookList setBookList={setBookList} books={bookList} />}
      </div>
      <div className="book-list"></div>
    </div>
  );
};

export default App;
