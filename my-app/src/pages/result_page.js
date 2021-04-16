import React from "react";
import NavBar from "../components/nav_bar";
import Footer from "../components/footer";
import ShareButton from "../components/share_buttons";
import ResultTemplate from "../templates/test_result";
import RecommendContentsTemplate from "../templates/recommend_contents";
import { Box, Grid } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";
import { useStyles } from "./styles/result_page_styles";
import { resultList } from "../data/result_data";

export function ResultPage({ match }) {
  const classes = useStyles();

  const mbtiType = match.params.mbti.toUpperCase();
  const genderType = match.params.gender;

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
            <ResultTemplate data={data} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate data={recommendData} />
          </Grid>
          <Grid className={classes.shareBtnGrid} item>
            <ShareButton data={data} />
          </Grid>
        </Grid>
        <Footer />
      </PC>

      <Mobile>
        <Box className={classes.mobileContainer}>
          <NavBar pageType="intro"  />
          <Box className={classes.mobileBlock}></Box>
          <Box className={classes.mobileResultBlock}>
            <ResultTemplate data={data} />
          </Box>
          <Box className={classes.mobileRecommendBlock}>
            <RecommendContentsTemplate data={recommendData} />
          </Box>
          <Box className={classes.mobileShareButton}>
            <ShareButton />
          </Box>
          <Footer type="mobile" />
        </Box>
      </Mobile>

      {/* Tablet view */}

      <Tablet>
        <NavBar pageType="intro" />
        <Grid className={classes.container}>
          <Grid className={classes.resultGrid} item>
            <ResultTemplate data={data} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate data={recommendData} />
          </Grid>
          <Grid className={classes.shareBtnGrid} item>
            <ShareButton />
          </Grid>
        </Grid>
        <Footer />
      </Tablet>

      {/* PC wide view */}

      <PCwide>
        <NavBar pageType="intro" />
        <Grid className={classes.container}>
          <Grid className={classes.resultGrid} item>
            <ResultTemplate data={data} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate data={recommendData} />
          </Grid>
          <Grid className={classes.shareBtnGrid} item>
            <ShareButton />
          </Grid>
        </Grid>
        <Footer />
      </PCwide>
    </Box>
  );
}
