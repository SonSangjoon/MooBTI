import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Grid } from "@material-ui/core";
import { MbtiContext } from "../App";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery.js";

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
    width: "100%",
    height: "85vh",
  },

  titleGrid: {
    gridColumn: "span 13",
    gridRow: "2/span 1",
  },

  titleText: {
    color: "white",
    fontFamily: "S-CoreDream-6Bold",
    fontSize: "32px",
  },

  subTitleGrid: {
    gridColumn: "span 13",
    gridRow: "3/span 1",
    paddingTop: "15px"
  },

  subTitleText: {
    color: "white",
    fontFamily: "S-CoreDream-4Regular",
    fontSize: "17px",
  },
  happyCircleGrid: {
    gridColumn: "2/span 3",
    gridRow: "5/span 3",
  },
  sadCircleGrid: {
    gridColumn: "6/span 3",
    gridRow: "5/span 3",
  },
  angryCircleGrid: {
    gridColumn: "10/span 3",
    gridRow: "5/span 3",
  },
  fussyCircleGrid: {
    gridColumn: "4/span 3",
    gridRow: "8/span 3",
  },
  timidCircleGrid: {
    gridColumn: "8/span 3",
    gridRow: "8/span 3",
  },
  emotionImage: {
    objectFit: "fill",
    width: "80%",
  },

  emotionText: {
    color: "white",
    fontFamily:"S-CoreDream-4Regular"
  },
  analysisGrid: {
    gridColumn: "span 13",
    gridRow: "12/span 1",
  },
  analysisText: {
    color: "white",
    fontSize: "18px",
    fontFamily:"S-CoreDream-4Regular"
  },
  modalCloseBtnGrid: {
    gridColumn: "13",
    gridRow: "span 1",
  },
  closeButton: {
    color: theme.palette.grey[500],
    align: "right",
  },
}));

function Title(data) {
  const classes = useStyles();
  return (
    <Box className={classes.titleText} align="center">
      {data.text}
    </Box>
  );
}

function SubTitle(data) {
  const classes = useStyles();
  return (
    <Box className={classes.subTitleText} align="center">
      {data.text}
    </Box>
  );
}

function EmotionCircle(data) {
  const classes = useStyles();
  const imageUrl = `/images/emotion/${data.gender}/${data.emotion}.png`;
  return (
    <Box align="center">
      <img src={imageUrl} alt="Logo" className={classes.emotionImage} />
      <Box className={classes.emotionText} align="center">
        {data.number}명의 {data.name}
      </Box>
    </Box>
  );
}

function Analysis(data) {
  const classes = useStyles();
  return (
    <Box className={classes.analysisText} align="center">
      {data.text}
    </Box>
  );
}

function ModalCloseBtn() {
  const classes = useStyles();
  const { setOpenModal } = useContext(MbtiContext);

  const handleClose = () => {
    setOpenModal(false);
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

export default function TransitionsModal(data) {
  const classes = useStyles();
  const { openModal, setOpenModal } = useContext(MbtiContext);

  const handleClose = () => {
    setOpenModal(false);
  };

  const titleText = "ESFP 잭이 로즈를 사로잡은 비결 ♥";
  const subTitleText =
    "잭의 대사를 분석해서 머릿 속 감정 친구들 100명을 찾아냈어요!";
  const analysisText =
    "\"ESFP 머릿 속 42명의 기쁨이가 애정을 표현하는 데에 열일했어요!\"";

  const gender = "male";
  const happyNumber = 10;
  const sadNumber = 20;
  const angryNumber = 30;
  const fussyNumber = 40;
  const timidNumber = 50;

  return (
    <Modal
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Box className={classes.root}>
        <PC>
          <Fade in={openModal}>
            <Grid className={classes.container}>
              <Grid className={classes.titleGrid}>
                <Title text={titleText} />
              </Grid>
              <Grid className={classes.subTitleGrid}>
                <SubTitle text={subTitleText} />
              </Grid>
              <Grid className={classes.happyCircleGrid}>
                <EmotionCircle
                  name="기쁨이"
                  gender={gender}
                  number={happyNumber}
                  emotion="happy"
                />
              </Grid>
              <Grid className={classes.sadCircleGrid}>
                <EmotionCircle
                  name="슬픔이"
                  gender={gender}
                  number={sadNumber}
                  emotion="sad"
                />
              </Grid>
              <Grid className={classes.angryCircleGrid}>
                <EmotionCircle
                  name="버럭이"
                  gender={gender}
                  number={angryNumber}
                  emotion="angry"
                />
              </Grid>
              <Grid className={classes.fussyCircleGrid}>
                <EmotionCircle
                  name="까칠이"
                  gender={gender}
                  number={fussyNumber}
                  emotion="fussy"
                />
              </Grid>
              <Grid className={classes.timidCircleGrid}>
                <EmotionCircle
                  name="소심이"
                  gender={gender}
                  number={timidNumber}
                  emotion="timid"
                />
              </Grid>
              <Grid className={classes.analysisGrid}>
                <Analysis text={analysisText} />
              </Grid>
              <Grid className={classes.modalCloseBtnGrid}>
                <ModalCloseBtn />
              </Grid>
            </Grid>
          </Fade>
        </PC>

        {/* Tablet View */}
        <Tablet>
          <Fade in={openModal}>
            <Grid className={classes.container}>
              <Grid className={classes.titleGrid}>
                <Title text={titleText} />
              </Grid>
              <Grid className={classes.subTitleGrid}>
                <SubTitle text={subTitleText} />
              </Grid>
              <Grid className={classes.happyCircleGrid}>
                <EmotionCircle
                  name="기쁨이"
                  gender={gender}
                  number={happyNumber}
                  emotion="happy"
                />
              </Grid>
              <Grid className={classes.sadCircleGrid}>
                <EmotionCircle
                  name="슬픔이"
                  gender={gender}
                  number={sadNumber}
                  emotion="sad"
                />
              </Grid>
              <Grid className={classes.angryCircleGrid}>
                <EmotionCircle
                  name="버럭이"
                  gender={gender}
                  number={angryNumber}
                  emotion="angry"
                />
              </Grid>
              <Grid className={classes.fussyCircleGrid}>
                <EmotionCircle
                  name="까칠이"
                  gender={gender}
                  number={fussyNumber}
                  emotion="fussy"
                />
              </Grid>
              <Grid className={classes.timidCircleGrid}>
                <EmotionCircle
                  name="소심이"
                  gender={gender}
                  number={timidNumber}
                  emotion="timid"
                />
              </Grid>
              <Grid className={classes.analysisGrid}>
                <Analysis text={analysisText} />
              </Grid>
              <Grid className={classes.modalCloseBtnGrid}>
                <ModalCloseBtn />
              </Grid>
            </Grid>
          </Fade>
        </Tablet>

        {/* Mobile View */}
        <Mobile>
          <Fade in={openModal}>
            <Grid className={classes.container}>
              <Grid className={classes.titleGrid}>
                <Title text={titleText} />
              </Grid>
              <Grid className={classes.subTitleGrid}>
                <SubTitle text={subTitleText} />
              </Grid>
              <Grid className={classes.happyCircleGrid}>
                <EmotionCircle
                  name="기쁨이"
                  gender={gender}
                  number={happyNumber}
                  emotion="happy"
                />
              </Grid>
              <Grid className={classes.sadCircleGrid}>
                <EmotionCircle
                  name="슬픔이"
                  gender={gender}
                  number={sadNumber}
                  emotion="sad"
                />
              </Grid>
              <Grid className={classes.angryCircleGrid}>
                <EmotionCircle
                  name="버럭이"
                  gender={gender}
                  number={angryNumber}
                  emotion="angry"
                />
              </Grid>
              <Grid className={classes.fussyCircleGrid}>
                <EmotionCircle
                  name="까칠이"
                  gender={gender}
                  number={fussyNumber}
                  emotion="fussy"
                />
              </Grid>
              <Grid className={classes.timidCircleGrid}>
                <EmotionCircle
                  name="소심이"
                  gender={gender}
                  number={timidNumber}
                  emotion="timid"
                />
              </Grid>
              <Grid className={classes.analysisGrid}>
                <Analysis text={analysisText} />
              </Grid>
              <Grid className={classes.modalCloseBtnGrid}>
                <ModalCloseBtn />
              </Grid>
            </Grid>
          </Fade>
        </Mobile>

        {/* PCwide View */}
        <PCwide>
          <Fade in={openModal}>
            <Grid className={classes.container}>
              <Grid className={classes.titleGrid}>
                <Title text={titleText} />
              </Grid>
              <Grid className={classes.subTitleGrid}>
                <SubTitle text={subTitleText} />
              </Grid>
              <Grid className={classes.happyCircleGrid}>
                <EmotionCircle
                  name="기쁨이"
                  gender={gender}
                  number={happyNumber}
                  emotion="happy"
                />
              </Grid>
              <Grid className={classes.sadCircleGrid}>
                <EmotionCircle
                  name="슬픔이"
                  gender={gender}
                  number={sadNumber}
                  emotion="sad"
                />
              </Grid>
              <Grid className={classes.angryCircleGrid}>
                <EmotionCircle
                  name="버럭이"
                  gender={gender}
                  number={angryNumber}
                  emotion="angry"
                />
              </Grid>
              <Grid className={classes.fussyCircleGrid}>
                <EmotionCircle
                  name="까칠이"
                  gender={gender}
                  number={fussyNumber}
                  emotion="fussy"
                />
              </Grid>
              <Grid className={classes.timidCircleGrid}>
                <EmotionCircle
                  name="소심이"
                  gender={gender}
                  number={timidNumber}
                  emotion="timid"
                />
              </Grid>
              <Grid className={classes.analysisGrid}>
                <Analysis text={analysisText} />
              </Grid>
              <Grid className={classes.modalCloseBtnGrid}>
                <ModalCloseBtn />
              </Grid>
            </Grid>
          </Fade>
        </PCwide>
      </Box>
    </Modal>

    // <ModalWindow />
  );
}
