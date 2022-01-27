import React, { FC } from 'react';
import '../styles/Header.css';

import { AppBar, Box } from '@mui/material';

const Header: FC = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        <AppBar
          position="static"
          sx={{
            display: 'flex',
            height: '10vh',
            justifyContent: 'center',
          }}
        >
          <h1>Book List</h1>
        </AppBar>
      </Box>
    </>
  );
};

export default Header;
