import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import KakaoShareButton from "./kakao_share_button";
import LinkShareButton from "./link_share_button";

const useStyles = makeStyles({
  root: {
    background: "rgba(0, 0, 0, 0)",
    color: "red",
    height: "5px",
  },
  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(7, 1fr)",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  shareBtn1Grid: {
    gridColumn: "2",
    gridRow: "1, span 3",
  },
  shareBtn2Grid: {
    gridColumn: "2",
    gridRow: "3",
  },
  imageIcon: {
    height: "30px",
    width: "30px",
  },
  copy: {
    width: "0px",
    height: "0px",
    bottom: "0",
    left: "0",
    opacity: "0",
  },
});

export default function ShareButton() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid className={classes.shareBtn1Grid}>
        <KakaoShareButton />
      </Grid>
      <Grid className={classes.shareBtn2Grid}>
        <LinkShareButton />
      </Grid>
    </Grid>
  );
}
