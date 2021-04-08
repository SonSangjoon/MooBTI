import React from "react";
import { Link } from "react-router-dom";
import female_pic from "../images/gender/female_pic.jpg";
import male_pic from "../images/gender/male_pic.jpg";
import NavBar from "../components/nav_bar";
import { makeStyles } from "@material-ui/core/styles";
import {  Button , Typography, Box, Grid  } from '@material-ui/core';
import { PC, Mobile } from '../components/MediaQuery' 

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: 'black'
  },

  container: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridGap: theme.spacing(2),
  },

  emptyRowGrid: {
    gridRow: "span 2",
  },
  emptyColumnGrid: {
    gridColumn: "span 2",
  },

  title: {
    color: 'white',
  },
  gender_img: {
    '&:hover': {
      backgroundColor: 'white',
    },
    padding: '4px 4px',
    marginBottom: '10px' 
  },
}));

function GenderPageSelect() {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.title} variant="h4" align="center" gutterBottom>
        테스트를 진행할 프로필을 선택하세요.
      </Typography>
      <Box display="flex" justifyContent="center" mt={3}>
        <Box mr={5}>
          <Link to="/test">
            <Button className={classes.gender_img}>
              <img src={male_pic} alt="male_pic"/>
            </Button>
          </Link>
          <Typography className={classes.title} variant="h6" align="center" gutterBottom>
            남성
          </Typography>
        </Box>
        <Box>
          <Link to="/test">
          <Button className={classes.gender_img}>
              <img src={female_pic} alt="female_pic"/>
            </Button>
          </Link>
          <Typography className={classes.title} variant="h6" align="center" gutterBottom>
            여성
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export function GenderPage() {
  const classes = useStyles();
  return (
  <Box className={classes.root}>
    <PC>
      <Grid className={classes.container} spacing={3}>
        <NavBar />
        <Grid className={classes.emptyColumnGrid} item></Grid>
        <Grid className={classes.emptyRowGrid} item></Grid>
        <Grid item>
          <GenderPageSelect />
        </Grid>
      </Grid>
    </PC>
    <Mobile>
      Mobile
    </Mobile>
  </Box>
  );
}
