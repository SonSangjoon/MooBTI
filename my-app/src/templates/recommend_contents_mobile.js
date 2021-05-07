import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Box, Link, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { useStyles } from "./styles/recommend_contents_styles";
import { Mobile} from "../components/MediaQuery";

const CustomRestartBtn = withStyles((theme) => ({
  root: {
    // color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#c81926",
    "&:hover": {
      backgroundColor: "#99141d",
    },
  },
}))(Button);

function LinkButton({ url }) {
  const classes = useStyles();

  if (url[4] === "n") {
    return (
      <Link href={"https://" + url} underline="none" target="_blank">
        <CustomRestartBtn className={classes.mobileMovieLinkBtn}>
          <Typography className={classes.movieLinkText}>
            넷플릭스에서 확인하기
          </Typography>
        </CustomRestartBtn>
      </Link>
    );
  } else {
    return (
      <Link href={"https://" + url} underline="none" target="_blank">
        <CustomRestartBtn className={classes.mobileMovieLinkBtn}>
          <Typography className={classes.movieLinkText}>
            왓챠에서 확인하기
          </Typography>
        </CustomRestartBtn>
      </Link>
    );
  }
}

function RestartButton() {
  const classes = useStyles();
  return (
    <Link component={RouterLink} to="/" underline="none">
      <Button className={classes.mobilerestartBtn}>
        <Typography className={classes.restartBtnText}>
          테스트 다시 하기
        </Typography>
      </Button>
    </Link>
  );
}

function RecommendComponent({ data, value }) {
  const classes = useStyles();

  return (
    <Box>
      <Mobile>
        <Box className={classes.mobileRecommendTitleBox}>
          <Box className={classes.mobileRecommendTitleText}>{value}</Box>
          <Box className={classes.mobileRecommendCharText}>
            {data.mbit} {data.movie}의 {data.name}
          </Box>
        </Box>
        <Box className={classes.mobileImageBox}>
          <img
            className={classes.mobileposterImg}
            src={data.imageSmallUrl}
            alt="poster"
          />
        </Box>
        <Box className={classes.mobileRecommendDescText}>{data.shortDesc}</Box>
        <Box className={classes.mobileMovieLinkBtnBox}>
          <LinkButton url={data.movieUrl} />
        </Box>
        <Box className={classes.mobileEmptynBox}>
          
        </Box>
      </Mobile>
    </Box>
  );
}

export default function MobileRecommendContentsTemplate({ data }) {
  const classes = useStyles();

  return (
      <Mobile>
      <Box className={classes.mobileroot} >
        <Box className={classes.mobileRecommendBox1} item>
          <RecommendComponent
            data={data.good}
            value="나와 🔥 불꽃 케미 터지는 캐릭터는"
          />
        </Box>
        <Box className={classes.mobileRecommendBox2} item>
          <RecommendComponent
            data={data.bad}
            value="나와 ❄️ 얼음 케미인 캐릭터는"
          />
        </Box>
        <Box className={classes.mobileRestartBtnBox}>
          <RestartButton />
        </Box>
      </Box>
      </Mobile>
  );
}
