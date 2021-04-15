import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Mobile, Tablet, PC, PCwide } from "./MediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    height: "100%",
    width: "100%",

    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
      "& $mobileImageTitle": {
        border: "4px solid currentColor",
      },
      "& $tabletImageTitle": {
        border: "4px solid currentColor",
      },
      "& $pcWideImageTitle": {
        border: "4px solid currentColor",
      },
    },
  },

  focusVisible: {
    width: "100%",
  },

  imageButton: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },

  imageTitle: {
    fontSize: "17px",
    fontFamily: "S-CoreDream-3Light",
    position: "relative",
    // padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    padding: 20,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },

  //Mobile View

  mobileImageTitle: {
    fontSize: "3.5vw",
    fontFamily: "S-CoreDream-3Light",
    position: "relative",
    padding: 20,
  },

  //Tablet View

  tabletImageTitle: {
    fontSize: "16px",
    fontFamily: "S-CoreDream-3Light",
    position: "relative",
    padding: 20,
    whiteSpace: "pre-wrap",
  },

  //PcWide View

  pcWideImageTitle: {
    fontSize: "22px",
    fontFamily: "S-CoreDream-3Light",
    position: "relative",
    padding: 20,
  },
}));

export default function ButtonBases({ choice }) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <PC>
        <ButtonBase
          focusRipple
          focusVisibleClassName={classes.focusVisible}
          className={classes.focusVisible}
        >
          <span className={classes.imageButton}>
            <Typography className={classes.imageTitle}>
              {choice}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </PC>

      <Mobile>
        <ButtonBase
          focusRipple
          focusVisibleClassName={classes.focusVisible}
          className={classes.focusVisible}
        >
          <span className={classes.imageButton}>
            <Typography className={classes.mobileImageTitle}>
              {choice}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </Mobile>

      <Tablet>
        <ButtonBase
          focusRipple
          focusVisibleClassName={classes.focusVisible}
          className={classes.focusVisible}
        >
          <span className={classes.imageButton}>
            <Typography className={classes.tabletImageTitle}>
              {choice}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </Tablet>

      <PCwide>
        <ButtonBase
          focusRipple
          focusVisibleClassName={classes.focusVisible}
          className={classes.focusVisible}
        >
          <span className={classes.imageButton}>
            <Typography className={classes.pcWideImageTitle}>
              {choice}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </PCwide>
    </Box>
  );
}
