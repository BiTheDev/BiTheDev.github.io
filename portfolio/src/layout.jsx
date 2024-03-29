import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Box } from '@mui/material';
import { styled } from "@mui/material";

const StyledBox = styled(Box)({
  background: "linear-gradient(to bottom, #151515 0%, #263238 100%)",
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledBox sx={{ p: 3 }}>
        {children}
      </StyledBox>
      <Footer />
    </>
  );
};

export default Layout;
