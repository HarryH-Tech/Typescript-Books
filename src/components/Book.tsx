import React, {
  FC,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useState,
} from 'react';
import DeleteBook from './DeleteBook';
import EditBook from './EditBook';
import Button from '@mui/material/Button';

import { IBookList } from '../Types';
import '../styles/Book.css';

import { Container, Typography, Box, Grid, Divider } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  bookId: number;
  bookTitle: string;
  bookAuthor: string;
  bookDescription: string;
  bookReleaseDate: string;
  bookList: IBookList[];
  setBookList: Dispatch<SetStateAction<any>>;
};

const Book: FC<Props> = ({
  bookId,
  bookTitle,
  bookAuthor,
  bookDescription,
  bookReleaseDate,
  bookList,
  setBookList,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);

  const openModal = (e: MouseEvent) => {
    e.preventDefault();
    setOpenEditModal(true);
  };

  return (
    <>
      <Container className="container">
        <Box>
          <Typography align="center" variant="h5" className="title">
            {bookTitle}
          </Typography>
          <Grid container className="grid">
            <Grid item xs={6}>
              <ul className="list-item">
                <li>Author(s): {bookAuthor}</li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <ul className="list-item">
                <li>Release Date: {bookReleaseDate}</li>
              </ul>
            </Grid>
          </Grid>
          <Divider />
          <div className="summary-container">
            <h3>Summary</h3>
            <p>{bookDescription}</p>
          </div>
          <Divider />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <DeleteBook
              id={bookId}
              bookTitle={bookTitle}
              bookList={bookList}
              setBookList={setBookList}
     
            />
            <Button
              sx={{ m: 2 }}
              onClick={(event) => openModal(event)}
              variant="outlined"
              color="success"
         
            >
              Edit Book
            </Button>
            {openEditModal && (
              <EditBook
                bookId={bookId}
                bookTitle={bookTitle}
                bookAuthor={bookAuthor}
                bookDescription={bookDescription}
                bookReleaseDate={bookReleaseDate}
                bookList={bookList}
                setBookList={setBookList}
                openEditModal={openEditModal}
                setOpenEditModal={setOpenEditModal}
              />
            )}
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Book;
