
import { makeStyles } from '@material-ui/core/styles';
import Wallpaper from '../../images/intro/Wallpaper.jpeg'

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
    paddingTop: 20,
    gridColumn : 'span 2'
  },

  mainText: {
    padding: 5,
    color: 'white',
    fontSize: "3.5vw",
    fontFamily: 'S-CoreDream-4Regular'
  },

  subText: {
    padding: 5,
    marginBottom: 10,
    color: 'white',
    fontSize: "2vw",
    fontFamily: 'S-CoreDream-4Regular'
  },

  link:{
    textDecoration: 'none',
  },

  button:{
    padding: '5px 30px 5px 30px',
    size: 'large',
    fontSize: "25px",
    fontFamily: 'S-CoreDream-6Bold',
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


  // Mobile
  
  mobileMainText: {
    padding: 5,
    color: 'white',
    fontSize: "8vw",
    fontFamily: 'S-CoreDream-4Regular',
    textAlign: 'center'
  },

  mobileSubText: {
    padding: 5,
    marginBottom: 10,
    color: 'white',
    fontSize: "4vw",
    fontFamily: 'S-CoreDream-4Regular',
    textAlign: 'center'

  }, 

  mobileLink:{
    textDecoration: 'none',
    marginTop: '20px',
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0%)',
  },

  mobileButton:{
    padding: '5px 30px 5px 30px',
    size: 'large',
    fontSize: "20px",
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

    mobileContainer : {
      height: '100vh',
      display: 'grid',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridGap: theme.spacing(1),
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
    },

    mobileIntro : {
      gridRow : '3/span 3',
      gridColumn: 'span 12'
    },

  },
}))

export { useStyles } 