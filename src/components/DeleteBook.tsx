import React, { FC, MouseEvent } from 'react';
import { IBook, IBookList } from '../Types';

type Props = {
  bookList: IBookList[];
  setBookList: React.Dispatch<React.SetStateAction<any>>;
  id: number;
};

const DeleteBook: FC<Props> = ({ bookList, setBookList, id }): JSX.Element => {
  const deleteBook = (e: MouseEvent, bookId: number) => {
    e.preventDefault();
    console.log(bookId);
    setBookList(bookList.filter((book) => book.bookId !== bookId));
  };

  return (
    <>
      <button onClick={(event) => deleteBook(event, id)}>
        Delete Book{id}{' '}
      </button>
    </>
  );
};

export default DeleteBook;
