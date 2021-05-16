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
    gridColumn: "5/span 5",
    gridRow: "2/span 2",
  },
  firstParagraphGrid: {
    gridColumn: "1/span 13",
    gridRow: "3/span 3",
  },
  firstParagraphText: {
    color: "white",
  },
  secondParagraphGrid: {
    gridColumn: "1/span 13",
    gridRow: "4/span 3",
  },
  secondParagraphText: {
    color: "white",
  },
  thirdParagraphGrid: {
    gridColumn: "1/span 13",
    gridRow: "5/span 3",
  },
  thirdParagraphText: {
    color: "white",
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
  memberNameText: {
    color: "white",
    fontFamily: "S-CoreDream-4Regular",
    fontSize: "25px",
  },
  memberPartText: {
    color: "white",
    fontFamily: "S-CoreDream-3Light",
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
  moiblememberImage: {
    height: "20vw",
  },
  mobilelinkInnerIcon: {
    fontSize: "14px",
  },
  mobilelinkIcon: {
    backgroundColor: "#fffff",
    width: "22px",
    height: "22px",
    minHeight: "5px",
  },
  mobilememberBox: {
    textAlign: "center",
  },
  mobilememberNameText: {
    color: "white",
    fontFamily: "S-CoreDream-4Regular",
    fontSize: "25px",
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
            <Box>
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
      <CloseIcon />
    </IconButton>
  );
}

export default function IntroductionModal(data) {
  const classes = useStyles();
  const { openIntroduction, setOpenIntroduction } = useContext(MbtiContext);

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
          </Grid>
        </Fade>

        {/* Tablet View */}
        {/* <Tablet>
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
            </Grid>
          </Fade>
        </Tablet> */}

        {/* Mobile View */}
        {/* <Mobile>
          <Fade in={openIntroduction}>
            <Box>
              <ModalCloseBtn />
              <TitleLogo />
              <FirstParagraph />
              <SecondParagraph />
              <ThirdParagraph />
              <Box>
                <MemberIntro
                  image="JH"
                  name="준효"
                  part="프로덕트 매니저 / 기획"
                  url="https://brunch.co.kr/@junhyopark"
                />

                <MemberIntro
                  image="SJ"
                  name="상준"
                  part="프론트엔드 / 기획"
                  url="https://github.com/SonSangjoon"
                />
              </Box>
              <Box>
                <MemberIntro
                  image="YJ"
                  name="유지"
                  part="프론트엔드 / 기획"
                  url="https://kdt-gitlab.elice.io/CARMINE"
                />

                <MemberIntro
                  image="MH"
                  name="민호"
                  part="데이터분석 / 백엔드"
                  url="https://github.com/yeemh"
                />
              </Box>
            </Box>
          </Fade>
        </Mobile> */}

        {/* PCwide View */}
        {/* <PCwide>
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
            </Grid>
          </Fade>
        </PCwide>
      // </Box>
    </Modal> */}
      </Box>
    </Modal>
    // <ModalWindow />
  );
}
