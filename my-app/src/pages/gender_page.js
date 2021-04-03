import React from "react";
import NavBar from "../components/nav_bar";
import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    color: "white",
  },
});

export function GenderPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box>
        <NavBar />
        <Grid container>
          <div class="gender_contents">
            <div class="gender_sentence">
              <p>테스트를 진행할 프로필을 선택하세요.</p>
            </div>
            <div class="gender_selection">
              <div class="gender_male">
                <Link to="/test">
                  <img src="/images/male_pic.jpg" alt="male_pic" />
                </Link>
                <p>남성</p>
              </div>
              <div class="gender_female">
                <Link to="/test">
                  <img src="/images/female_pic.jpg" alt="female_pic" />
                </Link>
                <p>여성</p>
              </div>
            </div>
          </div>
        </Grid>
      </Box>
    </div>
  );
}
