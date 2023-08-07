import { BrowserRouter } from 'react-router-dom'
import { Container } from '@mui/material'
import Routes from './routes/Router'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import './App.css'

import React from 'react'

function App() {

  return (
    <BrowserRouter>
    <Container maxWidth="xl">
        <Navbar/>
        <Routes/>
        <Footer/>
      </Container>
    </BrowserRouter> 
  )
}

export default App
