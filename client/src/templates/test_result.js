import React, { useContext, useEffect } from "react";
import { Button, Grid, Box, Typography } from "@material-ui/core";
import { MbtiContext } from "../App";
import { useStyles } from "./styles/test_result_styles";
import TransitionsModal from "../components/modal_result";
import { Mobile, PC, PCwide, Tablet } from "../components/MediaQuery";
import ReactGA from "react-ga";

function ResultMain({ data }) {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Mobile>
        <Grid className={classes.mobileImageGrid} item>
          <img
            className={classes.characterImage}
            src={data.imageUrl}
            alt="dummy"
          />
        </Grid>
        <Grid className={classes.mobileCharacterTitleGrid}>
          <Box className={classes.mobileCharacterTitle} align="center">
            {data.title}
          </Box>
        </Grid>
        {/* <Grid className={classes.mobileCharacterScript} item>
          <Box className={classes.mobileCharScriptText} align="center">
            {data.script}
          </Box>
        </Grid> */}
      </Mobile>

      <PC>
        <Grid className={classes.imageGrid} item>
          <img
            className={classes.characterImage}
            src={data.imageUrl}
            alt="dummy"
          />
        </Grid>
        <Grid className={classes.characterTitleGrid}>
          <Box className={classes.characterTitle} align="center">
            {data.title}
          </Box>
        </Grid>
      </PC>

      <Tablet>
        <Grid className={classes.tabletImageGrid} item>
          <img
            className={classes.characterImage}
            src={data.imageUrl}
            alt="dummy"
          />
        </Grid>
        <Grid className={classes.tabletCharacterTitleGrid}>
          <Box className={classes.tabletCharacterTitle} align="center">
            {data.title}
          </Box>
        </Grid>
      </Tablet>

      <PCwide>
        <Grid className={classes.pcWideimageGrid} item>
          <img
            className={classes.characterImage}
            src={data.imageUrl}
            alt="dummy"
          />
        </Grid>
        <Grid className={classes.characterTitleGrid}>
          <Box className={classes.characterTitle} align="center">
            {data.title}
          </Box>
        </Grid>
      </PCwide>
    </Grid>
  );
}

function ResultDescription({ data }) {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Mobile>
        <Grid className={classes.mobileCharacterScript} item>
          <Box className={classes.mobileCharScriptText} align="center">
            {data.script}
          </Box>
        </Grid>
        <Grid className={classes.mobileCharacterDetail}>
          <Box align="center" className={classes.mobileCharacterDetailText}>
            {data.description.split("\n").map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
            })}
          </Box>
        </Grid>
      </Mobile>

      <PC>
        <Grid className={classes.characterScript} item>
          <Box className={classes.charScriptText} align="center">
            {data.script}
          </Box>
        </Grid>
        <Grid className={classes.characterDetail}>
          <Box align="center" className={classes.characterDetailText}>
            {data.description.split("\n").map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
            })}
          </Box>
        </Grid>
      </PC>

      <Tablet>
        <Grid className={classes.tabletCharacterScript} item>
          <Box className={classes.tabletCharScriptText} align="center">
            {data.script}
          </Box>
        </Grid>
        <Grid className={classes.tabletCharacterDetail}>
          <Box align="center" className={classes.tabletCharacterDetailText}>
            {data.description.split("\n").map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
            })}
          </Box>
        </Grid>
      </Tablet>

      <PCwide>
        <Grid className={classes.characterScript} item>
          <Box className={classes.charScriptText} align="center">
            {data.script}
          </Box>
        </Grid>
        <Grid className={classes.characterDetail}>
          <Box align="center" className={classes.characterDetailText}>
            {data.description.split("\n").map((line) => {
              return (
                <span>
                  {line}
                  <br />
                </span>
              );
            })}
          </Box>
        </Grid>
      </PCwide>
    </Grid>
  );
}

function DataAnalysisBtn({ value, url }) {
  const classes = useStyles();
  if (url) {
    return (
      <Button
        href={"https://" + url}
        underline="none"
        target="_blank"
        variant="outlined"
        className={classes.analysisBtn}
      >
        <Typography className={classes.analysisText}>{value}</Typography>
      </Button>
    );
  } else {
    return (
      <Button variant="outlined" className={classes.analysisBtn}>
        <Typography className={classes.analysisText}>{value}</Typography>
      </Button>
    );
  }
}

export default function ResultTemplate({ data, genderType }) {
  const classes = useStyles();
  const { setOpenModal } = useContext(MbtiContext);
  useEffect(() => {
    getGA();
  }, []);

  const getGA = () => {
    ReactGA.initialize("UA-196189871-2");
  };

  return (
    <Grid className={classes.container}>
      <PC>
        <Grid className={classes.resultMainGrid} item>
          <ResultMain data={data} />
        </Grid>
        <Grid className={classes.resultDescriptionGrid} item>
          <ResultDescription data={data} />
        </Grid>
        <Grid className={classes.buttonGrid} onClick={() => setOpenModal(true)}>
          <DataAnalysisBtn value="🔦 캐릭터의 연애 비결은?" />
        </Grid>
        <Grid className={classes.buttonGrid}>
          {data.movieUrl[4] === "n" ? (
            <Grid className={classes.buttonGrid}>
              <DataAnalysisBtn
                value="👀 넷플릭스에서 확인하기"
                url={data.movieUrl}
                onClick={() => {
                  ReactGA.initialize("UA-196189871-2");
                  ReactGA.event({
                    category: "Watch Movie",
                    action: "link to netflix",
                    label: data.movieUrl,
                  });
                }}
              />
            </Grid>
          ) : (
            <Grid className={classes.buttonGrid}>
              <DataAnalysisBtn
                value="👀 왓챠에서 확인하기"
                url={data.movieUrl}
                onClick={() => {
                  ReactGA.initialize("UA-196189871-2");
                  ReactGA.event({
                    category: "Watch Movie",
                    action: "link to watcha",
                    label: data.movieUrl,
                  });
                }}
              />
            </Grid>
          )}
        </Grid>
        <TransitionsModal data={data} genderType={genderType} />
      </PC>

      <Tablet>
        <Grid className={classes.resultMainGrid} item>
          <ResultMain data={data} />
        </Grid>
        <Grid className={classes.resultDescriptionGrid} item>
          <ResultDescription data={data} />
        </Grid>
        <Grid
          className={classes.tabletButtonGrid}
          onClick={() => setOpenModal(true)}
        >
          <DataAnalysisBtn value="🔦 캐릭터의 연애 비결은?" />
        </Grid>
        {data.movieUrl[4] === "n" ? (
          <Grid className={classes.tabletButtonGrid}>
            <DataAnalysisBtn
              value="👀 넷플릭스에서 확인하기"
              url={data.movieUrl}
              onClick={() => {
                ReactGA.initialize("UA-196189871-2");
                ReactGA.event({
                  category: "Watch Movie",
                  action: "link to netflix",
                  label: data.movieUrl,
                });
              }}
            />
          </Grid>
        ) : (
          <Grid className={classes.tabletButtonGrid}>
            <DataAnalysisBtn
              value="👀 왓챠에서 확인하기"
              url={data.movieUrl}
              onClick={() => {
                ReactGA.initialize("UA-196189871-2");
                ReactGA.event({
                  category: "Watch Movie",
                  action: "link to watcha",
                  label: data.movieUrl,
                });
              }}
            />
          </Grid>
        )}
        <TransitionsModal data={data} genderType={genderType} />
      </Tablet>

      <PCwide>
        <Grid className={classes.resultMainGrid} item>
          <ResultMain data={data} />
        </Grid>
        <Grid className={classes.resultDescriptionGrid} item>
          <ResultDescription data={data} />
        </Grid>
        <Grid className={classes.buttonGrid} onClick={() => setOpenModal(true)}>
          <DataAnalysisBtn value="🔦 캐릭터의 연애 비결은?" />
        </Grid>
        {data.movieUrl[4] === "n" ? (
          <Grid className={classes.buttonGrid}>
            <DataAnalysisBtn
              value="👀 넷플릭스에서 확인하기"
              url={data.movieUrl}
              onClick={() => {
                ReactGA.initialize("UA-196189871-2");
                ReactGA.event({
                  category: "Watch Movie",
                  action: "link to netflix",
                  label: data.movieUrl,
                });
              }}
            />
          </Grid>
        ) : (
          <Grid className={classes.buttonGrid}>
            <DataAnalysisBtn
              value="👀 왓챠에서 확인하기"
              url={data.movieUrl}
              onClick={() => {
                ReactGA.initialize("UA-196189871-2");
                ReactGA.event({
                  category: "Watch Movie",
                  action: "link to watcha",
                  label: data.movieUrl,
                });
              }}
            />
          </Grid>
        )}
        <TransitionsModal data={data} genderType={genderType} />
      </PCwide>
    </Grid>
  );
}

export function MobileResultTemplate({ data, genderType }) {
  const classes = useStyles();
  const { setOpenModal } = useContext(MbtiContext);
  return (
    <Mobile>
      <Grid className={classes.mobileResultMainGrid} item>
        <ResultMain data={data} />
      </Grid>
      <Grid className={classes.mobileResultDescriptionGrid} item>
        <ResultDescription data={data} />
      </Grid>
      <Grid
        className={classes.mobileButtonGrid}
        onClick={() => setOpenModal(true)}
      >
        <DataAnalysisBtn value="🔦 캐릭터의 연애 비결은?" />
      </Grid>
      {data.movieUrl[4] === "n" ? (
        <Grid className={classes.mobileButtonGrid}>
          <DataAnalysisBtn
            value="👀 넷플릭스에서 확인하기"
            url={data.movieUrl}
            onClick={() => {
              ReactGA.initialize("UA-196189871-2");
              ReactGA.event({
                category: "Watch Movie",
                action: "link to netflix",
                label: data.movieUrl,
              });
            }}
          />
        </Grid>
      ) : (
        <Grid className={classes.mobileButtonGrid}>
          <DataAnalysisBtn
            value="👀 왓챠에서 확인하기"
            url={data.movieUrl}
            onClick={() => {
              ReactGA.initialize("UA-196189871-2");
              ReactGA.event({
                category: "Watch Movie",
                action: "link to watcha",
                label: data.movieUrl,
              });
            }}
          />
        </Grid>
      )}
      <TransitionsModal data={data} genderType={genderType} />
    </Mobile>
  );
}
