import React from "react";
import NavBar from "../components/nav_bar";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    height: "100vh",
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
    marginBottom: "30px",
  },

}));

function GenderPageText() {
  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        테스트를 진행할 프로필을 선택하세요.
      </Typography>
      <Box display="flex" justifyContent="center" mt={5}>
        <Box mr={5}>
          <Link to="/test">
            <img
              src="/images/male_pic.jpg"
              alt="male_pic"
            />
          </Link>
          <Typography variant="h6" align="center" gutterBottom>
            남성
          </Typography>
        </Box>
        <Box>
          <Link to="/test">
            <img
              src="/images/female_pic.jpg"
              alt="female_pic"
            />
          </Link>
          <Typography variant="h6" align="center" gutterBottom>
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
      <Grid className={classes.container} spacing={3}>
        <NavBar />
        <Grid className={classes.emptyColumnGrid} item></Grid>
        <Grid className={classes.emptyRowGrid} item></Grid>
        <Grid item>
          <GenderPageText />
        </Grid>
      </Grid>
    </Box>
  );
}
