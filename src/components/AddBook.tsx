import React, { FC } from 'react';
import '../styles/AddBook.css';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddBook: FC = () => {
  return (
    <>
      <Box component="form" className="form-container">
        <TextField type="text" placeholder="Title" />
        <TextField type="text" placeholder="Author" />
        <TextField
          multiline
          maxRows={5}
          type="text"
          placeholder="Description"
        />
        <TextField type="number" placeholder="Release Year" />

        <Button variant="contained" className="form-button">
          Add Book
        </Button>
      </Box>
    </>
  );
};

export default AddBook;
