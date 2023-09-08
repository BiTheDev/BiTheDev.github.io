import React from 'react'
import { Container, Typography, Link } from '@mui/material';
const Footer = () => {
  return (
    <footer className="footer-container" style={{background: "linear-gradient(to bottom, #151515 0%, #263238 100%)"}}>
      <Container maxWidth="md">
        <Typography variant="body2" align="center" color="#ECF0F1">
          &copy; {new Date().getFullYear()} Brian Ho. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" color="#ECF0F1">
          Built with ❤️ using React and Material-UI.
        </Typography>
        <Typography variant="body1" align="center">
          <Link color="#BDC3C7" href="www.linkedin.com/in/brianbho">
            LinkedIn
          </Link>
          {' | '}
          <Link color="#BDC3C7" href="https://github.com/BiTheDev">
            Github
          </Link>
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer