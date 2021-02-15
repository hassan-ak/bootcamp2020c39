// Imports
// React Imports
import React from 'react';
// Material Ui Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// style imports
import './footer.css'

// Footer Function
const Footer = () => {
    return (
        <div>
            <React.Fragment>
                <AppBar position="static" color="transparent" className="right" elevation={0}>
                    <Toolbar>
                        <div className="grow" />
                        <Typography variant="h6" className="title">
                            <small>by: </small>Hassan Ali Khan
                        </Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );
}

export default Footer; 