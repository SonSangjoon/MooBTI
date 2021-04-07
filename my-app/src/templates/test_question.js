import React, { useEffect, useState } from 'react'
import LinearWithValueLabel from '../components/progress_bar'
import ButtonBases from '../components/button'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography } from '@material-ui/core';

import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    testContainer: {
        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)',
    },

    emptyRow: {
        gridColumn : 'span 12',
        gridRow : 'span 2',
    },

    questionText: {
        color: 'white',
        fontSize: '4vw'
    },

    imageGrid:{
        gridColumn : 'span 12',
        gridRow : 'span 8',
    },

    image:{
        objectFit: 'fill',
        width: '100%',
        maxHeight: "100%"
    },

    answerGrid:{
        gridColumn : 'span 12',
        gridRow : 'span 2',

        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

}))

export default function TestQuestionTemplate() {
    const classes = useStyles();
    const history = useHistory();

    const questionList = {
        0: {
            question :"Q1. 이거 마시면 나랑 사귀는거다",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test1.png",
            },
        1: {
            question :"Q1. 이거 마시면 나랑 사귀는거다",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: "/images/test/test1.png",
        },
        2: {
            question :"Q2. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test1.png",
        },
        3: {
            question :"Q3. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test1.png",
        },
        4: {
            question :"Q4. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test1.png",
        },
        5 : {
            question :"Q5. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test1.png",
        },
        6 : {
            question :"Q6. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: ""
        },
        7 : {
            question :"Q7. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: ""
        },
        8 : {
            question :"Q8. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: ""
        },
        9 : {
            question :"Q9. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: ""
        },
        10 : {
            question :"Q10. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: ""
        },
        11 : {
            question :"Q11. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: ""
        },
        12 : {
            question :"Q12. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: ""
        },
        13 : {
            question :"Q13. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: ""
        },
    }    

    const [questionNum, SetQuestionNum] = useState(0)
    const [answerSheet, setAnswerSheet] = useState("") 

    useEffect(()=>{
        console.log(answerSheet)
        SetQuestionNum(questionNum => questionNum + 1)
    },[answerSheet])

    function proceedTest(n) {
        // if (answerSheet.length >= 13){
            // 13문항 모두 작성시 axios.get()
            // push
        // }
        if(n === 1){
            setAnswerSheet(answerSheet => answerSheet+"1")
        }
        else{
            setAnswerSheet(answerSheet => answerSheet+"0")
        }
    }

    if (answerSheet.length >= 13)
        history.push("/intj/male")

    return (
        <Grid className={classes.testContainer} item>    
            <Grid className={classes.emptyRow} item>
                <Typography className={classes.questionText}>
                    {questionList[questionNum]['question']}
                </Typography>
            </Grid>
            <Grid className={classes.imageGrid} item>
                <img className={classes.image} src={questionList[questionNum]['image']} alt="testimage"/>
                <LinearWithValueLabel/>
            </Grid>
            <Grid className={classes.answerGrid}>
                <Box onClick={()=>{proceedTest(1)}}>
                    <ButtonBases choice={questionList[questionNum]['choice1']} />
                </Box>
                <Box onClick={(e)=>{proceedTest(0, e)}}>
                    <ButtonBases choice={questionList[questionNum]['choice2']} />
                </Box>
            </Grid>
        </Grid>
    )
}
