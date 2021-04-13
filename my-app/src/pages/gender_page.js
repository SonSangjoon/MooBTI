import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GenderContext } from "../App";
import female_pic from "../images/gender/female_pic.jpg";
import male_pic from "../images/gender/male_pic.jpg";
import NavBar from "../components/nav_bar";
import { makeStyles } from "@material-ui/core/styles";
import {  Button , Typography, Box, Grid  } from '@material-ui/core';
import { Mobile, Tablet, PC, PCwide } from '../components/MediaQuery' 

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
    paddingBottom: '5vh',
    fontSize: 45,
    color: 'white',
  },

  imgTitle: {
    fontSize: 20,
    color: 'white',
  },

  gender_img: {
    borderRadius:'10px',
    '&:hover': {
      backgroundColor: "white",
      borderRadius:'10px'

    },
    padding: '4px 4px',
    marginBottom: '10px' 
  },

  image: { 
    borderRadius:'10px',
  }

//

}));

function GenderPageSelect() {
  const classes = useStyles();
  const { gender, setGender } = useContext(GenderContext);

  const handleGenderChange = (event) => {
    setGender(event.currentTarget.value);
    console.log(gender);
  };

  return (
    <Box>
      <Typography className={classes.title} variant="h4" align="center" gutterBottom>
        테스트를 진행할 프로필을 선택하세요.
      </Typography>
      <Box display="flex" justifyContent="center" mt={3}>
        <Box mr={5}>
          <Link to="/test">
            <Button className={classes.gender_img} value="male" onClick={handleGenderChange}>
              <img src={male_pic} alt="male_pic" className={classes.image} />
            </Button>
          </Link>
          <Typography className={classes.imgTitle} variant="h6" align="center" gutterBottom>
            남성
          </Typography>
        </Box>
        <Box>
          <Link to="/test">
          <Button className={classes.gender_img} value="female" onClick={handleGenderChange}>
              <img src={female_pic} alt="female_pic" className={classes.image}/>
            </Button>
          </Link>
          <Typography className={classes.imgTitle} variant="h6" align="center" gutterBottom>
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

    <Tablet>
      <Grid className={classes.container} spacing={3}>
          <NavBar />
          <Grid className={classes.emptyColumnGrid} item></Grid>
          <Grid className={classes.emptyRowGrid} item></Grid>
          <Grid item>
            <GenderPageSelect />
          </Grid>
      </Grid>
    </Tablet>

    <PCwide>
      <Grid className={classes.container} spacing={3}>
          <NavBar />
          <Grid className={classes.emptyColumnGrid} item></Grid>
          <Grid className={classes.emptyRowGrid} item></Grid>
          <Grid item>
            <GenderPageSelect />
          </Grid>
      </Grid>
    </PCwide>
  </Box>
  );
}
