import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from 'react-helmet'

import { Box, Grid, Fab } from "@material-ui/core";
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

const KakaoShareButton = () => {
  const classes = useStyles();
  const shareByKakao = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // console.log(kakao)
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
        console.log(window.Kakao.isInitialized());
      }
      kakao.Link.sendDefault({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        // container: "#kakao_share_button",
        objectType: "feed",
        content: {
          title: "타이틀(ex. 당신은 항상 사랑을 말하는 당신은, 타이타닉의 Jack)",
          description: "나와 잘 맞는 영화 주인공은?",
          imageUrl: "../images/result/dummy_titanic_jack.jpg", 
          // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        // social: {
        //   likeCount: 77,
        //   commentCount: 55,
        //   sharedCount: 333,
        // },
        buttons: [
          {
            title: "나도 테스트 해보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    }
  };
  
  return (
    <div className="kakao-share-button">
      <Helmet>
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </Helmet>
      <Fab
        id="kakao_share_button"
        style={{ backgroundColor: "#fef01b" }}
        aria-label="add"
        onClick={shareByKakao}
      >
        <KakaoTalk className={classes.imageIcon} />
      </Fab>
    </div>
  );
};
export default KakaoShareButton;
