import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import KakaoShareButton from "./button_kakao_share";
import LinkShareButton from "./button_link_share";

const useStyles = makeStyles({
  container: {
    height: "50px",
    width: "50px"
  },
  shareBtn1Grid: {
    display: "block",
    marginBottom: "10px",
  },
  shareBtn2Grid: {
    display: "block",
  },
});

export default function ShareButton({data}) {
  const classes = useStyles();
  
  return (
    <Box className={classes.container}>
      <Box className={classes.shareBtn1Grid}>
        <KakaoShareButton data={data}/>
      </Box>
      <Box className={classes.shareBtn2Grid}>
        <LinkShareButton />
      </Box>
    </Box>
  );
}
