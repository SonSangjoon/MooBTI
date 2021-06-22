import React from "react";
import NavBar from "../components/nav_bar";
import { Box, Grid } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";
import { useStyles } from "./styles/gender_page_styles";
import GenderPageSelect from "../templates/gender_selection";
import ReactGA from "react-ga";
import { useEffect } from "react";


export function GenderPage() {
  const classes = useStyles();
  
  useEffect(() => {
    getGA();
  }, []);

  const getGA = () => {
    const pathName = window.location.pathname;
    ReactGA.initialize("UA-196189871-2");
    ReactGA.set({ page: pathName });
    ReactGA.pageview(pathName);
  };


  return (
    <Box className={classes.root}>
      <PC>
        <Grid className={classes.container} spacing={3}>
          <NavBar />
          <Grid className={classes.genderGrid} item>
            <GenderPageSelect />
          </Grid>
        </Grid>
      </PC>

      <Mobile>
        <Grid className={classes.mobileContainer}>
          <NavBar pageType="mobile" />
          <Grid className={classes.mobileGrid} item>
            <GenderPageSelect />
          </Grid>
        </Grid>
      </Mobile>

      <Tablet>
        <Grid className={classes.tabletContainer} spacing={3}>
          <NavBar />
          <Grid className={classes.tabletGenderPageGrid} item>
            <GenderPageSelect />
          </Grid>
        </Grid>
      </Tablet>

      <PCwide>
        <Grid className={classes.container} spacing={3}>
          <NavBar />
          <Grid className={classes.genderGrid} item>
            <GenderPageSelect />
          </Grid>
        </Grid>
      </PCwide>
    </Box>
  );
}
