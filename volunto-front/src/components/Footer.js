import React from 'react';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';



export default function Footer() {
    return (
        <AppBar position="static" style={{backgroundColor:'black', height:'200px'}}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © 2021 Volunto
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
