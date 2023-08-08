import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import './landing.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Container maxWidth="xl">
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Showcasing my journey in software and web development.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="/portfolio"
          className="cta-button"
        >
          View Portfolio
        </Button>
      </Container>
    </div>
  );
};

export default LandingPage;
