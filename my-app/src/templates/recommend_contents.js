import React from "react";
import {Link as RouterLink} from "react-router-dom"
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

function LinkButton({url}) {
  const classes = useStyles();
  console.log(url[4])

    return (
      <Link href={"https://" + url} underline="none" target="_blank">
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


function RecommendComponent({data, value}){
  const classes = useStyles();

  return(
    <Grid className={classes.recommendContainer} item>
      <Grid className={classes.recommendTitleGrid}>
        <Box>
          {value}
        </Box>
      </Grid>
      <Grid className={classes.ImageGrid}>
        <img className={classes.PosterImg} src={data.imageSmallUrl} alt="poster"/>
      </Grid>
      <Grid className={classes.recommendDesc}>
        <Box variant="h6">
          {data.mbit} {data.movie}의 {data.name}
        </Box>
        <Box className={classes.recommendDescFont}>
          {data.shortDesc}
        </Box>
      </Grid>
      <Grid className={classes.netflixLinkBtnGrid}>
        <LinkButton url={data.movieUrl}/>
      </Grid>
    </Grid>
  )
}


export default function RecommendContentsTemplate({data}) {
  const classes = useStyles();
  console.log(data.good)
  return (
    <>
      <Grid className={classes.container}>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent data={data.good} value="나와 잘 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent data={data.bad} value="나와 안 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
          <Grid className={classes.restartBtnGrid} mt={40}>
            <RestartButton/>
          </Grid>
      </Grid>
    </>
  );
}
