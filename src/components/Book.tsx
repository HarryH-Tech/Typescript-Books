import React, { FC, MouseEvent, useState } from 'react';
import DeleteBook from './DeleteBook';
import EditBook from './EditBook';
import Button from '@mui/material/Button';

import { IBook, IBookList } from '../Types';
import '../styles/Book.css';

import { Container, Typography, Box, Grid, List, Divider } from '@mui/material';

type Props = {
  id: number;
  title: string;
  author: string;
  description: string;
  releaseDate: string;
  bookList: IBookList[];
  setBookList: React.Dispatch<React.SetStateAction<any>>;
};

const Book: FC<Props> = ({
  id,
  title,
  author,
  description,
  releaseDate,
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
      <Container>
        <Box
          sx={{
            bgcolor: '#fafafa',
            height: '30vh',
            borderRadius: '2rem',
            marginBottom: '1rem',
            padding: '1rem',
          }}
        >
          <Typography align="center" variant="h5">
            {title}
          </Typography>
          <Grid container className="grid">
            <Grid item xs={6}>
              <ul className="list-item">
                <li>Author: {author}</li>
              </ul>
            </Grid>
            <Grid item xs={6}>
              <ul className="list-item">
                <li>Release Date: {releaseDate}</li>
              </ul>
            </Grid>
          </Grid>
          <Divider />
          <div>
            <h3>Summary</h3>
            <p>{description}</p>
          </div>
          <Divider />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <DeleteBook id={id} bookList={bookList} setBookList={setBookList} />
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
                id={id}
                title={title}
                author={author}
                description={description}
                releaseDate={releaseDate}
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
