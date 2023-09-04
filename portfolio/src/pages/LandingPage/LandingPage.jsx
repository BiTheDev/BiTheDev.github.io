import React from 'react';
import { Container, Typography, Button, } from '@mui/material';
import Shootingstars from '../../components/shootingstars/shootingstars';
import './landing.css';

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
