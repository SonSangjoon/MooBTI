import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography, Box, Grid, Link, Fab } from "@material-ui/core";
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

// just some icons for illustration (example only):
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import NavigationClose from 'material-ui/svg-icons/navigation/close';
// import NewGameIcon from 'material-ui/svg-icons/av/playlist-add';
// import NewPageIcon from 'material-ui/svg-icons/action/note-add';

const useStyles = makeStyles({
  root: {
    background: "rgba(0, 0, 0, 0)",
    color: "red",
    height: "5px",
  },
  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(2, 1fr)",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

export default function ShareButton() {
  const classes = useStyles();
  return (
    <Grid className={classes.container}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
    </Grid>
  );
}
