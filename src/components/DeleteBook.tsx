import React, { FC, MouseEvent, useState } from 'react';
import { IBook, IBookList } from '../Types';
import Button from '@mui/material/Button';
import {  Modal, Typography, TextField, Box } from '@mui/material';

type Props = {
  bookList: IBookList[];
  setBookList: React.Dispatch<React.SetStateAction<any>>;
  id: number;
  bookTitle: string
};

const DeleteBook: FC<Props> = ({ bookList, setBookList, id, bookTitle }): JSX.Element => {
const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  
  const deleteBook = (e: MouseEvent, bookId: number) => {
  console.log(e, bookId)

      e.preventDefault();
      setBookList(bookList.filter((book) => book.bookId !== bookId));
   
  };


  const DeleteModal = () => (
    <>
    <Modal open={openDeleteModal} onClose={() =>setOpenDeleteModal(false)}>
    <Box className="modal-box">
      <h4>Are you sure you want to delete "{bookTitle}"</h4>
  
      <div className="button-container">
          <Button
               variant="outlined"
            color="error"
            className="button"
      onClick={event => deleteBook(event, id)}
            >
            Delete Book
          </Button>
          <Button
            variant="outlined"
            className="button"
            onClick={() => setOpenDeleteModal(false)}
          >
            Cancel
          </Button>
        </div>
        </Box>
    </Modal>

   
    </>
  );



  return (
    <>
      <Button
        sx={{ m: 2 }}
        variant="outlined"
        color="error"
        onClick={() => setOpenDeleteModal(true)}
      >
        Delete Book
      </Button>

      {openDeleteModal && <DeleteModal/>}
    </>
  );
};

export default DeleteBook;
