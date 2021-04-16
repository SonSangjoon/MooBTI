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

  titleTextStyles: {
    color: "white",
    fontFamily: "S-CoreDream-6Bold",
    fontSize: "32px",
  },

  subTitleGrid: {
    gridColumn: "span 13",
    gridRow: "3/span 1",
    paddingTop: "15px"
  },

  subTitleTextStyles: {
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
  analysisTextStyle: {
    color: "white",
    fontSize: "17px",
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
    <Box className={classes.titleTextStyles} align="center">
      {data.text}
    </Box>
  );
}

function SubTitle(data) {
  const classes = useStyles();
  
  return (
    <Box className={classes.subTitleTextStyles} align="center">
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
    <Box className={classes.analysisTextStyle} align="center">
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

export default function TransitionsModal({data, genderType}) {
  const classes = useStyles();
  const { openModal, setOpenModal } = useContext(MbtiContext);

  const handleClose = () => {
    setOpenModal(false);
  };
  const titleText = data.analysisTitle;
  const subTitleText = data.analysisSubTitle;
  const analysisText =data.analysisText;

  const happyNumber = data.emotion[0];
  const sadNumber = data.emotion[1];
  const angryNumber = data.emotion[2];
  const fussyNumber = data.emotion[3];
  const timidNumber = data.emotion[4];

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
                  gender={genderType}
                  number={happyNumber}
                  emotion="happy"
                />
              </Grid>
              <Grid className={classes.sadCircleGrid}>
                <EmotionCircle
                  name="슬픔이"
                  gender={genderType}
                  number={sadNumber}
                  emotion="sad"
                />
              </Grid>
              <Grid className={classes.angryCircleGrid}>
                <EmotionCircle
                  name="버럭이"
                  gender={genderType}
                  number={angryNumber}
                  emotion="angry"
                />
              </Grid>
              <Grid className={classes.fussyCircleGrid}>
                <EmotionCircle
                  name="까칠이"
                  gender={genderType}
                  number={fussyNumber}
                  emotion="fussy"
                />
              </Grid>
              <Grid className={classes.timidCircleGrid}>
                <EmotionCircle
                  name="소심이"
                  gender={genderType}
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
                  gender={genderType}
                  number={happyNumber}
                  emotion="happy"
                />
              </Grid>
              <Grid className={classes.sadCircleGrid}>
                <EmotionCircle
                  name="슬픔이"
                  gender={genderType}
                  number={sadNumber}
                  emotion="sad"
                />
              </Grid>
              <Grid className={classes.angryCircleGrid}>
                <EmotionCircle
                  name="버럭이"
                  gender={genderType}
                  number={angryNumber}
                  emotion="angry"
                />
              </Grid>
              <Grid className={classes.fussyCircleGrid}>
                <EmotionCircle
                  name="까칠이"
                  gender={genderType}
                  number={fussyNumber}
                  emotion="fussy"
                />
              </Grid>
              <Grid className={classes.timidCircleGrid}>
                <EmotionCircle
                  name="소심이"
                  gender={genderType}
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
                  gender={genderType}
                  number={happyNumber}
                  emotion="happy"
                />
              </Grid>
              <Grid className={classes.sadCircleGrid}>
                <EmotionCircle
                  name="슬픔이"
                  gender={genderType}
                  number={sadNumber}
                  emotion="sad"
                />
              </Grid>
              <Grid className={classes.angryCircleGrid}>
                <EmotionCircle
                  name="버럭이"
                  gender={genderType}
                  number={angryNumber}
                  emotion="angry"
                />
              </Grid>
              <Grid className={classes.fussyCircleGrid}>
                <EmotionCircle
                  name="까칠이"
                  gender={genderType}
                  number={fussyNumber}
                  emotion="fussy"
                />
              </Grid>
              <Grid className={classes.timidCircleGrid}>
                <EmotionCircle
                  name="소심이"
                  gender={genderType}
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
                  gender={genderType}
                  number={happyNumber}
                  emotion="happy"
                />
              </Grid>
              <Grid className={classes.sadCircleGrid}>
                <EmotionCircle
                  name="슬픔이"
                  gender={genderType}
                  number={sadNumber}
                  emotion="sad"
                />
              </Grid>
              <Grid className={classes.angryCircleGrid}>
                <EmotionCircle
                  name="버럭이"
                  gender={genderType}
                  number={angryNumber}
                  emotion="angry"
                />
              </Grid>
              <Grid className={classes.fussyCircleGrid}>
                <EmotionCircle
                  name="까칠이"
                  gender={genderType}
                  number={fussyNumber}
                  emotion="fussy"
                />
              </Grid>
              <Grid className={classes.timidCircleGrid}>
                <EmotionCircle
                  name="소심이"
                  gender={genderType}
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
