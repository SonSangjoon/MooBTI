import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      background: 'black',
      color: 'red'
    },
  });

export default function NavBar() {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h6">
                MBTI X NETFLIX
                </Typography>
            </Toolbar>
        </AppBar>
    );

}
