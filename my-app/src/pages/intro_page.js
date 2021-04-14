import React from 'react'
import { Link } from "react-router-dom";
import NavBar from '../components/nav_bar'
import Footer from '../components/footer'
import { Box, Grid, Button } from '@material-ui/core';
import { Mobile, Tablet, PC, PCwide } from '../components/MediaQuery' 
import { useStyles } from './styles/intro_page_styles'

function IntroPageText(){
  const classes = useStyles();

  return(
    <Box>
      <PC>
      <Box>
        <Box className={classes.mainText}>
          MBTI로 받아보는 연애 코칭?
        </Box>
        <Box className={classes.subText}>
          영화 캐릭터로 보는 나의 연애스타일과 나와 어울리는 캐릭터
        </Box>
        <Link to="/gender" className={classes.link}>
          <Button className={classes.button}>
            시작하기 
          </Button>
        </Link>
      </Box>
      </PC>
      <Mobile >
        <Box className={classes.mobileMainText} >
          MBTI로 받아보는 연애 코칭?
        </Box>
        <Box className={classes.mobileSubText}>
          영화 캐릭터로 보는 나의 연애스타일과 나와 어울리는 캐릭터
        </Box>
        <Link to="/gender" className={classes.mobileLink}>
        <Button className={classes.mobileButton}>
          시작하기 
        </Button>     
        </Link>
      </Mobile>
      <Tablet>
      <Box>
        <Box className={classes.mainText}>
          MBTI로 받아보는 연애 코칭?
        </Box>
        <Box className={classes.subText}>
          영화 캐릭터로 보는 나의 연애스타일과 나와 어울리는 캐릭터
        </Box>
        <Link to="/gender" className={classes.link}>
          <Button className={classes.button}>
            시작하기 
          </Button>
        </Link>
      </Box>
      </Tablet>
      <PCwide>
      <Box>
        <Box className={classes.mainText}>
          MBTI로 받아보는 연애 코칭?
        </Box>
        <Box className={classes.subText}>
          영화 캐릭터로 보는 나의 연애스타일과 나와 어울리는 캐릭터
        </Box>
        <Link to="/gender" className={classes.link}>
          <Button className={classes.button}>
            시작하기 
          </Button>
        </Link>
      </Box>
      </PCwide>
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
            <Grid className={classes.emptyGrid} item >
            </Grid>
            <Grid className={classes.textGrid} item >
              <IntroPageText/>
            </Grid>
          </Grid>
          <Footer/>
          </Box>
        </PC>
        
        {/* Mobile View */}
        
        <Mobile >
        <Box className={classes.root}>
          <NavBar pageType="mobile"/>
          <Grid className={classes.mobileContainer}>
            <Grid item className={classes.mobileInto}>
              <IntroPageText />
            </Grid>
          </Grid>
          <Footer/>
        </Box>
        </Mobile>

          <Tablet>
            <Box className={classes.root}>
            <NavBar pageType={pageType}/>
            <Grid className={classes.container}>
              <Grid className={classes.emptyGrid} item >
              </Grid>
              <Grid className={classes.textGrid} item>
                <IntroPageText/>
              </Grid>
            </Grid>
            <Footer/>
          </Box>
          </Tablet>

          <PCwide>
            <Box className={classes.root}>
            <NavBar pageType={pageType}/>
            <Grid className={classes.container}>
              <Grid className={classes.emptyGrid} item >
              </Grid>
              <Grid className={classes.textGrid} item >
                <IntroPageText/>
              </Grid>
            </Grid>
            <Footer/>
            </Box>
          </PCwide>
      </Box>
      

    )
}