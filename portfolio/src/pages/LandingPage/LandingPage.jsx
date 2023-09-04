import React from 'react';
import { Container, Typography, Button, } from '@mui/material';
import Shootingstars from '../../components/shootingstars/shootingstars';
import './landing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const LandingPage = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <Shootingstars/>
      </Container>
    </div>
  );
};

export default LandingPage;
