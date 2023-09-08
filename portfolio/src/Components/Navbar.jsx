import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{background: "linear-gradient(to bottom, #151515 0%, #263238 100%)"}}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Brian Ho's Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/home">Home</Button>
        <Button color="inherit" component={Link} to="/projects">Projects</Button>
        <Button color="inherit" component={Link} to="/education-and-experience">Education / Experience</Button>
        <Button color="inherit"  href="/files/resume.pdf">Resume</Button>

      </Toolbar>
    </AppBar>
  )
}

export default Navbar