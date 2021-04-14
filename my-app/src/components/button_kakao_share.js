import React from "react";
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from 'react-helmet'
import { Fab } from "@material-ui/core";
import { ReactComponent as KakaoTalk } from "../images/sharebutton/kakaotalk.svg";

const useStyles = makeStyles({

  imageIcon: {
    height: "30px",
    width: "30px",
  },

});

const KakaoShareButton = () => {
  const classes = useStyles();
  const shareByKakao = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
        console.log(window.Kakao.isInitialized());
      }
      kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: "타이틀(ex. 당신은 항상 사랑을 말하는 당신은, 타이타닉의 Jack)",
          description: "나와 잘 맞는 영화 주인공은?",
          imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png', 
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },

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
    <Box className="kakao-share-button">
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
    </Box>
  );
};
export default KakaoShareButton;
