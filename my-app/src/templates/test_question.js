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
        fontSize: '3vw'
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
            question :"Q1. 지긋이 바라보는데 갑자기 그/그녀가 멋있고 예뻐보인다.",
            choice1 : "어떻게 완벽한 그/그녀를 사랑하게 되었는지 생각에 잠겨본다",
            choice2 : "가까이 다가가 \"오늘 왜 이렇게 예뻐? / 멋있어?\" 한 마디 해준다.",
            
            image: "/images/test/test1.png",
            },
        1: {
            question :"Q1. 지긋이 바라보는데 갑자기 그/그녀가 멋있고 예뻐보인다.",
            choice1 : "어떻게 완벽한 그/그녀를 사랑하게 되었는지 생각에 잠겨본다",
            choice2 : "가까이 다가가 \"오늘 왜 이렇게 예뻐? / 멋있어?\" 한 마디 해준다.",
            
            image: "/images/test/test1.png",
        },
        2: {
            question :"Q2. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test2.png",
        },
        3: {
            question :"Q3. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test3.png",
        },
        4: {
            question :"Q4. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test4.png",
        },
        5 : {
            question :"Q5. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            
            image: "/images/test/test5.jpeg",
        },
        6 : {
            question :"Q6. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: "/images/test/test6.jpg"
        },
        7 : {
            question :"Q7. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: "/images/test/test7.png"
        },
        8 : {
            question :"Q8. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: "/images/test/test8.png"
        },
        9 : {
            question :"Q9. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: "/images/test/test9.jpg"
        },
        10 : {
            question :"Q10. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: "/images/test/test10.png"
        },
        11 : {
            question :"Q11. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: "/images/test/test11.png"
        },
        12 : {
            question :"Q12. 안녕하세요",
            choice1 : "마신다",
            choice2 : "마시지 않는다",
            image: "/images/test/test12.jpg"
        },
    }    

    const [questionNum, SetQuestionNum] = useState(0)
    const [answerSheet, setAnswerSheet] = useState("") 

    useEffect(()=>{
        console.log(answerSheet)
        SetQuestionNum(questionNum => questionNum + 1)
    },[answerSheet])

    function proceedTest(n) {
        if(n === 1){
            setAnswerSheet(answerSheet => answerSheet+"1")
        }
        else{
            setAnswerSheet(answerSheet => answerSheet+"0")
        }
    }

    if (answerSheet.length >= 12)
        // 13문항 모두 작성시 axios.get()
        // ADD circular progress bar 
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
