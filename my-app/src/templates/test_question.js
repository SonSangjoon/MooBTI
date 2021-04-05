import React from 'react'
import LinearWithValueLabel from '../components/progress_bar'
import ButtonBases from '../components/button'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import test1 from '../images/test/test1.png'

const useStyles = makeStyles((theme) => ({
    testContainer: {
        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)',
    },

    emptyRow: {
        gridColumn : 'span 12',
        gridRow : 'span 1',
    },

    questionText: {
        color: 'white',
        fontSize: '4vh',
    },

    imageGrid:{
        gridColumn : 'span 12',
        gridRow : 'span 8',
    },

    image:{
        objectFit: 'cover',
        width: '100%',
        maxHeight: "100%"
    },

    answerGrid:{
        gridColumn : 'span 12',
        gridRow : 'span 3',

        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

}))

export default function TestQuestionTemplate() {
    const classes = useStyles();
    const question = "Q1. 이거 마시면 나랑 사귀는거다"
    const choice1 = "마신다"
    const choice2 = "마시지 않는다"

    return (
        <Grid className={classes.testContainer} item>    
            <Grid className={classes.emptyRow} item>
                <Typography className={classes.questionText}>
                    {question}
                </Typography>
            </Grid>
            <Grid className={classes.imageGrid} item>
                <img className={classes.image} src={test1} alt="test1"/>
                <LinearWithValueLabel/>
            </Grid>
            <Grid className={classes.answerGrid}>
                <ButtonBases choice={choice1}/>
                <ButtonBases choice={choice2}/>
            </Grid>
        </Grid>
    )
}
