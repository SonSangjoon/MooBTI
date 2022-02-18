import React from "react";
import NavBar from "../components/nav_bar";
import Footer from "../components/footer";
import ShareButton from "../components/share_buttons";
import ResultTemplate from "../templates/test_result";
import MobileResultTemplate from "../templates/test_result_mobile";
import RecommendContentsTemplate from "../templates/recommend_contents";
import MobileRecommendContentsTemplate from "../templates/recommend_contents_mobile";
import { Box, Grid } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";
import { useStyles } from "./styles/result_page_styles";
import { resultList } from "../data/result_data";
import { useEffect } from "react";
import ReactGA from "react-ga";


export function ResultPage({ match }) {
  const classes = useStyles();
  
  useEffect(() => {
    getGA();
  }, []);

  const getGA = () => {
    const pathName = window.location.pathname;
    ReactGA.initialize("UA-196189871-2");
    ReactGA.set({ page: pathName });
    ReactGA.pageview(pathName);
  };

  const mbtiType = match.params.mbti.toUpperCase();
  const genderType = match.params.gender.toLowerCase();

  const data = resultList[mbtiType][genderType];
  const recommendData = {
    good:
      resultList[data["goodMbti"]][genderType === "male" ? "female" : "male"],
    bad: resultList[data["badMbti"]][genderType === "male" ? "female" : "male"],
  };

  return (
    <Box className={classes.root}>
      <PC>
        <NavBar pageType="intro" />
        <Grid className={classes.container}>
          <Grid className={classes.resultGrid} item>
            <ResultTemplate data={data} genderType={genderType} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate data={recommendData} />
          </Grid>
          <Box className={classes.shareButton}>
            <ShareButton data={data} />
          </Box>
        </Grid>
        <Footer />
      </PC>

      <Mobile>
        <Box className={classes.mobileContainer}>
          <NavBar pageType="mobile" />
          <Box className={classes.mobileRecommendBlock1}>
            <MobileResultTemplate data={data} genderType={genderType} />
          </Box>
          <Box className={classes.mobileRecommendBlock}>
            <MobileRecommendContentsTemplate data={recommendData} />
          </Box>
          <Box className={classes.mobileShareButton}>
            <ShareButton data={data} />
          </Box>
          <Footer type="mobile" />
        </Box>
      </Mobile>

      <Tablet>
        <NavBar pageType="intro" />
        <Grid className={classes.container}>
          <Grid className={classes.resultGrid} item>
            <ResultTemplate data={data} genderType={genderType} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate data={recommendData} />
          </Grid>
          <Box className={classes.shareButton}>
            <ShareButton data={data} />
          </Box>
        </Grid>
        <Footer />
      </Tablet>

      <PCwide>
        <NavBar pageType="intro" />
        <Grid className={classes.container}>
          <Grid className={classes.resultGrid} item>
            <ResultTemplate data={data} genderType={genderType} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate data={recommendData} />
          </Grid>
          <Box className={classes.shareButton}>
            <ShareButton data={data} />
          </Box>
        </Grid>
        <Footer />
      </PCwide>
    </Box>
  );
}
