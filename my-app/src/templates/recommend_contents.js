import React, { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box, Grid, Link, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles/recommend_contents_styles";
import { PC, Mobile, PCwide, Tablet } from "../components/MediaQuery";
import ReactGA from "react-ga";

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
  useEffect(() => {
    getGA();
  }, []);

  const getGA = () => {
    ReactGA.initialize("UA-196189871-2");
  };

  if (url[4] === "n") {
    return (
      <Link href={"https://" + url} underline="none" target="_blank">
        <CustomRestartBtn
          className={classes.movieLinkBtn}
          onClick={() => {
            ReactGA.initialize("UA-196189871-2");
            ReactGA.event({
              category: "Watch Movie",
              action: "link to netflix",
              label: "https://" + url,
            });
          }}
        >
          <Typography className={classes.movieLinkText}>
            넷플릭스에서 확인하기
          </Typography>
        </CustomRestartBtn>
      </Link>
    );
  } else {
    return (
      <Link href={"https://" + url} underline="none" target="_blank">
        <CustomRestartBtn
          className={classes.movieLinkBtn}
          onClick={() => {
            ReactGA.initialize("UA-196189871-2");
            ReactGA.event({
              category: "Watch Movie",
              action: "link to watcha",
              label: "https://" + url,
            });
          }}
        >
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
          <Box className={classes.recommendDescText}>
            {data.shortDesc.split("\n").map((line) => {
              return (
                <span className={classes.span}>
                  {line}
                  {/* <br /> */}
                </span>
              );
            })}
          </Box>
        </Grid>
        <Grid className={classes.movieLinkBtnGrid}>
          <LinkButton url={data.movieUrl} />
        </Grid>
      </PC>

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
          <Box className={classes.tabletRecommendDescText}>
            {data.shortDesc.split("\n").map((line) => {
              return (
                <span className={classes.span}>
                  {line}
                  <br />
                </span>
              );
            })}
          </Box>
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
          <Box className={classes.recommendDescText}>
            {" "}
            {data.shortDesc.split("\n").map((line) => {
              return (
                <span className={classes.span}>
                  {line}
                  <br />
                </span>
              );
            })}
          </Box>
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
            value="나와 🔥 불꽃 케미 터지는 캐릭터는"
          />
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent
            data={data.bad}
            value="나와 ❄️ 얼음 케미인 캐릭터는"
          />
        </Grid>
        <Grid className={classes.restartBtnGrid} mt={40}>
          <RestartButton />
        </Grid>
      </PC>

      <Mobile>
        <Grid className={classes.mobileRecommendGrid1} item>
          <RecommendComponent
            data={data.good}
            value="나와 🔥 불꽃 케미 터지는 캐릭터는"
          />
        </Grid>
        <Grid className={classes.mobileRecommendGrid2} item>
          <RecommendComponent
            data={data.bad}
            value="나와 ❄️ 얼음 케미인 캐릭터는"
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
            value="나와 🔥 불꽃 케미 터지는 캐릭터는"
          />
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent
            data={data.bad}
            value="나와 ❄️ 얼음 케미인 캐릭터는"
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
            value="나와 🔥 불꽃 케미 터지는 캐릭터는"
          />
        </Grid>
        <Grid className={classes.recommendGrid2} item>
          <RecommendComponent
            data={data.bad}
            value="나와 ❄️ 얼음 케미인 캐릭터는"
          />
        </Grid>
        <Grid className={classes.restartBtnGrid} mt={40}>
          <RestartButton />
        </Grid>
      </PCwide>
    </Grid>
  );
}
