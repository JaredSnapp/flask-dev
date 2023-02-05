import css from './NavigationBar.module.css'
import { Link } from 'react-router-dom';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function NavigationBar({ search }) {

    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Button color='contrast' component={Link} to='/recruiters/'>Home</Button>
            <Button color='contrast' component={Link} to='/'>About</Button>
            <Button color='contrast' component={Link} to='/dev'>Dev</Button>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Recruiter Tracker
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default NavigationBar;


