import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { Fab } from "@material-ui/core";
import { ReactComponent as KakaoTalk } from "../images/sharebutton/kakaotalk.svg";

const useStyles = makeStyles({
  imageIcon: {
    height: "30px",
    width: "30px",
  },
});

export function KakaoShareButton({ data }) {
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
          title: data.title,
          description: "나와 잘 맞는 영화 주인공은?",
          imageUrl: data.kakaoImageUrl,
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
}
export default KakaoShareButton;
