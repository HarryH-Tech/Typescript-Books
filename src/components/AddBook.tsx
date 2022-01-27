import React, { FC, useState, ChangeEvent } from 'react';
import '../styles/AddBook.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { IBook, IBookList } from '../Types';

type Props = {
  bookList: IBookList[];
  setBookList: React.Dispatch<React.SetStateAction<any>>;
};

const AddBook: FC<Props> = ({ bookList, setBookList }): JSX.Element => {
  console.log(bookList);
  const [book, setBook] = useState<IBook>({
    id: Math.random(),
    title: '',
    author: '',
    description: '',
    releaseDate: '',
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setBook({ ...book, [event.target.name]: event.target.value });
    console.log(book);
  };

  const addBook = (): void => {
    const newBook = {
      bookId: Math.random(),
      bookTitle: book.title,
      bookAuthor: book.author,
      bookDescription: book.description,
      bookReleaseDate: book.releaseDate,
    };

    setBookList([...bookList, newBook]);
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
        <div className="button-container">
          <Button onClick={addBook} variant="contained" className="form-button">
            Add Book
          </Button>
        </div>
      </Box>
    </>
  );
};

export default AddBook;
