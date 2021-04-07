import React from 'react'
import NavBar from '../components/nav_bar'
import Footer from '../components/footer'
import ResultTemplate from '../templates/test_result'
import RecommendContentsTemplate from '../templates/recommend_contents'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import { PC, Mobile } from '../components/MediaQuery' 


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

    emptyColumn: {
        gridRow : 'span 10',
        gridColumn : 'span 1'
    },

    resultGrid:{
        gridColumn : 'span 6',
        gridRow : 'span 10',
        color: 'white'
    },

    result:{
        display: 'flex'
    },

    recommendContentsGrid:{
        gridColumn : 'span 4',
        gridRow : 'span 10',
        color: 'white'
    },

}))

export function ResultPage({match}) {
    const classes = useStyles();

    const mbtiType = match.params.mbti
    const genderType = match.params.gender

    return (
        <Box>
        <PC className={classes.root}>
            <NavBar/>
            <Grid className={classes.container}>
                <Grid className={classes.emptyRow} item/>
                <Grid className={classes.emptyColumn} item/>
                <Grid className={classes.resultGrid} item>
                    <ResultTemplate mbtiType={mbtiType} genderType={genderType}/>
                </Grid>
                <Grid className={classes.recommendContentsGrid} item>
                    <RecommendContentsTemplate mbtiType={mbtiType} genderType={genderType}/>
                </Grid>
            </Grid>
            <Footer/>
        </PC>
        <Mobile>
        Mobile
        </Mobile>
      </Box>
    )
}