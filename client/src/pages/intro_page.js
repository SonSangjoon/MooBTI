import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/nav_bar";
import Footer from "../components/footer";
import { Box, Grid, Button } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery";
import { useStyles } from "./styles/intro_page_styles";
import ReactGA from "react-ga";
import { useEffect } from "react";

function IntroPageText() {
  const classes = useStyles();

  return (
    <Box>
      <PC>
        <Box className={classes.mainText}>
          내가 만약 로맨스 영화 주인공이라면?
        </Box>
        <Box className={classes.subText}>
          로맨스 영화 속 나의 부캐와 궁합을 찾고,
          <br />
          당신의 연애를 코칭해 줄 영화를 받아보세요!
        </Box>
        <Link to="/gender" className={classes.link}>
          <Button className={classes.button}>검사하기</Button>
        </Link>
      </PC>

      <Mobile>
        <Box className={classes.mobileTextBox}>
          <Box className={classes.mobileMainText}>
            내가 만약 로맨스 영화 주인공이라면?
          </Box>
          <Box className={classes.mobileSubText}>
            로맨스 영화 속 나의 부캐와 궁합을 찾고,
            <br />
            당신의 연애를 코칭해 줄 영화를 받아보세요!
          </Box>
        </Box>
        <Link to="/gender" className={classes.mobileLink}>
          <Button className={classes.mobileButton}>검사하기</Button>
        </Link>
      </Mobile>

      <Tablet>
        <Box className={classes.mainText}>
          내가 만약 로맨스 영화 주인공이라면?
        </Box>
        <Box className={classes.subText}>
          로맨스 영화 속 나의 부캐와 궁합을 찾고,
          <br />
          당신의 연애를 코칭해 줄 영화를 받아보세요!
        </Box>
        <Link to="/gender" className={classes.link}>
          <Button className={classes.button}>검사하기</Button>
        </Link>
      </Tablet>

      <PCwide>
        <Box className={classes.mainText}>
          내가 만약 로맨스 영화 주인공이라면?
        </Box>
        <Box className={classes.subText}>
          로맨스 영화 속 나의 부캐와 궁합을 찾고,
          <br />
          당신의 연애를 코칭해 줄 영화를 받아보세요!
        </Box>
        <Link to="/gender" className={classes.link}>
          <Button className={classes.button}>시작하기</Button>
        </Link>
      </PCwide>
    </Box>
  );
}

export function IntroPage() {
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

  return (
    <Box className={classes.root}>
      <PC>
        <NavBar pageType="intro" />
        <Grid className={classes.container}>
          <Grid className={classes.emptyGrid} item></Grid>
          <Grid className={classes.textGrid} item>
            <IntroPageText />
          </Grid>
        </Grid>
        <Footer />
      </PC>

      <Mobile>
        <NavBar pageType="mobile" />
        <Box className={classes.mobileContainer}>
          <IntroPageText />
        </Box>
        <Footer />
      </Mobile>

      <Tablet>
        <NavBar pageType="intro" />
        <Grid className={classes.container}>
          <Grid className={classes.emptyGrid} item></Grid>
          <Grid className={classes.textGrid} item>
            <IntroPageText />
          </Grid>
        </Grid>
        <Footer />
      </Tablet>

      <PCwide>
        <NavBar pageType="intro" />
        <Grid className={classes.container}>
          <Grid className={classes.emptyGrid} item></Grid>
          <Grid className={classes.textGrid} item>
            <IntroPageText />
          </Grid>
        </Grid>
        <Footer />
      </PCwide>
    </Box>
  );
}
