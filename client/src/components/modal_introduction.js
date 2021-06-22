import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Grid, Fab } from "@material-ui/core";
import { MbtiContext } from "../App";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery.js";
import { Link } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "grid",
    gridTemplateRows: "repeat(12,1fr)",
    gridTemplateColumns: "repeat(13,1fr)",
    backgroundColor: "black",
    border: "2px solid red",
    boxShadow: theme.shadows[1],
    maxWidth: "768px",
    width: "90vw",
    height: "85vh",
  },

  modalCloseBtnGrid: {
    gridColumn: "13",
    gridRow: "span 1",
  },
  closeButton: {
    color: theme.palette.grey[500],
    align: "right",
  },

  titleLogo: {
    objectFit: "fill",
    width: "85%",
  },
  titleLogoGrid: {
    marginTop: "20px",
    gridColumn: "5/span 5",
    gridRow: "1/span 2",
  },
  firstParagraphGrid: {
    marginTop: "20px",
    gridColumn: "1/span 13",
    gridRow: "2/span 2",
  },
  firstParagraphText: {
    color: "white",
    fontSize: "min(20px,4vw)",
  },
  secondParagraphGrid: {
    gridColumn: "1/span 13",
    gridRow: "3/span 3",
  },
  secondParagraphText: {
    color: "white",
    fontSize: "min(20px,4vw)",
  },
  thirdParagraphGrid: {
    gridColumn: "1/span 13",
    gridRow: "4/span 2",
  },
  thirdParagraphText: {
    color: "white",
    fontSize: "min(20px,4vw)",
  },
  memberImage: {
    objectFit: "fill",
    width: "100%",
  },
  JHGrid: {
    gridColumn: "2/span 2",
    gridRow: "7/span 4",
  },
  SJGrid: {
    gridColumn: "5/span 2",
    gridRow: "7/span 3",
  },
  YJGrid: {
    gridColumn: "8/span 2",
    gridRow: "7/span 3",
  },
  MHGrid: {
    gridColumn: "11/span 2",
    gridRow: "7/span 3",
  },
  mobileJHGrid: {
    gridColumn: "2/span 5",
    gridRow: "6/span 3",
  },
  mobileSJGrid: {
    gridColumn: "8/span 5",
    gridRow: "6/span 3",
  },
  mobileYJGrid: {
    gridColumn: "2/span 5",
    gridRow: "9/span 3",
  },
  mobileMHGrid: {
    gridColumn: "8/span 5",
    gridRow: "9/span 3",
  },
  memberNameText: {
    color: "white",
    fontSize: "25px",
  },
  memberPartText: {
    color: "white",
    fontSize: "13px",
  },
  linkIcon: {
    backgroundColor: "#fffff",
    width: "28px",
    height: "28px",
    minHeight: "5px",
  },
  linkInnerIcon: {
    fontSize: "18px",
  },

  //mobile

  mobilefirstParagraphGrid: {
    gridColumn: "1/span 13",
    gridRow: "2/span 2",
  },
  mobilefirstParagraphText: {
    color: "white",
    fontSize: "min(20px,4vw)",
  },
  mobilesecondParagraphGrid: {
    marginTop: "40px",
    gridColumn: "1/span 13",
    gridRow: "2/span 2",
  },

  mobilesecondParagraphText: {
    color: "white",
    fontSize: "min(20px,4vw)",
  },

  mobilethirdParagraphGrid: {
    marginTop: "20px",
    gridColumn: "1/span 13",
    gridRow: "3/span 2",
  },

  mobilethirdParagraphText: {
    color: "white",
    fontSize: "min(20px,4vw)",
  },

  moiblememberImage: {
    height: "8vh",
  },
  mobilelinkInnerIcon: {
    fontSize: "2vh",
  },
  mobilelinkIcon: {
    backgroundColor: "#fffff",
    width: "2.5vh",
    height: "2.5vh",
    minHeight: "5px",
    marginLeft: "15px",
    justifyContent: "center",
    alignContent: "center",
  },
  mobilememberBox: {
    textAlign: "center",
  },

  mobilememberNameText: {
    color: "white",
    fontSize: "25px",
  },
  mobilefaq: {
    color:"white",
    gridColumn: "1/span 13",
    gridRow: "12/span 2",
    textAlign:"center"
  },
  mobilefaqText: {
    color: "gray",
    fontSize: "min(20px,4vw)",
  },
}));

function TitleLogo() {
  const classes = useStyles();
  return (
    <Box align="center">
      <img src="/images/Logo.png" alt="Logo" className={classes.titleLogo} />
    </Box>
  );
}

function FirstParagraph() {
  const classes = useStyles();
  return (
    <Box className={classes.firstParagraphText} align="center" mt={3}>
      "넷플릭스 첫 화면에서 영화 고르는데...1시간 썼네?"
      <br />
      넷플릭스 증후군에 걸린 당신을 위해!
    </Box>
  );
}

function SecondParagraph() {
  const classes = useStyles();
  return (
    <Box className={classes.secondParagraphText} align="center" mt={5}>
      현실 연애에 피와 살이 되는 로맨스 영화를 <br />
      MBTI로 쉽고 재밌게 추천해주고 싶어서!
    </Box>
  );
}
function ThirdParagraph() {
  const classes = useStyles();
  return (
    <Box className={classes.thirdParagraphText} align="center" mt={7}>
      엘리스 AI 트랙의 ‘D.N.B 팀’이 만들었어요 👏
    </Box>
  );
}

function MemberIntro(data) {
  const classes = useStyles();
  const imageUrl = `/images/members/${data.image}.png`;
  const memberName = data.name;

  return (
    <Box>
      <Mobile>
        <Box align="center">
          <img
            src={imageUrl}
            alt="memoji"
            className={classes.moiblememberImage}
          />
        </Box>
        <Box className={classes.mobilememberBox}>
          <Box className={classes.memberNameText}>
            {data.name}
            <Link href={data.url} underline="none" target="_blank">
              <Fab className={classes.mobilelinkIcon} align="center">
                {memberName === "준효" ? (
                  <CreateIcon className={classes.mobilelinkInnerIcon} />
                ) : (
                  <GitHubIcon className={classes.mobilelinkInnerIcon} />
                )}
              </Fab>
            </Link>
          </Box>
        </Box>

        <Box className={classes.memberPartText} align="center" mt={1}>
          {data.part}
        </Box>
        <Box align="center" mt={2}></Box>
      </Mobile>

      <PC>
        <Box align="center" mt={3}>
          <img src={imageUrl} alt="memoji" className={classes.memberImage} />
          <Box className={classes.memberNameText} align="center">
            {data.name}
          </Box>
          <Box className={classes.memberPartText} align="center" mt={1}>
            {data.part}
          </Box>
          <Box align="center" mt={2}>
            <Link href={data.url} underline="none" target="_blank">
              <Fab
                className={classes.linkIcon}
                // style={{ backgroundColor: "#fffff" }}
                align="center"
              >
                {memberName === "준효" ? (
                  <CreateIcon className={classes.linkInnerIcon} />
                ) : (
                  <GitHubIcon className={classes.linkInnerIcon} />
                )}
              </Fab>
            </Link>
          </Box>
        </Box>
      </PC>
      <PCwide>
        <Box align="center" mt={3}>
          <img src={imageUrl} alt="memoji" className={classes.memberImage} />
          <Box className={classes.memberNameText} align="center">
            {data.name}
          </Box>
          <Box className={classes.memberPartText} align="center" mt={1}>
            {data.part}
          </Box>
          <Box align="center" mt={2}>
            <Link href={data.url} underline="none" target="_blank">
              <Fab
                className={classes.linkIcon}
                // style={{ backgroundColor: "#fffff" }}
                align="center"
              >
                {memberName === "준효" ? (
                  <CreateIcon className={classes.linkInnerIcon} />
                ) : (
                  <GitHubIcon className={classes.linkInnerIcon} />
                )}
              </Fab>
            </Link>
          </Box>
        </Box>
      </PCwide>
      <Tablet>
        <Box align="center" mt={3}>
          <img src={imageUrl} alt="memoji" className={classes.memberImage} />
          <Box className={classes.memberNameText} align="center">
            {data.name}
          </Box>
          <Box className={classes.memberPartText} align="center" mt={1}>
            {data.part}
          </Box>
          <Box align="center" mt={2}>
            <Link href={data.url} underline="none" target="_blank">
              <Fab
                className={classes.linkIcon}
                // style={{ backgroundColor: "#fffff" }}
                align="center"
              >
                {memberName === "준효" ? (
                  <CreateIcon className={classes.linkInnerIcon} />
                ) : (
                  <GitHubIcon className={classes.linkInnerIcon} />
                )}
              </Fab>
            </Link>
          </Box>
        </Box>
      </Tablet>
    </Box>
  );
}

function ModalCloseBtn() {
  const classes = useStyles();
  const { setOpenIntroduction } = useContext(MbtiContext);

  const handleClose = () => {
    setOpenIntroduction(false);
  };

  return (
    <IconButton
      aria-label="close"
      className={classes.closeButton}
      onClick={handleClose}
    >
      <CloseIcon onClick={handleClose} />
    </IconButton>
  );
}

export default function IntroductionModal(data) {
  const classes = useStyles();
  const { openIntroduction, setOpenIntroduction } = useContext(MbtiContext);
  const faq = "D.N.B 팀에게 개선점을 알려주세요 elice.dnb@gmail.com";
  const handleClose = () => {
    setOpenIntroduction(false);
  };

  return (
    <Modal
      className={classes.modal}
      open={openIntroduction}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box className={classes.root}>
        <PC>
          <Fade in={openIntroduction}>
            <Grid className={classes.container}>
              <Grid className={classes.titleLogoGrid}>
                <TitleLogo />
              </Grid>
              <Grid className={classes.firstParagraphGrid}>
                <FirstParagraph />
              </Grid>
              <Grid className={classes.secondParagraphGrid}>
                <SecondParagraph />
              </Grid>
              <Grid className={classes.thirdParagraphGrid}>
                <ThirdParagraph />
              </Grid>
              <Grid className={classes.JHGrid}>
                <MemberIntro
                  image="JH"
                  name="준효"
                  part="PM / 기획"
                  url="https://brunch.co.kr/@junhyopark"
                />
              </Grid>
              <Grid className={classes.SJGrid}>
                <MemberIntro
                  image="SJ"
                  name="상준"
                  part="프론트엔드 / 기획"
                  url="https://github.com/SonSangjoon"
                />
              </Grid>
              <Grid className={classes.YJGrid}>
                <MemberIntro
                  image="YJ"
                  name="유지"
                  part="프론트엔드 / 기획"
                  url="https://kdt-gitlab.elice.io/CARMINE"
                />
              </Grid>
              <Grid className={classes.MHGrid}>
                <MemberIntro
                  image="MH"
                  name="민호"
                  part="데이터분석 / 백엔드"
                  url="https://github.com/yeemh"
                />
              </Grid>
              <Grid className={classes.modalCloseBtnGrid}>
                <ModalCloseBtn />
              </Grid>
              <Grid className={classes.mobilefaq}>
              <Box className={classes.mobilefaqText}>
              {faq}
              </Box>
              </Grid>
            </Grid>
          </Fade>
        </PC>

        {/* Tablet View */}
        <Tablet>
          <Fade in={openIntroduction}>
            <Grid className={classes.container}>
              <Grid className={classes.titleLogoGrid}>
                <TitleLogo />
              </Grid>
              <Grid className={classes.firstParagraphGrid}>
                <FirstParagraph />
              </Grid>
              <Grid className={classes.secondParagraphGrid}>
                <SecondParagraph />
              </Grid>
              <Grid className={classes.thirdParagraphGrid}>
                <ThirdParagraph />
              </Grid>
              <Grid className={classes.JHGrid}>
                <MemberIntro
                  image="JH"
                  name="준효"
                  part="PM / 기획"
                  url="https://brunch.co.kr/@junhyopark"
                />
              </Grid>
              <Grid className={classes.SJGrid}>
                <MemberIntro
                  image="SJ"
                  name="상준"
                  part="프론트엔드 / 기획"
                  url="https://github.com/SonSangjoon"
                />
              </Grid>
              <Grid className={classes.YJGrid}>
                <MemberIntro
                  image="YJ"
                  name="유지"
                  part="프론트엔드 / 기획"
                  url="https://kdt-gitlab.elice.io/CARMINE"
                />
              </Grid>
              <Grid className={classes.MHGrid}>
                <MemberIntro
                  image="MH"
                  name="민호"
                  part="데이터분석 / 백엔드"
                  url="https://github.com/yeemh"
                />
              </Grid>
              <Grid className={classes.modalCloseBtnGrid}>
                <ModalCloseBtn />
              </Grid>
              <Grid className={classes.mobilefaq}>
              <Box className={classes.mobilefaqText}>
              {faq}
              </Box>
              </Grid>
            </Grid>
          </Fade>
        </Tablet>

        {/* Mobile View */}
        <Mobile>
          <Fade in={openIntroduction}>
            <Grid className={classes.container}>
              <Grid className={classes.titleLogoGrid}>
                <TitleLogo />
              </Grid>
              <Grid className={classes.mobilefirstParagraphGrid}>
                <FirstParagraph />
              </Grid>
              <Grid className={classes.mobilesecondParagraphGrid}>
                <SecondParagraph />
              </Grid>
              <Grid className={classes.mobilethirdParagraphGrid}>
                <ThirdParagraph />
              </Grid>
              <Grid className={classes.mobileJHGrid}>
                <MemberIntro
                  image="JH"
                  name="준효"
                  part="PM / 기획"
                  url="https://brunch.co.kr/@junhyopark"
                />
              </Grid>
              <Grid className={classes.mobileSJGrid}>
                <MemberIntro
                  image="SJ"
                  name="상준"
                  part="프론트엔드 / 기획"
                  url="https://github.com/SonSangjoon"
                />
              </Grid>
              <Grid className={classes.mobileYJGrid}>
                <MemberIntro
                  image="YJ"
                  name="유지"
                  part="프론트엔드 / 기획"
                  url="https://kdt-gitlab.elice.io/CARMINE"
                />
              </Grid>
              <Grid className={classes.mobileMHGrid}>
                <MemberIntro
                  image="MH"
                  name="민호"
                  part="데이터분석 / 백엔드"
                  url="https://github.com/yeemh"
                />
              </Grid>

              <Grid className={classes.modalCloseBtnGrid}>
                <ModalCloseBtn />
              </Grid>
              <Grid className={classes.mobilefaq}>
              <Box className={classes.mobilefaqText}>
              D.N.B 팀에게 개선점을 알려주세요 <br/> elice.dnb@gmail.com
              </Box>
              </Grid>
            </Grid>
          </Fade>
        </Mobile>

        {/* PCwide View */}
        <PCwide>
          <Fade in={openIntroduction}>
            <Grid className={classes.container}>
              <Grid className={classes.titleLogoGrid}>
                <TitleLogo />
              </Grid>
              <Grid className={classes.firstParagraphGrid}>
                <FirstParagraph />
              </Grid>
              <Grid className={classes.secondParagraphGrid}>
                <SecondParagraph />
              </Grid>
              <Grid className={classes.thirdParagraphGrid}>
                <ThirdParagraph />
              </Grid>
              <Grid className={classes.JHGrid}>
                <MemberIntro
                  image="JH"
                  name="준효"
                  part="PM / 기획"
                  url="https://brunch.co.kr/@junhyopark"
                />
              </Grid>
              <Grid className={classes.SJGrid}>
                <MemberIntro
                  image="SJ"
                  name="상준"
                  part="프론트엔드 / 기획"
                  url="https://github.com/SonSangjoon"
                />
              </Grid>
              <Grid className={classes.YJGrid}>
                <MemberIntro
                  image="YJ"
                  name="유지"
                  part="프론트엔드 / 기획"
                  url="https://kdt-gitlab.elice.io/CARMINE"
                />
              </Grid>
              <Grid className={classes.MHGrid}>
                <MemberIntro
                  image="MH"
                  name="민호"
                  part="데이터분석 / 백엔드"
                  url="https://github.com/yeemh"
                />
              </Grid>
              <Grid className={classes.modalCloseBtnGrid}>
                <ModalCloseBtn />
              </Grid>
              <Grid className={classes.mobilefaq}>
              <Box className={classes.mobilefaqText}>
              {faq}
              </Box>
              </Grid>
            </Grid>
          </Fade>
        </PCwide>
      </Box>
    </Modal>
    // </Modal>
    // <ModalWindow />
  );
}
