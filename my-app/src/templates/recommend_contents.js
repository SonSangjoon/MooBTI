import React from "react";
import {Link as RouterLink} from "react-router-dom"
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

  recommendGrid: {
    gridColumn: "span 12",
    gridRow: "span 5",
  },

  recommendContainer: {
    // height: "100%",
    color: "white",
    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  recommendTitleGrid: {
    gridColumn: "span 12",
    gridRow: "span 2",
  },
  recommendBadTitleGrid: {
    gridColumn: "span 12",
    gridRow: "1",
  },

  ImageGrid: {
    gridColumn: "span 3",
    gridRow: "4/ span 7",
  },


  PosterImg: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    // minheight: "100%"
  },

  recommendDesc: {
    gridColumn: "5/span 8",
    gridRow: "4/ span 10",
  },
  dummyRecommendBadDesc: {
    gridColumn: "5/span 8",
    gridRow: "3/ span 10",
  },

  netflixLinkBtnGrid: {
    gridColumn: "5/ span 5",
    gridRow: "-5/ span 2",
  },

  NetflixBtn: {
    maxheight: "100%",
  },

  restartBtnGrid: {
    gridColumn: "4/ span 6",
    gridRow: "-2/ span 2",
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

function RecommendTitle() {

  return (
    <Box>
      <Typography>
        나와 잘 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?
      </Typography>
    </Box>
  );
}
function RecommendDesc() {

  return (
    <Box>
      <Typography variant="h6">
        ENFJ 타이타닉의 Jack
      </Typography>
      <Typography>
        항상 사랑을 말하는 ESFP 남자. 낙천적이고 관계 맺기를 좋아하지만,
        조금이라도 관계가 불편해지면 빠르게 거리를 둬요.
      </Typography>
    </Box>
  );
}


function LinkButton() {
  const classes = useStyles();
  return (
    <Link href="https://www.naver.com/" underline="none" target="_blank">
      <Button variant="outlined" className={classes.dummyBtn} color="secondary">
        Netflix에서 보기
      </Button>
    </Link>
  );
}

function RestartButton() {
  const classes = useStyles();
  return (
    <Link component={RouterLink} to="/" underline="none">
      <CustomRestartBtn variant="contained" className={classes.restartBtn} color="secondary">
        테스트 다시 하기
      </CustomRestartBtn>
    </Link>
  );
}

function RecommendComponent(){
  const classes = useStyles();

  return(
    <Grid className={classes.recommendContainer} item>
      <Grid className={classes.recommendTitleGrid}>
        <RecommendTitle />
      </Grid>
      <Grid className={classes.ImageGrid}>
        <img className={classes.PosterImg} src={dummy_poster_img} alt="poster"/>
      </Grid>
      <Grid className={classes.recommendDesc}>
        <RecommendDesc />
      </Grid>
      <Grid className={classes.netflixLinkBtnGrid}>
        <LinkButton />
      </Grid>
    </Grid>
  )
}


export default function RecommendContentsTemplate({ mbtiType, genderType }) {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.container}>
        <Grid className={classes.recommendGrid} item>
          <RecommendComponent/>
        </Grid>
        <Grid className={classes.recommendGrid} item>
          <RecommendComponent/>
        </Grid>
          <Grid className={classes.restartBtnGrid} mt={40}>
            <RestartButton/>
          </Grid>
      </Grid>
    </>
  );
}
