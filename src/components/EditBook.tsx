import React, { FC, ChangeEvent } from 'react';
import { IBook, IBookList } from '../Types';
import { Button, Modal, Typography, TextField, Box } from '@mui/material';

type Props = {
  bookList: IBookList[];
  setBookList: React.Dispatch<React.SetStateAction<any>>;
  id: number;
  title: string;
  author: string;
  description: string;
  releaseDate: string;
  openEditModal: boolean;
  setOpenEditModal: React.Dispatch<React.SetStateAction<any>>;
};

const EditBook: FC<Props> = ({
  bookList,
  setBookList,
  id,
  title,
  author,
  description,
  releaseDate,
  openEditModal,
  setOpenEditModal,
}) => {
  const handleClose = () => {
    setOpenEditModal(false);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    // setBook({ ...book, [event.target.name]: event.target.value });
    // console.log(book);
  };

  return (
    <Modal open={openEditModal} onClose={handleClose}>
      <TextField value={author} onChange={handleInputChange} />
    </Modal>
  );
};

export default EditBook;
