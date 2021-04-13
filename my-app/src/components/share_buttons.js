import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import KakaoShareButton from "./kakao_share_button";
import LinkShareButton from "./link_share_button";

const useStyles = makeStyles({
  container: {
    height: "50px",
  },
  shareBtn1Grid: {
    display: 'block',
    paddingLeft: '4px',
    marginBlock: "10px"
  },
  shareBtn2Grid: {
    display: 'block',
  },
});

export default function ShareButton() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.shareBtn1Grid}>
        <KakaoShareButton />
      </Box>
      <Box className={classes.shareBtn2Grid}>
        <LinkShareButton />
      </Box>
    </Box>
  );
}
