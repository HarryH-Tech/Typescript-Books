import React, { useState, FC, ChangeEvent, MouseEvent } from 'react';
import { IBook, IBookList } from '../Types';
import { Button, Modal, Typography, TextField, Box } from '@mui/material';
import '../styles/EditBook.css';

type Props = {
  bookList: IBookList[];
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  bookDescription: string;
  bookReleaseDate: string;
  openEditModal: boolean;
  setOpenEditModal: React.Dispatch<React.SetStateAction<any>>;
  setBookList: React.Dispatch<React.SetStateAction<any>>;
};

const EditBook: FC<Props> = ({
  bookList,
  setBookList,
  bookId,
  bookTitle,
  bookAuthor,
  bookDescription,
  bookReleaseDate,
  openEditModal,
  setOpenEditModal,
}) => {
  const [book, setBook] = useState<IBook>({
    id: bookId,
    title: bookTitle,
    author: bookAuthor,
    description: bookDescription,
    releaseDate: bookReleaseDate,
  });

  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const updateBook = (event: MouseEvent<HTMLButtonElement>) => {
    // event.preventDefault();
    // const updatedBook = bookList.filter((book) => book.bookId === id);

    // const newBook = {
    //   bookId: Math.random(),
    //   bookTitle: title,
    //   bookAuthor: author,
    //   bookDescription: description,
    //   bookReleaseDate: releaseDate,
    // };

    const newBook = {
      bookId: bookId,
      bookTitle: book.title,
      bookAuthor: book.author,
      bookDescription: book.description,
      bookReleaseDate: book.releaseDate,
    };

    let p = bookList.map((bookq) => {
      if (bookq.bookId === bookId) {
        console.log(book);
        return newBook;
      }
      console.log(bookq);
      return bookq;
    });

    console.log(p);

    setBookList(p);
    setOpenEditModal(false);
  };

  return (
    <Modal open={openEditModal} onClose={handleClose}>
      <Box className="modal-box">
        <h2 className="heading">{book.title}</h2>
        <TextField
          className="input"
          name="title"
          value={book.title}
          onChange={handleInputChange}
        />
        <TextField
          className="input"
          name="author"
          value={book.author}
          onChange={handleInputChange}
        />
        <TextField
          className="input"
          name="description"
          value={book.description}
          onChange={handleInputChange}
        />
        <TextField
          className="input"
          name="releaseDate"
          value={book.releaseDate}
          onChange={handleInputChange}
        />

        <div className="button-container">
          <Button
            variant="outlined"
            color="success"
            className="button"
            onClick={(e) => updateBook(e)}
          >
            Accept
          </Button>
          <Button
            variant="outlined"
            color="error"
            className="button"
            onClick={() => setOpenEditModal(false)}
          >
            Cancel
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditBook;
