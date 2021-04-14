import React from "react";
import NavBar from "../components/nav_bar";
import { Box, Grid  } from '@material-ui/core';
import { Mobile, Tablet, PC, PCwide } from '../components/MediaQuery' 
import { useStyles } from './styles/gender_page_styles'
import GenderPageSelect from '../templates/gender_selection'

export function GenderPage() {
  const classes = useStyles();
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
            <NavBar pageType="mobile"/>
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