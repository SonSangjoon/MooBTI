import React from "react";
import dummy_poster_img from "../images/result/dummy_titanic_poster.jpg";
import { Button, Typography, Box, Grid, Link } from "@material-ui/core";
import {
  // createMuiTheme,
  withStyles,
  makeStyles,
  // ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  recommendContainer: {
    gridColumn: "span 12",
    gridRow: "span 6",
    color: "white",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  dummyRecommendGoodTitleGrid: {
    gridColumn: "span 12",
    gridRow: "2/span 2",
  },
  dummyRecommendBadTitleGrid: {
    gridColumn: "span 12",
    gridRow: "1/span 2",
  },

  dummyGoodImgGrid: {
    gridColumn: "span 3",
    gridRow: "4/ span 7",
  },

  dummyBadImgGrid: {
    gridColumn: "span 3",
    gridRow: "3/span 7",
  },
  dummyImg: {
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
    // minheight: "100%"
  },

  dummyRecommendGoodDesc: {
    gridColumn: "5/span 8",
    gridRow: "4/ span 10",
  },
  dummyRecommendBadDesc: {
    gridColumn: "5/span 8",
    gridRow: "3/ span 10",
  },

  NetflixGoodBtnGrid: {
    gridColumn: "5/ span 5",
    gridRow: "-5/ span 2",
  },
  NetflixBadBtnGrid: {
    gridColumn: "5/ span 5",
    gridRow: "-6/ span 2",
  },

  NetflixBtn: {
    maxheight: "100%",
  },

  RestartBtnGrid: {
    gridColumn: "3/ span 8",
    gridRow: "-3/ span 2",
  },
  restartBtn: {
    minWidth: "100%",
  },

  //   dummyBtn: {
  //     minWidth: "100%",
  //   },

  recommendText: {
    gridColumn: "span 12",
    gridRow: "span 3",
    color: "white",
  },
}));

const CustomRestartBtn = withStyles((theme) => ({
    root: {
      // color: theme.palette.getContrastText(purple[500]),
      backgroundColor: "#c81926",
      "&:hover": {
        backgroundColor: "#99141d",
      },
    },
  }))(Button);
  
function RecommendGoodTitle(mbtiType, genderType) {

  return (
    <Box>
      <Typography>
        나와 잘 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?
      </Typography>
    </Box>
  );
}
function RecommendGoodDesc(mbtiType, genderType) {

  return (
    <Box>
      <Typography>
        "날 기억해줘. 최선을 다해서..." <br />
        <br /> 따뜻하고 배려심 깊은 ISFJ 유형의 사람들은 클레멘타인처럼 사랑하는
        이에게 의지하면서도, 도움을 주고 싶어해요.
      </Typography>
    </Box>
  );
}

function RecommendBadTitle(mbtiType, genderType) {
  return (
    <Box>
      <Typography size="small">
        나와 잘 안맞는 MBTI의 영화 주인공은 어떻게 연애했을까?
      </Typography>
    </Box>
  );
}
function RecommendBadDesc(mbtiType, genderType) {
  return (
    <Box>
      <Typography>
        "날 기억해줘. 최선을 다해서..." <br />
        <br /> 따뜻하고 배려심 깊은 ISFJ 유형의 사람들은 클레멘타인처럼 사랑하는
        이에게 의지하면서도, 도움을 주고 싶어해요.
      </Typography>
    </Box>
  );
}

function NetflixGoodBtn(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Link href="https://www.naver.com/" underline="none" target="_blank">
      <Button variant="outlined" className={classes.dummyBtn} color="secondary">
        Netflix에서 보기
      </Button>
    </Link>
  );
}
function NetflixBadBtn(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Link href="https://www.daum.net/" underline="none" target="_blank">
      <Button variant="outlined" className={classes.dummyBtn} color="secondary">
        Netflix에서 보기
      </Button>
    </Link>
  );
}
function RestartButton(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Link href="https://www.nate.com/" underline="none" target="_blank">
      <CustomRestartBtn
        variant="contained"
        className={classes.restartBtn}
        color="secondary"
      >
        테스트 다시 하기
      </CustomRestartBtn>
    </Link>
  );
}

export default function RecommendContentsTemplate({ mbtiType, genderType }) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container}>
        <Grid className={classes.recommendContainer} item>
          <Grid className={classes.dummyRecommendGoodTitleGrid}>
            <RecommendGoodTitle />
          </Grid>
          <Grid className={classes.dummyGoodImgGrid}>
            <img
              className={classes.dummyImg}
              src={dummy_poster_img}
              alt="dummy"
            />
          </Grid>
          <Grid className={classes.dummyRecommendGoodDesc}>
            <RecommendGoodDesc />
          </Grid>
          <Grid className={classes.NetflixGoodBtnGrid}>
            <NetflixGoodBtn />
          </Grid>
        </Grid>
        <Grid className={classes.recommendContainer} item>
          <Grid className={classes.dummyRecommendBadTitleGrid}>
            <RecommendBadTitle />
          </Grid>

          <Grid className={classes.dummyBadImgGrid}>
            <img
              className={classes.dummyImg}
              src={dummy_poster_img}
              alt="dummy"
            />
          </Grid>
          <Grid className={classes.dummyRecommendBadDesc}>
            <RecommendBadDesc />
          </Grid>
          <Grid className={classes.NetflixBadBtnGrid}>
            <NetflixBadBtn />
          </Grid>
          <Grid className={classes.RestartBtnGrid}>
            <RestartButton />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid className={classes.dummyBtnGrid}>
      </Grid> */}
      {/* <NetflixBtn className={classes.dummyBtn} /> */}
    </>
  );
}
