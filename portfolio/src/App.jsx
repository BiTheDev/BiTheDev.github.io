import { Container } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import "./App.css";
import React from "react";
import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <PageRoutes />
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;
