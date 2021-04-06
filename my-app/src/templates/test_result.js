import React from "react";
import { Button, Typography, Box, Grid } from "@material-ui/core";
import dummy_img from "../images/result/dummy_titanic_jack.jpg";
import { useCallback, useEffect, useMemo, useState, useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { PC, Mobile } from "../components/MediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    backgroundColor: "black",
  },

  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  emptyRow: {
    gridColumn: "span 12",
    gridRow: "span 1",
  },
  emptyColumn: {
    gridColumn: "span 1",
    gridRow: "span 12",
  },
  resultImgOutline: {
    gridColumn: "span 12",
    gridRow: "span 6",
    color: "white",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  dummyImgGrid: {
    gridColumn: "span 9",
    gridRow: "span 9",
  },

  dummyImg: {
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
    // minheight: "100%"
  },
  dummyTitleFont: {
    fontSize: "small",
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
    gridColumn: "span 9",
    gridRow: "span 9",
  },
}));

function MbtiTypeImageDesc(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h6" align="center">
        항상 사랑을 말하는 당신은, <br /> 타이타닉의 Jack
      </Typography>
    </Box>
  );
}

function MbtiTypeOutline(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Box>
      <Typography className={classes.dummyTitleFont} align="center">
        이 배의 탑승권을 따낸 건 내 인생 최고의 행운이었어. <br />
        당신을 만났으니까."
        <br />
      </Typography>
      <br />

      <Typography>
        외향적이고 감성적인 ESFP 유형의 사람들은 낙천적이고 관계 맺기를
        좋아해요. 그래서 연애할 때 상대방에게 사랑을 시도때도 없이 표현하곤 하죠
        😘 또한 상대방이 자신을 그대로 인정해준다면 온화해지지만, 관계가
        조금이라도 불편해진다면 빠르게 거리를 둔답니다. 거부당하는 걸 두려워하는
        당신에게, 해주고 싶은 말이 있어요.{" "}
        <i>"사랑하는 사람에게 기꺼이 상처 받을 것"</i>
      </Typography>
    </Box>
  );
}

// function DataAnalysisBtn(mbtiType, genderType) {
//     const classes = useStyles();
//     return (
//       <Box>
//       </Box>
//     );
//   }
  

export default function ResultTemplate({ mbtiType, genderType }) {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid className={classes.resultImgOutline} item>
        <Grid className={classes.emptyRow} item></Grid>
        <Grid className={classes.emptyRow} item></Grid>
        <Grid className={classes.dummyImgGrid}>
          <img className={classes.dummyImg} src={dummy_img} alt="dummy" />
          <MbtiTypeImageDesc mbtiType={mbtiType} genderType={genderType} />
        </Grid>
      </Grid>
      <Grid className={classes.resultSpecific} item>
        <Grid className={classes.emptyRow} item></Grid>
        <Grid className={classes.emptyRow} item></Grid>
        <Grid className={classes.dummyScriptGrid}>
          <MbtiTypeOutline mbtiType={mbtiType} genderType={genderType}/>
        </Grid>
      </Grid>
    </Grid>
  );
}
