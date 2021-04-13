import React from "react";
import { Button, Typography, Box, Grid } from "@material-ui/core";
import dummy_img from "../images/result/dummy_titanic_jack.jpg";
import {
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { useCallback, useEffect, useMemo, useState, useContext } from "react";
import { GenderContext } from "../App";

// function GetList(){
//   axios.post(`${Url}/${user_mbti}/${user_gender}`).then(response =>{
//       setList(response.data.result)
//   })
// }

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },

  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  resultOutline: {
    gridColumn: "span 12",
    gridRow: "span 6",
    color: "white",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  dummyImgGrid: {
    gridColumn: "2/span 8",
    gridRow: "2/span 9",
  },
  mbtiTypeImageDescGrid:{
    gridColumn: "span 10",
    gridRow: "11/ span 2",

  },

  dummyImg: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    borderRadius: '15px'
    // minheight: "100%"
  },
  MbtiTypeImageDescFont: {
    align: "center",
    marginTop: 15,
    fontSize: "2vw",
  },
  charScriptFont: {
    fontSize: "medium",
  },

  resultSpecific: {
    gridColumn: "span 12",
    gridRow: "span 6",
    color: "white",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  dummyScriptGrid: {
    gridColumn: "span 10",
    gridRow: "span 2",
  },
  mbtiTypeOutlineGrid: {
    gridColumn: "span 10",
    gridRow: "4/ span 5",
  },

  dummyBtnGrid: {
    gridColumn: "4/ span 4",
    gridRow: "11/ span 5",
  },
  dummyBtn: {
    minWidth: "100%",
  },
}));

const CustomAnalysisBtn = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#c81926",
    "&:hover": {
      backgroundColor: "#99141d",
    },
  },
}))(Button);

function MbtiTypeImageDesc(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.MbtiTypeImageDescFont} align="center">
        항상 사랑을 말하는 당신은, 타이타닉의 Jack
      </Typography>
    </Box>
  );
}

function CharacterScript(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.charScriptFont} align="center">
        "이 배의 탑승권을 따낸 건 내 인생 최고의 행운이었어. <br />
        당신을 만났으니까."
      </Typography>
    </Box>
  );
}

function MbtiTypeOutline(mbtiType, genderType) {
  // const classes = useStyles();
  return (
    <Box>
      <Typography align="center">
        ESFP 유형의 사람들은 낙천적이고 관계 맺기를 좋아해요. 그래서 연애할 때
        상대방에게 사랑을 시도때도 없이 표현하곤 하죠 😘 또한 상대방이 자신을
        그대로 인정해준다면 온화해지지만, 관계가 조금이라도 불편해진다면 빠르게
        거리를 둔답니다. <br />
        거부당하는 걸 두려워하는 당신에게, 해주고 싶은 말이 있어요. <br />
        <br />
        <i>"사랑하는 사람에게 기꺼이 상처 받을 것"</i>
      </Typography>
    </Box>
  );
}

function DataAnalysisBtn(mbtiType, genderType) {
  const { gender, setGender } = useContext(GenderContext);

  const classes = useStyles();
  return (
    <CustomAnalysisBtn
      variant="contained"
      className={classes.dummyBtn}
      color="secondary"
      onClick={() => { console.log(gender) }}
      >
      어떻게 분석했어?
    </CustomAnalysisBtn>
  );
}

export default function ResultTemplate({ mbtiType, genderType }) {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid className={classes.resultOutline} item>
        <Grid className={classes.dummyImgGrid}>
          <img className={classes.dummyImg} src={dummy_img} alt="dummy" />
        </Grid>
        <Grid className={classes.mbtiTypeImageDescGrid}>
          <MbtiTypeImageDesc mbtiType={mbtiType} genderType={genderType} />
        </Grid>
      </Grid>
      <Grid className={classes.resultSpecific} item>
        <Grid className={classes.dummyScriptGrid}>
          <CharacterScript mbtiType={mbtiType} genderType={genderType} />
        </Grid>
        <Grid className={classes.mbtiTypeOutlineGrid}>
          <MbtiTypeOutline mbtiType={mbtiType} genderType={genderType} />
          <Grid className={classes.dummyBtnGrid}>
          <DataAnalysisBtn />
        </Grid>

        </Grid>
      </Grid>
    </Grid>
  );
}
