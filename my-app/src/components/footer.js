import React from 'react'
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'rgba(0, 0, 0, 0)',
        color: 'red',
        height: '0px'
    },
    mobile: {
        background: 'rgba(0, 0, 0, 0)',
        color: 'red',
        height: '20px'
    },
  });

export default function Footer({type}) {
    const classes = useStyles();

        if(type==='mobile'){
            return(
                <Box className={classes.mobile} position="static">
                </Box>
            )
    
        }else{
            return(
                <Box className={classes.root} position="static">
                </Box>
            )
        }

}
