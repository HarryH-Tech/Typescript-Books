import React, { FC, useState } from 'react';

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
              id={book.bookId}
              author={book.bookAuthor}
              title={book.bookTitle}
              description={book.bookDescription}
              releaseDate={book.bookReleaseDate}
              bookList={books}
              setBookList={setBookList}
            />
          );
        })}
    </>
  );
};

export default BookList;
