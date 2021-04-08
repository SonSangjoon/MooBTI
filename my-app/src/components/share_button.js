import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Typography,
  Box,
  Grid,
  Link,
  Fab,
  Icon,
  TextField,
  Input,
} from "@material-ui/core";
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import LinkIcon from "@material-ui/icons/Link";
import { ReactComponent as KakaoTalk } from "../images/sharebutton/kakaotalk.svg";
// import SvgIcon from "@material-ui/core/SvgIcon";

// just some icons for illustration (example only):
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import NewGameIcon from 'material-ui/svg-icons/av/playlist-add';
// import NewPageIcon from 'material-ui/svg-icons/action/note-add';

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
    gridRow: "1/span 4",
  },
  shareBtn2Grid: {
    gridColumn: "2",
    gridRow: "span 4",
  },
  imageIcon: {
    // display: 'flex',
    height: "30px",
    width: "30px",
  },
  copy: {
    // width: "0px",
    // height: "0px",
    // bottom: "0",
    // left: "0",
    opacity: "0",
  },
});

export default function ShareButton() {
  const classes = useStyles();

  const textInput = useRef();

  const copy = () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy");
  };

  return (
    <Grid className={classes.container}>
      <textarea
        type="text"
        value={window.location.href}
        ref={textInput}
        readOnly
        className={classes.copy}
      ></textarea>
      <Grid className={classes.shareBtn1Grid}>
        <Fab style={{ backgroundColor: "#fef01b" }} aria-label="add">
          <KakaoTalk className={classes.imageIcon} />
        </Fab>
      </Grid>
      <Grid className={classes.shareBtn2Grid}>
        <Fab
          style={{ backgroundColor: "#dc1a28" }}
          aria-label="edit"
          onClick={copy}
        >
          <LinkIcon />
        </Fab>
      </Grid>
    </Grid>
  );
}
