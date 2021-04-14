import React, { useContext } from "react";
import { Button, Grid, Box } from "@material-ui/core";
import { GenderContext } from "../App";
import { useStyles } from './styles/test_result_styles'
import TransitionsModal from '../components/modal'

function ResultMain({data}) {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Grid className={classes.imageGrid} item>
        <img className={classes.characterImage} src={data.imageUrl} alt="dummy" />
      </Grid>
      <Grid className={classes.characterTitleGrid}>
        <Box className={classes.characterTitle} align="center">
          {data.title}
        </Box>
      </Grid>
    </Grid>
  );
}

function ResultDescription({data}) {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
        <Grid className={classes.characterScript} item>
          <Box className={classes.charScriptFont} align="center">
            {data.script}
          </Box>
        </Grid>
        <Grid className={classes.characterDetail}>
          <Box align="center" className={classes.characterDetailText} >
          {data.description}
          </Box>
        </Grid>
    </Grid>
  );
}

function DataAnalysisBtn({value}) {

  const classes = useStyles();
  return (
    <Button variant="outlined" className={classes.dummyBtn} color="secondary">
      {value}
    </Button>
  );
}

export default function ResultTemplate({data}) {
  const classes = useStyles();
  const { setOpenModal } = useContext(GenderContext);

  return (
    <Grid className={classes.container} >
      <Grid className={classes.resultMainGrid}  item>
        <ResultMain data={data}/>
      </Grid>
      <Grid className={classes.resultDescriptionGrid} item>
        <ResultDescription data={data}/>
      </Grid>
      <Grid className={classes.buttonGrid} onClick ={() => setOpenModal(true)}>
        <DataAnalysisBtn value= "어떻게 분석했어?"/>
      </Grid>
      <Grid className={classes.buttonGrid}>
        <DataAnalysisBtn value= "영화보러 가기"/>
      </Grid>
      <TransitionsModal />
    </Grid>
  );
}



