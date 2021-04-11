import React, { useRef, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Fab } from "@material-ui/core";
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import { ToastProvider, useToasts } from "react-toast-notifications";
import LinkIcon from "@material-ui/icons/Link";
import { ReactComponent as KakaoTalk } from "../images/sharebutton/kakaotalk.svg";
import { Helmet } from 'react-helmet'
import KakaoShareButton from './kakao_share_button';


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
  const { addToast } = useToasts();
  const [success, setSuccess] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    copy();
    // console.log(window.Kakao)
  },[]);

  // console.log(window.Kakao)

  const textInput = useRef();
  const copy = async () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy");
    setSuccess(true);
      if (success) {
       addToast("링크가 클립보드로 복사되었습니다.", { appearance: "success" });
    } 
  //   else {
  //     addToast("다시 시도하십시오.", { appearance: "error" });
  // }
}

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


//-------------------------------------------------------------------------------------------



export default function ShareButton() {
  const classes = useStyles();
  // useEffect(() => {
  //   createKakaoButton();
  //   // console.log(window.Kakao)
  // });
  // const shareByKakao = () => {
  //   // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
  //   if (window.Kakao) {
  //     const kakao = window.Kakao;
  //     // console.log(kakao)
  //     // 중복 initialization 방지
  //     if (!kakao.isInitialized()) {
  //       // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
  //       kakao.init(process.env.REACT_APP_KAKAO_KEY);
  //       console.log(window.Kakao.isInitialized());
  //     }
  //     kakao.Link.sendDefault({
  //       // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
  //       // container: "#kakao_share_button",
  //       objectType: "feed",
  //       content: {
  //         title: "타이틀",
  //         description: "#리액트 #카카오 #공유버튼",
  //         imageUrl: "IMAGE_URL", // i.e. process.env.FETCH_URL + '/logo.png'
  //         link: {
  //           mobileWebUrl: window.location.href,
  //           webUrl: window.location.href,
  //         },
  //       },
  //       social: {
  //         likeCount: 77,
  //         commentCount: 55,
  //         sharedCount: 333,
  //       },
  //       buttons: [
  //         {
  //           title: "웹으로 보기",
  //           link: {
  //             mobileWebUrl: window.location.href,
  //             webUrl: window.location.href,
  //           },
  //         },
  //         {
  //           title: "앱으로 보기",
  //           link: {
  //             mobileWebUrl: window.location.href,
  //             webUrl: window.location.href,
  //           },
  //         },
  //       ],
  //     });
  //   }
  // };
  

  // useEffect(() => {
  //   const script = document.createElement('script')
  //   script.src = 'https://developers.kakao.com/sdk/js/kakao.js'
  //   script.async = true
  //   document.body.appendChild(script)
  //   return () => {
  //     document.body.removeChild(script)
  //   }
  // },[])
  // console.log(window.Kakao.isInitialized());
  

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
        {/* <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
        </Helmet> */}
        {/* <Fab style={{ backgroundColor: "#fef01b" }} aria-label="add">
          <KakaoTalk className={classes.imageIcon} />
        </Fab> */}
      {/* <Fab
        id="kakao_share_button"
        style={{ backgroundColor: "#fef01b" }}
        aria-label="add"
        onClick={shareByKakao}
      >
        <KakaoTalk className={classes.imageIcon} />
      </Fab> */}
      <KakaoShareButton/>
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
