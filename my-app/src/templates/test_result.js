import React, { useContext } from "react";
import { Button, Grid, Box } from "@material-ui/core";
import { MbtiContext } from "../App";
import { useStyles } from "./styles/test_result_styles";
import TransitionsModal from "../components/modal_result";
import { Mobile, PC, PCwide, Tablet } from "../components/MediaQuery";

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
            {data.description}
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
            {data.description}
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
            {data.description}
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
            {data.description}
          </Box>
        </Grid>
      </PCwide>
    </Grid>
  );
}

function DataAnalysisBtn({ value }) {
  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.dummyBtn} color="secondary">
      {value}
    </Button>
  );
}

export default function ResultTemplate({ data }) {
  const classes = useStyles();
  const { setOpenModal } = useContext(MbtiContext);

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
          <DataAnalysisBtn value="어떻게 분석했어?" />
        </Grid>
        <Grid className={classes.buttonGrid}>
          <DataAnalysisBtn value="영화보러 가기" />
        </Grid>
        <TransitionsModal />
      </PC>

      <Mobile>
        <Grid className={classes.mobileResultMainGrid} item>
          <ResultMain data={data} />
        </Grid>
        <Grid className={classes.resultDescriptionGrid} item>
          <ResultDescription data={data} />
        </Grid>
        <Grid className={classes.buttonGrid} onClick={() => setOpenModal(true)}>
          <DataAnalysisBtn value="어떻게 분석했어?" />
        </Grid>
        <Grid className={classes.buttonGrid}>
          <DataAnalysisBtn value="영화보러 가기" />
        </Grid>
        <TransitionsModal />
      </Mobile>

      <Tablet>
        <Grid className={classes.resultMainGrid} item>
          <ResultMain data={data} />
        </Grid>
        <Grid className={classes.resultDescriptionGrid} item>
          <ResultDescription data={data} />
        </Grid>
        <Grid className={classes.buttonGrid} onClick={() => setOpenModal(true)}>
          <DataAnalysisBtn value="어떻게 분석했어?" />
        </Grid>
        <Grid className={classes.buttonGrid}>
          <DataAnalysisBtn value="영화보러 가기" />
        </Grid>
        <TransitionsModal />
      </Tablet>

      <PCwide>
        <Grid className={classes.resultMainGrid} item>
          <ResultMain data={data} />
        </Grid>
        <Grid className={classes.resultDescriptionGrid} item>
          <ResultDescription data={data} />
        </Grid>
        <Grid className={classes.buttonGrid} onClick={() => setOpenModal(true)}>
          <DataAnalysisBtn value="어떻게 분석했어?" />
        </Grid>
        <Grid className={classes.buttonGrid}>
          <DataAnalysisBtn value="영화보러 가기" />
        </Grid>
        <TransitionsModal />
      </PCwide>
    </Grid>
  );
}
