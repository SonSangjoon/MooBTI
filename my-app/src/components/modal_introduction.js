import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { GenderContext } from "../App";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "black",
    border: "2px solid red",
    boxShadow: theme.shadows[1],
    padding: theme.spacing(2, 4, 3),
    width: "768px",
    height: "80vh",
  },
}));

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
      <Fade in={openModal}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title" color="white">Transition modal</h2>
          <p id="transition-modal-description">
            react-transition-group animates me.
          </p>
          <closeButton
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>
      </Fade>
    </Modal>
  );
}
