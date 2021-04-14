import React from "react";
import {Link as RouterLink} from "react-router-dom"
import dummy_poster_img from "../images/result/dummy_titanic_poster.jpg";
import { Button, Box, Grid, Link } from "@material-ui/core";
import {  withStyles } from "@material-ui/core/styles";
import { useStyles }   from './styles/recommend_contents_styles'

const CustomRestartBtn = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#c81926",
    "&:hover": {
      backgroundColor: "#99141d",
    },
  },
}))(Button);

function LinkButton() {
  const classes = useStyles();
  return (
    <Link href="https://www.naver.com/" underline="none" target="_blank">
      <CustomRestartBtn variant="contained" className={classes.dummyBtn} color="secondary">
        Netflix에서 보기
      </CustomRestartBtn>
    </Link>
  );
}

function RestartButton() {
  const classes = useStyles();
  return (
    <Link component={RouterLink} to="/" underline="none">
      <Button variant="outlined" className={classes.restartBtn} color="secondary">
        테스트 다시 하기
      </Button>
    </Link>
  );
}


function RecommendComponent(){
  const classes = useStyles();

  return(
    <Grid className={classes.recommendContainer} item>
      <Grid className={classes.recommendTitleGrid}>
        <Box>
          나와 잘 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?
        </Box>
      </Grid>
      <Grid className={classes.ImageGrid}>
        <img className={classes.PosterImg} src={dummy_poster_img} alt="poster"/>
      </Grid>
      <Grid className={classes.recommendDesc}>
        <Box variant="h6">
          ENFJ 타이타닉의 Jack
        </Box>
        <Box className={classes.recommendDescFont}>
          항상 사랑을 말하는 ESFP 남자. 낙천적이고 관계 맺기를 좋아하지만,
          조금이라도 관계가 불편해지면 빠르게 거리를 둬요.
        </Box>
      </Grid>
      <Grid className={classes.netflixLinkBtnGrid}>
        <LinkButton />
      </Grid>
    </Grid>
  )
}


export default function RecommendContentsTemplate() {
  const classes = useStyles();

  return (
    <>
      <Grid className={classes.container}>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent/>
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent/>
        </Grid>
          <Grid className={classes.restartBtnGrid} mt={40}>
            <RestartButton/>
          </Grid>
      </Grid>
    </>
  );
}
