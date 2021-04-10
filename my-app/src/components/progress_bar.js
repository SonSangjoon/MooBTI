import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Box from '@material-ui/core/Box';
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
     secondary: {
         main: '#dc1a28'
     }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" height="2" >
      <MuiThemeProvider theme={theme}>
        <LinearProgress variant="determinate" color="secondary" {...props} />
      </MuiThemeProvider>
    </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel({num}) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    setProgress((num));
  }, [num]);

  return (
    <Box className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </Box>
  );
}
