import React from 'react'
import { Link } from "react-router-dom";

import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import imageLogo from '../images/Logo.png'

const useStyles = makeStyles({
    root: {
        background: 'rgba(0, 0, 0, 0)',
        color: 'red',
        height: '0px',
        display: "container-fluid"
    },
    logo: {
        padding: 20
    },

    sublogo: {
        padding: 20,
    },

    sublogoimage:{
        width: 'auto',
        height: 'auto',
        maxHeight: '50px'
    }

  });

export default function NavBar({pageType}) {
    const classes = useStyles();

    if (pageType === "intro"){
        return (
            <Box className={classes.root} position="static">
                <Box className={classes.logo}>
                    <Link to="/" >
                        <img src={imageLogo} alt="Logo" />
                    </Link>
                </Box>
            </Box>
        ); 
    }
    else{
        return (
            <Box className={classes.root} position="static">
                <Box  className={classes.sublogo}>
                    <Link to="/" >
                        <img src={imageLogo} alt="Logo" className={classes.sublogoimage} />
                    </Link>
                </Box>
            </Box>
        );
    }
}
