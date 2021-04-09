import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Fab } from "@material-ui/core";
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import LinkIcon from "@material-ui/icons/Link";
import { ReactComponent as KakaoTalk } from "../images/sharebutton/kakaotalk.svg";
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
    // display: 'flex',
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

const ToastAlert = () => {
  const { addToast, removeToast } = useToasts();
  const [success, setSuccess] = useState(false);
  const classes = useStyles();

  const textInput = useRef();
  const copy = async () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy");
    setSuccess(true);
      if (success) {
        addToast("링크가 클립보드로 복사되었습니다.", { appearance: "success" });
    } else {
      addToast("다시 시도하십시오.", { appearance: "error" });
  }
}

  // const onClick = async (value) => {
  //   if (success) {
  //     addToast("Saved Successfully", { appearance: "success" });
  //   } else {
  //     addToast("Error!", { appearance: "error" });
  //   }
  // };
  return (
  <Box>

    <textarea
    type="text"
    value={window.location.href}
    ref={textInput}
    readOnly
    className={classes.copy}
  ></textarea>

    <Fab
      style={{ backgroundColor: "#dc1a28" }}
      aria-label="edit"
      onClick={copy}
    >
      <LinkIcon />
    </Fab>
  </Box>
  );
};

export default function ShareButton() {
  const classes = useStyles();

  // const [success, setSuccess] = useState(false);
  // const textInput = useRef();

  // onClickToastPopup(){
  //   ToastsStore.success("This is ToastPopup");
  // };

  // const copy = () => {
  //   const el = textInput.current;
  //   el.select();
  //   document.execCommand("copy");
  //   setSuccess(true);
  // };

  return (
    <Grid className={classes.container}>
      {/* <textarea
        type="text"
        value={window.location.href}
        ref={textInput}
        readOnly
        className={classes.copy}
      ></textarea> */}
      <Grid className={classes.shareBtn1Grid}>
        <Fab style={{ backgroundColor: "#fef01b" }} aria-label="add">
          <KakaoTalk className={classes.imageIcon} />
        </Fab>
      </Grid>
      <Grid className={classes.shareBtn2Grid}>
        {/* <Fab
          style={{ backgroundColor: "#dc1a28" }}
          aria-label="edit"
          onClick={copy}
        >
          <LinkIcon />
        </Fab> */}
        {/* {success ? <div style={{ color: "green" }}>Success!</div> : null} */}
        <ToastProvider>
          <ToastAlert />
        </ToastProvider>
      </Grid>
    </Grid>
  );
}
