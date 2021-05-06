import React, { useContext } from "react";
import { Button, Box, Typography } from "@material-ui/core";
import { MbtiContext } from "../App";
import { useStyles } from "./styles/test_result_styles";
import TransitionsModal from "../components/modal_result";
import { Mobile } from "../components/MediaQuery";

function ResultMain({ data }) {
  const classes = useStyles();
  return (
    <Box>
      <Mobile>
        <Box className={classes.mobileImageBox}>
          <img
            className={classes.mobilecharacterImage}
            src={data.imageUrl}
            alt="dummy"
          />
        </Box>
        <Box className={classes.mobileCharacterTitle} align="center">
          {data.title}
        </Box>
      </Mobile>
    </Box>
  );
}

function ResultDescription({ data }) {
  const classes = useStyles();
  return (
    <Box className={classes.mobileBoxRoot}>
      <Mobile>
        <Box className={classes.mobileCharScriptText} align="center">
          {data.script}
        </Box>
        <Box align="center" className={classes.mobileCharacterDetailText}>
          {data.description}
        </Box>
      </Mobile>
    </Box>
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
        className={classes.analysisBtnMobile}
      >
        <Typography className={classes.analysisText}>{value}</Typography>
      </Button>
    );
  } else {
    return (
      <Button variant="outlined" className={classes.analysisBtnMobile}>
        <Typography className={classes.analysisText}>{value}</Typography>
      </Button>
    );
  }
}

export default function MobileResultTemplate({ data, genderType }) {
  const classes = useStyles();
  const { setOpenModal } = useContext(MbtiContext);
  return (
    <Mobile>
      <Box className={classes.mobileBoxRoot}>
        <ResultMain data={data} />
        <ResultDescription data={data} />
        <Box
          className={classes.mobileButtonGrid}
          onClick={() => setOpenModal(true)}
        >
          <DataAnalysisBtn value="🔦 캐릭터의 연애 비결은?" />

          {data.movieUrl[4] === "n" ? (
            <DataAnalysisBtn
              value="👀 넷플릭스에서 확인하기"
              url={data.movieUrl}
            />
          ) : (
            <DataAnalysisBtn value="👀 왓챠에서 확인하기" url={data.movieUrl} />
          )}
        </Box>
        <TransitionsModal data={data} genderType={genderType} />
      </Box>
    </Mobile>
  );
}
