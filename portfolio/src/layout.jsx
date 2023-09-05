import React from 'react';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Box } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box sx={{ p: 3 }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
