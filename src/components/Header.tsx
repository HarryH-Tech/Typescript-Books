import React, { FC } from 'react';
import '../styles/Header.css';

import { AppBar, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const Header: FC = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          marginBottom: '3rem',
        }}
        key={uuidv4()}
      >
        <AppBar
          position="static"
          sx={{
            display: 'flex',
            height: '10vh',
            justifyContent: 'center',
          }}
          key={uuidv4()}
        >
          <h1 key={uuidv4()}>Book List</h1>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
