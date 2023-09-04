import React from 'react';
import { Container, Typography, Paper, Button, Grid, List, ListItem, ListItemText } from '@mui/material'
import { styled } from '@mui/material'

const StyledDiv = styled('div')({
  height: '100vh',
  background: 'linear-gradient(to bottom, #151515 0%, #263238 100%)',
  color: '#FFFFFF',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledPaper = styled(Paper)({
  padding: '26px',
  textAlign: 'center',
  color: '#FFFFFF',
  background: 'rgba(255, 255, 255, 0.1)',
});

const HomePage = () => {
  return (
    <StyledDiv>
      <Container maxWidth="md">
        <StyledPaper elevation={10}>
          <Typography variant="h4" gutterBottom>
            Hi, I'm [Your Name]
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A [Your Role] passionate about [Your Interests]
          </Typography>
          <Typography variant="body1" paragraph>
            I have a background in [Your Background] and currently, I am [What You're Doing Now]. 
            I'm especially interested in [What You're Interested In].
          </Typography>
          <Typography variant="h6" gutterBottom>
            Skills/Interests
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Skill/Interest 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Skill/Interest 2" />
            </ListItem>
            {/* Add more as needed */}
          </List>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary">
                View Portfolio
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="outlined" color="primary">
                Contact Me
              </Button>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
    </StyledDiv>
  );
};

export default HomePage;
