import React from 'react';
import { Container, Typography, Paper, Button, Grid } from '@mui/material'
import { styled } from '@mui/material'

const StyledDiv = styled('div')({
  height: '100vh',
  background: 'linear-gradient(to bottom, #151515 0%, #2C3E50 100%)', // Dark background to match the space theme
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '16px',
  textAlign: 'center',
  color: '#FFFFFF',
  background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent to fit the space theme
});

const HomePage = () => {
  return (
    <StyledDiv>
      <Container maxWidth="sm">
        <StyledPaper elevation={10}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Cosmos
          </Typography>
          <Typography variant="body1" paragraph>
            Explore the universe, admire the stars, and seek the unknown.
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary">
                Start Journey
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" color="primary">
                Learn More
              </Button>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </StyledDiv>
  );
};

export default HomePage;
