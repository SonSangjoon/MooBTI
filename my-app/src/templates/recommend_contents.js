import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box, Grid, Link, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles/recommend_contents_styles";
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

function LinkButton({ url }) {
  const classes = useStyles();
  
  if (url[4] === 'n'){
    return (
      <Link href={"https://" + url} underline="none" target="_blank">
        <CustomRestartBtn className={classes.movieLinkBtn}>
          <Typography className={classes.movieLinkText}>
            NETFLIX에서 확인하기
          </Typography>
        </CustomRestartBtn>
      </Link>
    );
  }
  else{
    return (
      <Link href={"https://" + url} underline="none" target="_blank">
        <CustomRestartBtn className={classes.movieLinkBtn}>
          <Typography className={classes.movieLinkText}>
          왓챠에서 확인하기
          </Typography>
        </CustomRestartBtn>
      </Link>
    );
  }
}

function RestartButton() {
  const classes = useStyles();
  return (
    <Link component={RouterLink} to="/" underline="none">
      <Button className={classes.restartBtn}>
        <Typography className={classes.restartBtnText}>
          테스트 다시 하기
        </Typography>
      </Button>
    </Link>
  );
}

function RecommendComponent({ data, value }) {
  const classes = useStyles();

  return (
    <Grid className={classes.recommendContainer} item>
      <PC>
        <Grid className={classes.recommendTitleGrid}>
          <Box className={classes.recommendTitleText}>{value}</Box>
        </Grid>
        <Grid className={classes.ImageGrid}>
          <img
            className={classes.posterImg}
            src={data.imageSmallUrl}
            alt="poster"
          />
        </Grid>
        <Grid className={classes.recommendDesc}>
          <Box className={classes.recommendCharText}>
            {data.mbit} {data.movie}의 {data.name}
          </Box>
          <Box className={classes.recommendDescText}>{data.shortDesc}</Box>
        </Grid>
        <Grid className={classes.movieLinkBtnGrid}>
          <LinkButton url={data.movieUrl} />
        </Grid>
      </PC>

      <Mobile>
        <Grid className={classes.mobileRecommendTitleGrid}>
          <Box className={classes.mobileRecommendTitleText}>{value}</Box>
        </Grid>
        <Grid className={classes.mobileImageGrid}>
          <img
            className={classes.posterImg}
            src={data.imageSmallUrl}
            alt="poster"
          />
        </Grid >
        <Grid className={classes.mobileCharTitleGrid} item>
          <Box className={classes.mobileRecommendCharText}>
            {data.mbit} {data.movie}의 {data.name}
          </Box>
        </Grid>
        <Grid className={classes.mobileRecommendDesc}>

          <Box className={classes.mobileRecommendDescText}>{data.shortDesc}</Box>
        </Grid>
        <Grid className={classes.mobileMovieLinkBtnGrid}>
          <LinkButton url={data.movieUrl} />
        </Grid>
      </Mobile>

      <Tablet>
        <Grid className={classes.tabletRecommendTitleGrid}>
          <Box className={classes.tabletRecommendTitleText}>{value}</Box>
        </Grid>
        <Grid className={classes.ImageGrid}>
          <img
            className={classes.posterImg}
            src={data.imageSmallUrl}
            alt="poster"
          />
        </Grid>
        <Grid className={classes.tabletRecommendDesc}>
          <Box className={classes.tabletRecommendCharText}>
            {data.mbit} {data.movie}의 {data.name}
          </Box>
          <Box className={classes.tabletrecommendDescText}>{data.shortDesc}</Box>
        </Grid>
        <Grid className={classes.tabletMovieLinkBtnGrid}>
          <LinkButton url={data.movieUrl} />
        </Grid>
      </Tablet>

      <PCwide>
        <Grid className={classes.recommendTitleGrid}>
          <Box className={classes.recommendTitleText}>{value}</Box>
        </Grid>
        <Grid className={classes.ImageGrid}>
          <img
            className={classes.posterImg}
            src={data.imageSmallUrl}
            alt="poster"
          />
        </Grid>
        <Grid className={classes.recommendDesc}>
          <Box className={classes.recommendCharText}>
            {data.mbit} {data.movie}의 {data.name}
          </Box>
          <Box className={classes.recommendDescText}>{data.shortDesc}</Box>
        </Grid>
        <Grid className={classes.movieLinkBtnGrid}>
          <LinkButton url={data.movieUrl} />
        </Grid>
      </PCwide>
    </Grid>
  );
}

export default function RecommendContentsTemplate({ data }) {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <PC>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent
            data={data.good}
            value="💖 나와 케미 터지는 여주(남주)는 누구?"
          />
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent
            data={data.bad}
            value="💔 나와 케미 별로인 여주(남주)는 누구?"
          />
        </Grid>
        <Grid className={classes.restartBtnGrid} mt={40}>
          <RestartButton />
        </Grid>
      </PC>

      <Mobile>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent
            data={data.good}
            value="💖 나와 케미 터지는 여주(남주)는 누구?"
          />
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent
            data={data.bad}
            value="💔 나와 케미 별로인 여주(남주)는 누구?"
          />
        </Grid>
        <Grid className={classes.restartBtnGrid} mt={40}>
          <RestartButton />
        </Grid>
      </Mobile>

      <Tablet>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent
            data={data.good}
            value="💖 나와 케미 터지는 여주(남주)는 누구?"
          />
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent
            data={data.bad}
            value="💔 나와 케미 별로인 여주(남주)는 누구?"
          />
        </Grid>
        <Grid className={classes.tabletRestartBtnGrid} mt={40}>
          <RestartButton />
        </Grid>
      </Tablet>

      <PCwide>
        <Grid className={classes.recommendGrid1} item>
          <RecommendComponent
            data={data.good}
            value="💖 나와 케미 터지는 여주(남주)는 누구?"
          />
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent
            data={data.bad}
            value="💔 나와 케미 별로인 여주(남주)는 누구?"
          />
        </Grid>
        <Grid className={classes.restartBtnGrid} mt={40}>
          <RestartButton />
        </Grid>
      </PCwide>
    </Grid>
  );
}
