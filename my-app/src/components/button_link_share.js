import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Fab, Button } from "@material-ui/core";
import LinkIcon from "@material-ui/icons/Link";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles({
  copy: {
    width: "0px",
    height: "0px",
    bottom: "0",
    left: "0",
    opacity: "0",
  },
});

const LinkShareButton = () => {
  const classes = useStyles();
  const textInput = useRef();
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = snackBarState;

  const handleClick = (newState) => () => {
    const el = textInput.current;
    el.select();
    document.execCommand("copy");
    setSnackBarState({ open: true, ...newState });
  };

  const handleClose = () => {
    setSnackBarState({ ...snackBarState, open: false });
  };

  const action = (
    <Button color="secondary" size="small" onClick={handleClose}>
      닫기
    </Button>
  );

  return (
    <Box>
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
          onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
        >
          <LinkIcon />
        </Fab>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        message="링크가 클립보드에 복사되었습니다."
        key={vertical + horizontal}
        action={action}
      />
    </Box>
  );
};

export default LinkShareButton;
