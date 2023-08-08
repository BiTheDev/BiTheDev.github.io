import React from 'react'
import { Container, Typography, Link } from '@mui/material';
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container maxWidth="md">
        <Typography variant="body2" align="center" color="textSecondary">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary">
          Built with ❤️ using React and Material-UI.
        </Typography>
        <Typography variant="body2" align="center">
          <Link color="inherit" href="www.linkedin.com/in/brianbho">
            LinkedIn
          </Link>
          {' | '}
          <Link color="inherit" href="https://github.com/BiTheDev">
            Github
          </Link>
        </Typography>
      </Container>
    </footer>
  )
}

export default Footer