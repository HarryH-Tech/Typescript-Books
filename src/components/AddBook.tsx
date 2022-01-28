import React, { FC, useState, ChangeEvent } from 'react';
import '../styles/AddBook.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';

import { IBook, IBookList } from '../Types';

type Props = {
  bookList: IBookList[];
  setBookList: React.Dispatch<React.SetStateAction<any>>;
};

const AddBook: FC<Props> = ({ bookList, setBookList }): JSX.Element => {
  console.log(bookList);
  const [book, setBook] = useState<IBook>({
    id: 0,
    title: '',
    author: '',
    description: '',
    releaseDate: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const { id, title, author, description, releaseDate } = book;

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setErrorMessage('');
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const addBook = (): void => {
    if (!title || !author || !description || !releaseDate) {
      setErrorMessage(
        'Please ensure all fields are filled in before adding your book.'
      );
    } else {
      const newBook = {
        bookId: Math.random(),
        bookTitle: title,
        bookAuthor: author,
        bookDescription: description,
        bookReleaseDate: releaseDate,
      };
      setBookList([...bookList, newBook]);

      setBook({
        id: 0,
        title: '',
        author: '',
        description: '',
        releaseDate: '',
      });
    }
  };

  return (
    <>
      <Box component="form" className="form-container">
        <TextField
          name="title"
          value={book.title}
          onChange={handleInputChange}
          type="text"
          placeholder="Title"
        />
        <TextField
          name="author"
          value={book.author}
          onChange={handleInputChange}
          type="text"
          placeholder="Author"
        />
        <TextField
          name="description"
          multiline
          value={book.description}
          onChange={handleInputChange}
          maxRows={5}
          type="text"
          placeholder="Description"
        />
        <TextField
          name="releaseDate"
          value={book.releaseDate}
          onChange={handleInputChange}
          type="number"
          placeholder="Release Year"
        />
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <div className="button-container">
          <Button onClick={addBook} variant="contained" className="form-button">
            Add Book
          </Button>
        </div>
      </Box>
      <br />
    </>
  );
};

export default AddBook;
