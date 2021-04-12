import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Fab } from "@material-ui/core";
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
// import { ToastProvider, useToasts } from "react-toast-notifications";
import LinkIcon from "@material-ui/icons/Link";
import { ReactComponent as KakaoTalk } from "../images/sharebutton/kakaotalk.svg";
import { Helmet } from 'react-helmet'
import KakaoShareButton from './kakao_share_button';
import Snackbar from '@material-ui/core/Snackbar';


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
  const classes = useStyles();

  const textInput = useRef();
  // const copy = async (newState) => () => {
  //   const el = textInput.current;
  //   el.select();
  //   document.execCommand("copy");
  //   setSuccess(true);    
  //     if (success) {
  //     // //  addToast("링크가 클립보드로 복사되었습니다.", { appearance: "success" });
  //       handleClick(newState);
  //   }    
  //   } 
  //   else {
  //     addToast("다시 시도하십시오.", { appearance: "error" });
  // }
//  }




  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy");

    setState({ open: true, ...newState });
    //   const el = textInput.current;
    //   el.select();
    //   document.execCommand("copy");
    //   setSuccess(true);    
    //     if (success) {
    //      addToast("링크가 클립보드로 복사되었습니다.", { appearance: "success" });
    //   } 
    // //   else {
    // //     addToast("다시 시도하십시오.", { appearance: "error" });
    // // }  
  };

  // const events = (newState) => {
  //   copy();
  //   handleClick(newState);
  // }



  const handleClose = () => {
    setState({ ...state, open: false });
  };

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
      onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
      <LinkIcon />
    </Fab>

    <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message="I love snacks"
        key={vertical + horizontal}
      />
  </Box>
  );
};

// <Button onClick={handleClick({ vertical: 'bottom', horizontal: 'center' })}>
// Bottom-Center
// </Button>

//-------------------------------------------------------------------------------------------



export default function ShareButton() {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Grid className={classes.shareBtn1Grid}>
      <KakaoShareButton/>
      </Grid>
      <Grid className={classes.shareBtn2Grid}>
        {/* <ToastProvider> */}
          <ToastAlert />
        {/* </ToastProvider> */}
      </Grid>
    </Grid>
  );
}
