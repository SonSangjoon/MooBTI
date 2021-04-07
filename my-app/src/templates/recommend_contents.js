import React from "react";
import dummy_poster_img from "../images/result/dummy_titanic_poster.jpg";
import { Button, Typography, Box, Grid } from "@material-ui/core";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  recommendContainer: {
    gridColumn: "span 12",
    gridRow: "span 6",
    color: "white",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  dummyScriptGrid1: {
    gridColumn: "span 12",
    gridRow: "2/span 2",
  },
  dummyScriptGrid2: {
    gridColumn: "span 12",
    gridRow: "2/span 2",
  },

  dummyImgGrid1: {
    gridColumn: "span 3",
    gridRow: "4/ span 10",
  },

    dummyImgGrid2: {
      gridColumn: "span 3",
      gridRow: "4/span 10",
    },

  dummyImg: {
    objectFit: "cover",
    width: "100%",
    maxHeight: "100%",
    // minheight: "100%"
  },
  dummyBtnGrid: {
    gridColumn: "4/ span 5",
    gridRow: "11/ span 5",
  },

  dummyBtn: {
    minWidth: "100%",
  },

  recommendText: {
    gridColumn: "span 12",
    gridRow: "span 3",
    color: "white",
  },
}));

// function MbtiTypeImageDesc(mbtiType, genderType) {
//     const classes = useStyles();
//     return (
//       <Box>
//         <Typography variant="h6" align="center">
//           항상 사랑을 말하는 당신은, <br /> 타이타닉의 Jack
//         </Typography>
//       </Box>
//     );
//   }

const CustomAnalysisBtn = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#c81926",
    "&:hover": {
      backgroundColor: "#99141d",
    },
  },
}))(Button);

function RecommendGoodDesc(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Box>
      <Typography size="small">
        나와 잘 맞는 MBTI의 영화 주인공 <br /> 어떻게 연애했을까?
      </Typography>
    </Box>
  );
}

function RecommendBadDesc(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <Box>
      <Typography size="small">
        나와 잘 안맞는 MBTI의 영화 주인공 <br /> 어떻게 연애했을까?
      </Typography>
    </Box>
  );
}

function DataAnalysisBtn(mbtiType, genderType) {
  const classes = useStyles();
  return (
    <CustomAnalysisBtn
      variant="contained"
      className={classes.dummyBtn}
      color="secondary"
    >
      어떻게 분석했어?
    </CustomAnalysisBtn>
  );
}

export default function RecommendContentsTemplate({ mbtiType, genderType }) {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container}>
        <Grid className={classes.recommendContainer} item>
          <Grid className={classes.dummyScriptGrid1}>
            <RecommendGoodDesc />
          </Grid>
          <Grid className={classes.dummyImgGrid1}>
            <img
              className={classes.dummyImg}
              src={dummy_poster_img}
              alt="dummy"
            />
          </Grid>
        </Grid>
        <Grid className={classes.recommendContainer} item>
          <Grid className={classes.dummyScriptGrid2}>
            <RecommendBadDesc />
          </Grid>

          <Grid className={classes.dummyImgGrid2}>
            <img
              className={classes.dummyImg}
              src={dummy_poster_img}
              alt="dummy"
            />
          </Grid>
        </Grid>
      </Grid>
      {/* <Grid className={classes.dummyBtnGrid}>
        <DataAnalysisBtn className={classes.dummyBtn} />
      </Grid> */}
    </>
  );
}
