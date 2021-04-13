import React from 'react'
import NavBar from '../components/nav_bar'
import Footer from '../components/footer'
import TestQuestionTemplate from '../templates/test_question'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { Mobile, Tablet, PC, PCwide } from '../components/MediaQuery' 


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: 'black'
    },
  
    container: {
      height: '100vh',
  
      display: 'grid',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridTemplateColumns: 'repeat(12, 1fr)',
    },

    emptyRow: {
        gridColumn : 'span 12',
        gridRow : 'span 1',
    },

    emptyGrid: {
        gridRow : 'span 10',
        gridColumn : 'span 2'
    },

    testGrid:{
        gridColumn : 'span 8',
        gridRow : 'span 10',
    },

      //Mobile

    mobileContainer : {
        height: '100vh',
        
        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridGap: theme.spacing(1),
    },
    mobileTestGrid : {
        gridRow : '2/span 10'
    },

}))

export function TestPage() {
    const classes = useStyles();
    return (
        <Box  className={classes.root}>
            <PC>
                <NavBar/>
                <Grid className={classes.container}>
                    <Grid className={classes.emptyRow} item/>
                    <Grid className={classes.emptyGrid} item/>
                    <Grid className={classes.testGrid} item>
                        <TestQuestionTemplate/>
                    </Grid>
                    <Grid className={classes.emptyGrid} item></Grid>
                </Grid>
                <Footer/>
            </PC>

            {/* Mobile View */}
             
            <Mobile>
                <NavBar pageType="mobile"/>
                <Grid className={classes.mobileContainer}>
                    <Grid className={classes.mobileTestGrid} item>
                        <TestQuestionTemplate/>
                    </Grid>
                </Grid>
                <Footer/>
            </Mobile>

            <Tablet>
            <NavBar/>
                <Grid className={classes.container}>
                    <Grid className={classes.emptyRow} item/>
                    <Grid className={classes.emptyGrid} item/>
                    <Grid className={classes.testGrid} item>
                        <TestQuestionTemplate/>
                    </Grid>
                    <Grid className={classes.emptyGrid} item></Grid>
                </Grid>
                <Footer/>
            </Tablet>

            <PCwide>
            <NavBar/>
                <Grid className={classes.container}>
                    <Grid className={classes.emptyRow} item/>
                    <Grid className={classes.emptyGrid} item/>
                    <Grid className={classes.testGrid} item>
                        <TestQuestionTemplate/>
                    </Grid>
                    <Grid className={classes.emptyGrid} item></Grid>
                </Grid>
                <Footer/>
            </PCwide>
        </Box>
    )
}