import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Box, Grid, Button } from "@material-ui/core";
import { GenderContext } from "../App";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { Mobile, Tablet, PC, PCwide } from "../components/MediaQuery.js";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "grid",
    gridTemplateRows: "repeat(12,1fr)",
    gridTemplateColumns: "repeat(12,1fr)",
    backgroundColor: "black",
    border: "2px solid red",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
    width: "768px",
    height: "80vh",
  },

  modalGrid: {
    gridColumn: "span 12",
    gridRow: "span 12",
  },

  closeButton: {
    // position: 'absolute',
    // right: theme.spacing(1),
    // top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

function ModalCloseBtn() {
  const classes = useStyles();
  const { openModal, setOpenModal } = useContext(GenderContext);

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

// function ModalWindow() {
//   const classes = useStyles();
//   const { openModal, setOpenModal } = useContext(GenderContext);

//   const handleClose = () => {
//     setOpenModal(false);
//   };

//   return (
//     <Modal
//       className={classes.modal}
//       open={openModal}
//       onClose={handleClose}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{
//         timeout: 500,
//       }}
//     >
//       <Fade in={openModal}>
//         <div className={classes.paper}>
//           <h2 id="transition-modal-title" color="white">
//             Transition modal
//           </h2>
//           <p id="transition-modal-description">
//             react-transition-group animates me.
//           </p>
//           <ModalCloseBtn />
//         </div>
//       </Fade>
//     </Modal>
//   );
// }

// function ModalWindow() {
//   const classes = useStyles();
//   const { openModal, setOpenModal } = useContext(GenderContext);

//   const handleClose = () => {
//     setOpenModal(false);
//   };

//   return (
//     <Fade in={openModal}>
//       <Grid className={classes.paper}>
//         <h2 id="transition-modal-title" color="white">
//           Transition modal
//         </h2>
//         <p id="transition-modal-description">
//           react-transition-group animates me.
//         </p>
//         <ModalCloseBtn />
//       </Grid>
//     </Fade>
//   );
// }








export default function TransitionsModal() {
  const classes = useStyles();
  const { openModal, setOpenModal } = useContext(GenderContext);

  const handleClose = () => {
    setOpenModal(false);
  };

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
              <ModalCloseBtn />
            </Grid>
          </Fade>
        </PC>

        <Tablet></Tablet>
        <Mobile></Mobile>
        <PCwide></PCwide>
      </Box>
    </Modal>

    // <ModalWindow />
  );
}
