import React from "react";
import NavBar from "../components/nav_bar";
import Footer from "../components/footer";
import ShareButton from "../components/share_buttons";
import ResultTemplate from "../templates/test_result";
import RecommendContentsTemplate from "../templates/recommend_contents";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "black",
  },

  container: {
    height: "100vh",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  emptyRow: {
    gridColumn: "span 12",
    gridRow: "span 1",
  },

  emptyColumn: {
    gridRow: "span 10",
    gridColumn: "span 1",
  },

  resultGrid: {
    gridColumn: "2/span 5",
    gridRow: "2/span 10",
    color: "white",
  },

  result: {
    display: "flex",
  },
  recommendContentsGrid: {
    gridColumn: "8/span 4",
    gridRow: "2/span 10",
    color: "white",
  },
  shareBtnGrid: {
    gridColumn: "12",
    gridRow: "10/span 2",
  },
}));

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
          mobile
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
