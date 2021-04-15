import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import LinearWithValueLabel from "../components/progress_bar";
import ButtonBases from "../components/question_button";
import { Box, Grid } from "@material-ui/core";
import CircularIndeterminate from "../components/progress_circle";
import { GenderContext } from "../App";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";
import { useStyles } from "./styles/test_question_styles";
import { useHistory } from "react-router-dom";
import { questionList } from "../data/test_data";

export default function TestQuestionTemplate() {
  const { selectedGender } = useContext(GenderContext);
  const classes = useStyles();
  const history = useHistory();
  const [questionNum, SetQuestionNum] = useState(0);

  const [testData, setTestData] = useState({
    gender: selectedGender,
    answer: "",
  });

  const { answer } = testData;

  useEffect(() => {
    SetQuestionNum((questionNum) => questionNum + 1);
  }, [answer]);

  function proceedTest(n) {
    console.log(testData);

    if (n === 1) {
      setTestData({ ...testData, answer: answer + "1" });
    } else {
      setTestData({ ...testData, answer: answer + "0" });
    }
  }

  function GetMbti() {
    console.log(testData);
    axios
      .post(
        `http://elice-kdt-ai-track-vm-da-03.koreacentral.cloudapp.azure.com:5000/mbti`,
        testData
      )
      .then((response) => {
        console.log(response.data.user_mbti);
        setTimeout(() => {
          history.push(`/${response.data.user_mbti}/${testData["gender"]}`);
        }, 2000);
      });
  }

  if (answer.length >= 12) {
    GetMbti();
    return (
      <Grid className={classes.loadingContainer}>
        {/* <Grid item></Grid> */}
        <Grid className={classes.loadingGrid} item>
          <PC>
            <Box className={classes.loadingBox} align="center">
              <CircularIndeterminate />
              <Box className={classes.loadingText}>분석중</Box>
            </Box>
          </PC>

          <Mobile>
            <Box className={classes.loadingBox} align="center">
              <CircularIndeterminate />
              <Box className={classes.loadingText}>분석중</Box>
            </Box>
          </Mobile>

          <Tablet>
            <Box className={classes.loadingBox} align="center">
              <CircularIndeterminate />
              <Box className={classes.loadingText}>분석중</Box>
            </Box>
          </Tablet>

          <PCwide>
            <Box className={classes.loadingBox} align="center">
              <CircularIndeterminate />
              <Box className={classes.loadingText}>분석중</Box>
            </Box>
          </PCwide>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <Grid className={classes.testContainer} item>
        <PC>
          <Grid className={classes.imageGrid} item>
            <img
              className={classes.image}
              src={questionList[questionNum]["image"]}
              alt="testimage"
            />
            <LinearWithValueLabel num={(questionNum * 100) / 12} />
          </Grid>
          <Grid className={classes.questionRow} item>
            <Box className={classes.questionText} align="center">
              {questionList[questionNum]["question"]}
            </Box>
          </Grid>
          <Grid className={classes.answerGrid}>
            <Box
              onClick={() => {
                proceedTest(0);
              }}
            >
              <ButtonBases choice={questionList[questionNum]["choice1"]} />
            </Box>
            <Box
              onClick={() => {
                proceedTest(1);
              }}
            >
              <ButtonBases choice={questionList[questionNum]["choice2"]} />
            </Box>
          </Grid>
        </PC>

        <Mobile>
          <Grid className={classes.mobileImageGrid} item>
            <img
              className={classes.mobileImage}
              src={questionList[questionNum]["image"]}
              alt="testimage"
            />
            <LinearWithValueLabel num={(questionNum * 100) / 12} />
          </Grid>
          <Grid className={classes.mobileQuestionRow} item>
            <Box className={classes.mobileQuestionText} align="center">
              {questionList[questionNum]["question"]}
            </Box>
          </Grid>
          <Grid className={classes.mobileAnswerGrid1} item>
            <Box
              className={classes.mobileBtnWrapper}
              onClick={() => {
                proceedTest(0);
              }}
            >
              <ButtonBases choice={questionList[questionNum]["choice1"]} />
            </Box>
          </Grid>
          <Grid className={classes.mobileAnswerGrid2} item>
            <Box
              className={classes.mobileBtnWrapper}
              onClick={() => {
                proceedTest(1);
              }}
            >
              <ButtonBases choice={questionList[questionNum]["choice2"]} />
            </Box>
          </Grid>
        </Mobile>

        <Tablet>
          <Grid className={classes.tabletImageGrid} item>
            <img
              className={classes.tabletImage}
              src={questionList[questionNum]["image"]}
              alt="testimage"
            />
            <LinearWithValueLabel num={(questionNum * 100) / 12} />
          </Grid>
          <Grid className={classes.tabletQuestionRow} item>
            <Box className={classes.tabletQuestionText} align="center">
              {questionList[questionNum]["question"]}
            </Box>
          </Grid>
          <Grid className={classes.answerGrid}>
            <Box
              onClick={() => {
                proceedTest(0);
              }}
            >
              <ButtonBases choice={questionList[questionNum]["choice1"]} />
            </Box>
            <Box
              onClick={() => {
                proceedTest(1);
              }}
            >
              <ButtonBases choice={questionList[questionNum]["choice2"]} />
            </Box>
          </Grid>
        </Tablet>

        <PCwide>
          <Grid className={classes.pcWideImageGrid} item>
            <img
              className={classes.pcWideImage}
              src={questionList[questionNum]["image"]}
              alt="testimage"
            />
            <LinearWithValueLabel num={(questionNum * 100) / 12} />
          </Grid>
          <Grid className={classes.pcWideQuestionRow} item>
            <Box className={classes.pcWideQuestionText} align="center">
              {questionList[questionNum]["question"]}
            </Box>
          </Grid>
          <Grid className={classes.pcWideAnswerGrid}>
            <Box
              onClick={() => {
                proceedTest(0);
              }}
            >
              <ButtonBases choice={questionList[questionNum]["choice1"]} />
            </Box>
            <Box
              onClick={() => {
                proceedTest(1);
              }}
            >
              <ButtonBases choice={questionList[questionNum]["choice2"]} />
            </Box>
          </Grid>
        </PCwide>
      </Grid>
    );
  }
}
