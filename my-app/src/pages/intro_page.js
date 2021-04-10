import React from 'react'
import { Link } from "react-router-dom";
import NavBar from '../components/nav_bar'
import Footer from '../components/footer'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Button, Typography } from '@material-ui/core';
import { PC, Mobile } from '../components/MediaQuery' 
import Wallpaper from '../images/intro/Wallpaper.jpeg'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundImage: `url(${Wallpaper})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  container: {
    height: '100vh',
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: theme.spacing(3),

    background: 'linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
  },
  emptyGrid: {
    gridColumn : 'span 3'
  },

  textGrid: {
    paddingLeft: 50,
    gridColumn : 'span 2'
  },

  mainText: {
    padding: 5,
    color: 'white',
    fontSize: "5vw",
  },

  subText: {
    padding: 5,
    marginBottom: 10,
    color: 'white',
    fontSize: "2vw",
  },
  link:{
    textDecoration: 'none',
  },

  button:{
    padding: '5px 30px 5px 30px',

    size: 'large',
    fontSize: "30px",
    background: '#dc1a28',
    color: 'white',
    '&:hover': {
      backgroundColor: '#dc1a28',
      opacity: 0.8,
      color: 'rgba(250, 250, 250, 0.5)',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgba(250, 0, 0, 0.7)',
    },
  },

  mobileContainer : {
    display: 'grid',
    gridTemplateRows: 'repeat(3, 1fr)',
  }
}))

function IntroPageText(){
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.mainText} variant="h2" component="h2">
        MBTI로 받아보는 연애 코칭?
      </Typography>
      <Typography className={classes.subText} variant="h4" component="h2">
        영화 캐릭터로 보는 나의 연애스타일과 나와 어울리는 캐릭터
      </Typography>
      <Link to="/gender" className={classes.link}>
        <Button className={classes.button}>
          시작하기 
        </Button>
      </Link>
    </Box>
  )
}

export function IntroPage() {
  const classes = useStyles();
  const pageType = "intro"
    return (
      <Box className={classes.root}>
        <PC>
          <Box className={classes.root}>
          <NavBar pageType={pageType}/>
          <Grid className={classes.container}>
            <Grid className={classes.emptyGrid} item xl={12}>
            </Grid>
            <Grid className={classes.textGrid} item xl={8}>
              <IntroPageText/>
            </Grid>
          </Grid>
          <Footer/>
          </Box>
        </PC>
        <Mobile className={classes.root}>
          hello
        </Mobile>
      </Box>

    )
}