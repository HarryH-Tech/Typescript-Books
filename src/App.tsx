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
      bookTitle: 'The Age of AI',
      bookAuthor: 'Henry Kissinger, Eric Schmidt and Daniel Huttenlocher',
      bookDescription:
        "Are robots going to take my job? How are smartphones affecting my kids? Do I need to worry about privacy when I get online or ask Siri for directions? Whatever questions you have about AI, The Age of AI gives you insights on how to navigate this brand-new world as you apply God's ageless truths to your life and future",
      bookReleaseDate: '2020',
    },
    {
      bookId: 2,
      bookTitle: 'Amazon Unbound',
      bookAuthor: 'Brad Stone',
      bookDescription:
        'This New York Times bestseller is a “masterful” (The Washington Post), “juicy tour of the company [Jeff] Bezos built” (The New York Times Book Review), revealing the most important business story of our time by the bestselling author of The Everything Store.',
      bookReleaseDate: '2021',
    },
    {
      bookId: 3,
      bookTitle: 'Tim Cook: The Genius Who Took Apple To The Next Level',
      bookAuthor: 'Bob3',
      bookDescription:
        "But seven years later, as journalist Leander Kahney reveals in this definitive book, things at Apple couldn't be better. Its stock has nearly tripled, making it the world's first trillion dollar company. Under Cook's principled leadership, Apple is pushing hard into renewable energy, labor and environmentally friendly supply chains, user privacy, and highly-recyclable products. From the massive growth of the iPhone to lesser-known victories like the Apple Watch, Cook is leading Apple to a new era of success.",
      bookReleaseDate: '2019',
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
