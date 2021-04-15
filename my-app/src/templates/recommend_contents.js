import React from "react";
import {Link as RouterLink} from "react-router-dom"
import { Button, Box, Grid, Link } from "@material-ui/core";
import {  withStyles } from "@material-ui/core/styles";
import { useStyles }   from './styles/recommend_contents_styles'
import { PC, Mobile, PCwide, Tablet } from "../components/MediaQuery";

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
        <CustomRestartBtn variant="contained" className={classes.movieLinkBtn} color="secondary">
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
      <PC>
        <Grid className={classes.recommendTitleGrid}>
          <Box className={classes.recommendTitleText}> 
            {value}
          </Box>
        </Grid>
        <Grid className={classes.ImageGrid}>
          <img className={classes.PosterImg} src={data.imageSmallUrl} alt="poster"/>
        </Grid>
        <Grid className={classes.recommendDesc}>
          <Box className={classes.recommendCharText} >
            {data.mbit} {data.movie}의 {data.name}
          </Box>
          <Box className={classes.recommendDescText}>
            {data.shortDesc}
          </Box>
        </Grid>
        <Grid className={classes.movieLinkBtnGrid}>
          <LinkButton url={data.movieUrl}/>
        </Grid>
      </PC>


      <Mobile>
      <Grid className={classes.mobileRecommendTitleGrid}>
        <Box className={classes.mobileRecommendTitleText}>
          {value}
        </Box>
      </Grid>
      <Grid className={classes.ImageGrid}>
        <img className={classes.PosterImg} src={data.imageSmallUrl} alt="poster"/>
      </Grid>
      <Grid className={classes.mobileRecommendDesc}>
        <Box className={classes.mobileRecommendCharText}>
          {data.mbit} {data.movie}의 {data.name}
        </Box>
        <Box className={classes.recommendDescText}>
          {data.shortDesc}
        </Box>
      </Grid>
      <Grid className={classes.mobileMovieLinkBtnGrid}>
        <LinkButton url={data.movieUrl}/>
      </Grid>
      </Mobile>


      <Tablet>
      <Grid className={classes.tabletRecommendTitleGrid}>
        <Box className={classes.tabletRecommendTitleText}>
          {value}
        </Box>
      </Grid>
      <Grid className={classes.ImageGrid}>
        <img className={classes.PosterImg} src={data.imageSmallUrl} alt="poster"/>
      </Grid>
      <Grid className={classes.tabletRecommendDesc}>
        <Box className={classes.tabletRecommendCharText}>
          {data.mbit} {data.movie}의 {data.name}
        </Box>
        <Box className={classes.recommendDescText}>
          {data.shortDesc}
        </Box>
      </Grid>
      <Grid className={classes.tabletMovieLinkBtnGrid}>
        <LinkButton url={data.movieUrl}/>
      </Grid>
      </Tablet>


      <PCwide>
      <Grid className={classes.recommendTitleGrid}>
        <Box className={classes.recommendTitleText}>
          {value}
        </Box>
      </Grid>
      <Grid className={classes.ImageGrid}>
        <img className={classes.PosterImg} src={data.imageSmallUrl} alt="poster"/>
      </Grid>
      <Grid className={classes.recommendDesc}>
        <Box className={classes.recommendCharText} >
          {data.mbit} {data.movie}의 {data.name}
        </Box>
        <Box className={classes.recommendDescText}>
          {data.shortDesc}
        </Box>
      </Grid>
      <Grid className={classes.movieLinkBtnGrid}>
        <LinkButton url={data.movieUrl}/>
      </Grid>
      </PCwide>
    </Grid>
  )
}


export default function RecommendContentsTemplate({data}) {
  const classes = useStyles();
  console.log(data.good)
  return (
    
      <Grid className={classes.container}>
        <PC>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent data={data.good} value="나와 잘 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent data={data.bad} value="나와 안 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
          <Grid className={classes.restartBtnGrid} mt={40}>
            <RestartButton/>
          </Grid>
        </PC>

        <Mobile>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent data={data.good} value="나와 잘 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent data={data.bad} value="나와 안 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
          <Grid className={classes.restartBtnGrid} mt={40}>
            <RestartButton/>
          </Grid>
        </Mobile>

        <Tablet>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent data={data.good} value="나와 잘 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent data={data.bad} value="나와 안 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
          <Grid className={classes.restartBtnGrid} mt={40}>
            <RestartButton/>
          </Grid>
        </Tablet>

        <PCwide>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent data={data.good} value="나와 잘 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent data={data.bad} value="나와 안 맞는 MBTI의 영화 주인공은 어떻게 연애했을까?"/>
        </Grid>
          <Grid className={classes.restartBtnGrid} mt={40}>
            <RestartButton/>
          </Grid>
        </PCwide>
      </Grid>
  );
}
