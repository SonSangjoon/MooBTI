import React from "react";
import NavBar from "../components/nav_bar";
import Footer from "../components/footer";
import ShareButton from "../components/share_buttons";
import ResultTemplate from "../templates/test_result";
import RecommendContentsTemplate from "../templates/recommend_contents";
import { Box, Grid } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";
import {useStyles} from "./styles/result_page_styles"

export function ResultPage({ match }) {
  const classes = useStyles();

  const mbtiType = match.params.mbti;
  const genderType = match.params.gender;

  return (
    <Box className={classes.root}>
      <PC >
        <NavBar />
        <Grid className={classes.container}>
          <Grid className={classes.resultGrid} item>
            <ResultTemplate mbtiType={mbtiType} genderType={genderType} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate mbtiType={mbtiType} genderType={genderType}/>
          </Grid>
          <Grid className={classes.shareBtnGrid} item>
            <ShareButton />
          </Grid>
        </Grid>
        <Footer />
      </PC>

      <Mobile>
        <Box className={classes.mobileContainer}>
          <NavBar pageType="mobile" />
            <Box className={classes.mobileBlock}>
            </Box>
            <Box className={classes.mobileResultBlock}>
              <ResultTemplate mbtiType={mbtiType} genderType={genderType} />
            </Box>
            <Box className={classes.mobileRecommendBlock}>
              <RecommendContentsTemplate mbtiType={mbtiType} genderType={genderType}/>
            </Box>
              <ShareButton className={classes.mobileShareButton}/>
          <Footer />
      </Box>

      </Mobile>

      {/* Tablet view */}

      <Tablet>
        <NavBar />
        <Grid className={classes.container}>
          <Grid className={classes.resultGrid} item>
            <ResultTemplate mbtiType={mbtiType} genderType={genderType} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate mbtiType={mbtiType} genderType={genderType}/>
          </Grid>
          <Grid className={classes.shareBtnGrid} item>
            <ShareButton />
          </Grid>
        </Grid>
        <Footer />
      </Tablet>

      {/* PC wide view */}

      <PCwide>
      <NavBar />
        <Grid className={classes.container}>
          <Grid className={classes.resultGrid} item>
            <ResultTemplate mbtiType={mbtiType} genderType={genderType} />
          </Grid>
          <Grid className={classes.recommendContentsGrid} item>
            <RecommendContentsTemplate mbtiType={mbtiType} genderType={genderType}/>
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
