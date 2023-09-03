import React from 'react';
import { Container, Typography, Button, } from '@mui/material';
import Shootingstars from '../../components/shootingstars/shootingstars';
import './landing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const LandingPage = () => {
  return (
    // <div className="landing-container">
    //   <Container maxWidth="xl">
    //     <Typography variant="h2" align="center" gutterBottom>
    //       Welcome to My Portfolio
    //     </Typography>
    //     <Typography variant="h5" align="center" paragraph>
    //       Showcasing my journey in software and web development.
    //     </Typography>
    //     <Button
    //       data-aos="zoom-in-up"
    //       data-aos-duration="1500"
    //       data-aos-easing="ease-in-sine"
    //       variant="contained"
    //       color="primary"
    //       href="/home"
    //       sx={{ mx: 'auto', width: 200, p:1, m:1 }}
    //     >
    //       Welcome
    //     </Button>
    //   </Container>
    // </div>
    <div>
      <Container maxWidth="xl">
        <Shootingstars/>
      </Container>
    </div>
  );
};

export default LandingPage;
