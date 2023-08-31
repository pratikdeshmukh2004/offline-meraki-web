import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    return (
      <div >
        <AppBar position="static" >
            <Toolbar>  
            <h1>Header</h1> 
            </Toolbar>
            </AppBar>
      </div>
    );
  }
  
  export default Header;


