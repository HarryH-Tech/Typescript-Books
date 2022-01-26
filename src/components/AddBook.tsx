import React, { FC, useState, ChangeEvent } from 'react';
import '../styles/AddBook.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { IBook } from '../Types';

type Props = {
  setBookList: React.Dispatch<React.SetStateAction<any>>;
};

const AddBook: FC<Props> = ({ setBookList }): JSX.Element => {
  const [book, setBook] = useState<IBook>({
    id: Math.random(),
    title: '',
    author: '',
    description: '',
    releaseDate: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };

  const addBook = (): void => {};

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

        <Button onClick={addBook} variant="contained" className="form-button">
          Add Book
        </Button>
      </Box>
    </>
  );
};

export default AddBook;
