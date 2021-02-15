// Imports
// React Imports
import React from 'react';
// Material UI Imports
import { IconButton, Typography } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AssignmentIcon from '@material-ui/icons/Assignment';
// Styles Imports
import './header.css';

// Header Component
const Header = () => {
    //  Header Function Return
    return (
        <div className="root">
            <AppBar position="static" elevation={1}>
                <Toolbar className="transparent">
                    <IconButton
                        edge="start"
                        aria-label="Shoe Store">
                        <AssignmentIcon />
                    </IconButton>
                    <Typography variant="h5">
                        Todo App
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header; 