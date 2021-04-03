import React from 'react'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'rgba(0, 0, 0, 0)',
        color: 'red',
        height: '0px'
    },
  });

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.root} position="static">
        </Box>
    );

}
