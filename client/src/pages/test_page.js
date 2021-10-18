import React from "react";
import NavBar from "../components/nav_bar";
import Footer from "../components/footer";
import TestQuestionTemplate from "../templates/test_question";
import { Box, Grid } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery.js";
import { useStyles } from "./styles/test_page_styles";
import ReactGA from "react-ga";
import { useEffect } from "react";

export function TestPage() {
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
        <NavBar />
        <Grid className={classes.container}>
          <Grid className={classes.testGrid} item>
            <TestQuestionTemplate />
          </Grid>
          <Grid className={classes.emptyGrid} item></Grid>
        </Grid>

        <Footer />
      </PC>

      {/* Mobile View */}

      <Mobile>
        <NavBar pageType="mobile" />
        <Grid className={classes.mobileContainer}>
          <Grid className={classes.mobileTestGrid} item>
            <TestQuestionTemplate />
          </Grid>
        </Grid>
        <Footer />
      </Mobile>

      <Tablet>
        <NavBar />
        <Grid className={classes.container}>
          <Grid className={classes.tabletTestGrid} item>
            <TestQuestionTemplate />
          </Grid>
          <Grid className={classes.emptyGrid} item></Grid>
        </Grid>
        <Footer />
      </Tablet>

      <PCwide>
        <NavBar />
        <Grid className={classes.container}>
          <Grid className={classes.pcwideTestGrid} item>
            <TestQuestionTemplate />
          </Grid>
        </Grid>
        <Footer />
      </PCwide>
    </Box>
  );
}
