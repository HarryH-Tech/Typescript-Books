import React, { FC, Dispatch, useState, SetStateAction } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IBookList, IBook } from '../Types';
import Book from './Book';

type Props = {
  books: IBookList[];
  setBookList: Dispatch<SetStateAction<any>>;
};

const BookList: FC<Props> = ({ books, setBookList }) => {
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
