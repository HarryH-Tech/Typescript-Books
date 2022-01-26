import React, { FC, useState } from 'react';

import { IBookList, IBook } from '../Types';

import Book from './Book';

const BookList = (props: { books: IBookList[] }) => {
  console.log(props.books);

  return <div>HI</div>;
};

export default BookList;
