import React, { useContext } from 'react';

import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import { MbtiContext } from "../App";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IntroductionModal from "../components/modal_introduction";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "container-fluid",
    height: "0px",
    background: "rgba(0, 0, 0, 0)",
  },

  appBar:{
    background: "rgba(0, 0, 0, 0)",
  },

  logo: {
    width: "auto",
    height: "auto",
    maxHeight: "50px",
    padding: '5px',
    marginTop:'10px'
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },

  title: {
    flexGrow: 1,
  },

  mobileLogo: {
    width: "auto",
    height: "auto",
    maxHeight: "35px",
    paddingTop: '5px'
  },
}));

export default function NavBar({ pageType }) {
  const classes = useStyles();

  const {setOpenIntroduction} = useContext(MbtiContext);

  if (pageType === "intro") {
  return (
    <Box className={classes.root}>
      <AppBar className={classes.appBar}  position="static">
        <Toolbar>
            <Box edge="start">
              <Link to="/" >
                <img src="/images/Logo.png" className={classes.logo} alt="Logo" />
              </Link>
            </Box>
          <Typography variant="h6" className={classes.title}>
          </Typography>
            <Box>
              <IconButton
                onClick={() => setOpenIntroduction(true)}
                color="inherit" 

              >
                <AccountCircle fontSize="large" />
              </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
      <IntroductionModal />
    </Box>
  );
  } else if (pageType === "mobile")
  {
    return (
      <Box className={classes.root}>
      <AppBar className={classes.appBar}  position="static">
        <Toolbar>
            <Box edge="start">
              <Link to="/" >
                <img src="/images/Logo.png" className={classes.mobileLogo} alt="Logo" />
              </Link>
            </Box>
          <Typography variant="h6" className={classes.title}>
          </Typography>
            <Box>
              <IconButton
                onClick={() => setOpenIntroduction(true)}
                color="inherit" 
              >
                <AccountCircle fontSize="large" />
              </IconButton>
            </Box>
        </Toolbar>
      </AppBar>
      <IntroductionModal />
    </Box>
    )} else {
      return(
        <Box className={classes.root}>
        <AppBar className={classes.appBar}  position="static">
          <Toolbar>
              <Box edge="start">
                <Link to="/" >
                  <img src="/images/Logo.png" className={classes.logo} alt="Logo" />
                </Link>
              </Box>
            <Typography variant="h6" className={classes.title}>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      )
    }

}
