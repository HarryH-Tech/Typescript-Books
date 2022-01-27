import React, { FC, MouseEvent } from 'react';
import { IBook, IBookList } from '../Types';
import Button from '@mui/material/Button';

type Props = {
  bookList: IBookList[];
  setBookList: React.Dispatch<React.SetStateAction<any>>;
  id: number;
};

const DeleteBook: FC<Props> = ({ bookList, setBookList, id }): JSX.Element => {
  const deleteBook = (e: MouseEvent, bookId: number) => {
    e.preventDefault();
    setBookList(bookList.filter((book) => book.bookId !== bookId));
  };

  return (
    <>
      <Button
        sx={{ m: 2 }}
        variant="outlined"
        color="error"
        onClick={(event) => deleteBook(event, id)}
      >
        Delete Book
      </Button>
    </>
  );
};

export default DeleteBook;
