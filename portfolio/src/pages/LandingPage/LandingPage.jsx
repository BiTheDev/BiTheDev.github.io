import React from 'react';
import { Container, Typography, Button, } from '@mui/material';
import ShootingStars from '../../Components/ShootingStars';
import './landing.css';

const LandingPage = () => {
  return (
    <div>
      <Container maxWidth="xl">
        <ShootingStars/>
      </Container>
    </div>
  );
};

export default LandingPage;
