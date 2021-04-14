import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import LinearWithValueLabel from '../components/progress_bar'
import ButtonBases from '../components/button'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, } from '@material-ui/core';
import CircularIndeterminate from '../components/loading'
import { GenderContext } from "../App";

import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    testContainer: {
        height: "100%",
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
        fontSize: '2vmax',
        paddingTop: 20
    },

    imageGrid:{
        gridColumn : 'span 12',
        gridRow : 'span 8',
    },

    image:{
        objectFit: 'fill',
        width: '100%',
        height: '53vh',
        borderRadius: "10px"
    },

    answerGrid:{
        gridColumn : 'span 12',
        gridRow : 'span 2',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

    emptyBox:{
        width: '100%',
        height: "60vh",
        
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loadingText:{
        color: 'white',
        fontSize: '2vmax',
        padding: 20
    }
    
}))

export default function TestQuestionTemplate() {
    const { selectedGender } = useContext(GenderContext);
    const classes = useStyles();
    const history = useHistory();
    const [questionNum, SetQuestionNum] = useState(0)

    const [testData, setTestData] = useState({
        gender: selectedGender,
        answer: ""
    })

    const questionList = {
        0: {
            question :"Q1. 지긋이 바라보는데 새삼스럽게 애인이 멋있고 예뻐보인다",
            choice1 : "'오늘따라 귀엽네' 속으로 생각해본다",
            choice2 : "\"오늘 왜 이렇게 예뻐/멋있어?\" 한마디 해준다",
            
            image: "/images/test/test1.png",
        },
        1: {
            question :"Q1. 지긋이 바라보는데 새삼스럽게 애인이 멋있고 예뻐보인다",
            choice1 : "'오늘따라 귀엽네' 속으로 생각해본다",
            choice2 : "\"오늘 왜 이렇게 예뻐/멋있어?\" 한마디 해준다",
            
            image: "/images/test/test1.png",
        },
        2: {
            question :"Q2. 우산을 들고 비를 흠뻑 맞은 애인. 당신의 첫 마디는",
            choice1 : "우산이 있는데 왜 비를 맞고 있어?",
            choice2 : "무슨 일이야? 힘든 일 있었어?",
            
            image: "/images/test/test2.png",
        },
        3: {
            question :"Q3 모든 사람의 생각을 읽는 뱀파이어. 내 생각만 못 읽어서 갑갑하다는데...",
            choice1 : "왜 내 생각을 못 읽는 거지?",
            choice2 : "갑갑하다고? 나한테 관심이 있나..?",
            
            image: "/images/test/test3.png",
        },
        4: {
            question :"Q4. 용기를 내 고백했다. 하지만 돌아오는 대답은 \"나 좋아하지 마\"",
            choice1 : "\"왜 나는 안되는 거야?\"라고 되묻는다",
            choice2 : "\"왜 내가 널 좋아하면 안 돼?\"라고 되묻는다",
            
            image: "/images/test/test4.png",
        },
        5 : {
            question :"Q5. 짝사랑 하던 사람과 연애를 하는 꿈 속, 누군가 마법의 약을 건넨다",
            choice1 : "빨간 약: 현실로 돌아가는 약을 먹는다",
            choice2 : "파란 약: 꿈에서 영원히 연애하는 약을 먹는다",
            
            image: "/images/test/test5.jpeg",
        },
        6 : {
            question :"Q6. 집에 돌아온 나를 보고 친구가 묻는다. \"오늘 데이트 어땠어?\"",
            choice1 : "\"오늘은 성수동에 갔는데~\" \n데이트 일정을 말한다",
            choice2 : "\"점점 편해지는 것 같아\" \n데이트의 감상을 얘기한다",
            image: "/images/test/test6.jpg",

        },
        7 : {
            question :"Q7. 서로에게 지친 우리, 애인이 소리 지른다. \"왜 그렇게 다 네 맘대로야\"",
            choice1 : "하나부터 열까지 다 맞춰줬는데 내 마음대로라고?",
            choice2 : "사람 피 말리지 말고, 헤어지고 싶으면 그냥 말해",
            image: "/images/test/test7.png",

        },
        8 : {
            question :"Q8. 눈 감고 난간 위로 올라가라고 하는 애인",
            choice1 : "낭만은 무슨, 위험해지고 싶지 않다.",
            choice2 : "\"이 순간 너무 낭만적이야\"하며 난간을 밟는다",
            image: "/images/test/test8.png",

        },
        9 : {
            question :"Q9. 올해 꼭 결혼해야 하는 다프네. 하필 비혼주의자 사이먼과 사랑에 빠졌다",
            choice1 : "날 좋아해 주는 왕자와 올해 결혼하겠어",
            choice2 : "그가 생각을 바꿀지 몰라. 지금 그와 많이 사랑할래",
            image: "/images/test/test9.jpg",

        },
        10 : {
            question :"Q10. 소송 없이 이혼하기로 약속했지만, 몰래 이혼 전문 변호사 고용할까?",
            choice1 : "재산 분할을 걱정하며 변호사와 계획을 짠다",
            choice2 : "소송 없이 진행하며 관계 개선의 여지를 둔다",
            image: "/images/test/test10.png",

        },
        11 : {
            question :"Q11. 마음 식은 게 뻔한 우리들. 하지만 남 주기에 아깝다",
            choice1 : " 마음은 식었어도, 연애 중인 게 편하다",
            choice2 : "마음 식으면 끝이다. 헤어질 결심을 한다.",
            image: "/images/test/test11.png",

        },
        12 : {
            question :"Q12. 죽은 줄 알았던 애인과 딱 하루의 시간을 함께 보낼 수 있다.",
            choice1 : "하루는 짧다. 계획적으로 시간을 보낸다.",
            choice2 : "그저 마음 가는 대로 시간을 보낸다.",
            image: "/images/test/test12.jpg",

        },

    }    

    const {answer} = testData

    useEffect(()=>{
        SetQuestionNum(questionNum => questionNum + 1)
    },[answer])

    function proceedTest(n) {
        console.log(testData)

        if(n === 1){
            setTestData({...testData, answer: answer+"1"})
        }
        else{
            setTestData({...testData, answer: answer+"0"})
        }
    }

    function GetMbti(){
        console.log(testData)
        axios.post(`http://elice-kdt-ai-track-vm-da-03.koreacentral.cloudapp.azure.com:5000/mbti`, testData).then(response =>{
            console.log(response.data.user_mbti);
            setTimeout(() => {
                history.push(`/${response.data.user_mbti}/${testData["gender"]}`)},2000)
        })

    }

    if (answer.length >= 12){

        GetMbti();
        return(
        <Grid className={classes.testContainer} item>    
            <Grid className={classes.imageGrid} item>
                <Box className={classes.emptyBox}>
                    <Box className={classes.loadingText}>분석중</Box>
                    <CircularIndeterminate/>
                </Box>
            </Grid>
        </Grid>
        )
    }
    else{
        return (
            <Grid className={classes.testContainer} item>    
                <Grid className={classes.imageGrid} item>
                    <img className={classes.image} src={questionList[questionNum]['image']} alt="testimage"/>
                    <LinearWithValueLabel num={questionNum*100/12}/>
                </Grid>
                <Grid className={classes.emptyRow} item>
                    <Box className={classes.questionText} align="center">
                        {questionList[questionNum]['question']}
                    </Box>
                </Grid>
                <Grid className={classes.answerGrid}>
                    <Box onClick={()=>{proceedTest(0)}}>
                        <ButtonBases choice={questionList[questionNum]['choice1']} />
                    </Box>
                    <Box onClick={()=>{proceedTest(1)}}>
                        <ButtonBases choice={questionList[questionNum]['choice2']} />
                    </Box>
                </Grid>
            </Grid>
        )
    }
}
