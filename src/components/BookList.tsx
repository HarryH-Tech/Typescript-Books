import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IBookList, IBook } from '../Types';

import Book from './Book';

const BookList = (props: {
  books: IBookList[];
  setBookList: React.Dispatch<React.SetStateAction<any>>;
}) => {
  console.log(props.books);

  const { books, setBookList } = props;

  return (
    <>
      {books &&
        books.map((book) => {
          return (
            <Book
              bookId={book.bookId}
              bookAuthor={book.bookAuthor}
              bookTitle={book.bookTitle}
              bookDescription={book.bookDescription}
              bookReleaseDate={book.bookReleaseDate}
              bookList={books}
              setBookList={setBookList}
              key={uuidv4()}
            />
          );
        })}
    </>
  );
};

export default BookList;
