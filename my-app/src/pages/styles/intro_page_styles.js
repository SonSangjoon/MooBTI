import { makeStyles } from "@material-ui/core/styles";
import Wallpaper from "../../images/intro/Wallpaper.jpeg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: `url(${Wallpaper})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  container: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: theme.spacing(3),
    background: "linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
  },

  emptyGrid: {
    gridColumn: "span 3",
  },

  textGrid: {
    paddingLeft: 50,
    paddingTop: 20,
    gridColumn: "span 2",
  },

  mainText: {
    padding: 5,
    marginBottom: 15,
    color: "white",
    fontSize: "3.5vw",
<<<<<<< HEAD
    fontFamily: "S-CoreDream-4Regular",
=======
    fontWeight: "bold"
>>>>>>> feature/front
  },

  subText: {
    padding: 5,
    marginBottom: 15,
    color: "white",
    fontSize: "2vw",
<<<<<<< HEAD
    fontFamily: "S-CoreDream-4Regular",
=======
>>>>>>> feature/front
  },

  link: {
    textDecoration: "none",
  },

  button: {
    padding: "5px 30px 5px 30px",
    size: "large",
    fontSize: "25px",
    fontWeight: "bold",
    background: "#dc1a28",
    color: "white",
    "&:hover": {
      backgroundColor: "#dc1a28",
      opacity: 0.8,
      color: "rgba(250, 250, 250, 0.5)",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgba(250, 0, 0, 0.7)",
    },
  },

  // Mobile

  mobileContainer: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: theme.spacing(1),
    background: "linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
  },

  mobileMainText: {
    padding: 5,
    color: "white",
<<<<<<< HEAD
    fontSize: "5.5vw",
    fontFamily: "S-CoreDream-4Regular",
=======
    fontSize: "6vw",
    fontWeight: "bold",
>>>>>>> feature/front
    textAlign: "center",
  },

  mobileSubText: {
    padding: 15,
    // marginBottom: 5,
    color: "white",
    fontSize: "4vw",
<<<<<<< HEAD
    fontFamily: "S-CoreDream-4Regular",
=======
>>>>>>> feature/front
    textAlign: "center",
  },

  mobileLink: {
    textDecoration: "none",
    marginTop: "20px",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0%)",
  },

  mobileButton: {
    padding: "5px 30px 5px 30px",
    size: "large",
    fontSize: "20px",
    background: "#dc1a28",
    color: "white",
    "&:hover": {
      backgroundColor: "#dc1a28",
      opacity: 0.8,
      color: "rgba(250, 250, 250, 0.5)",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgba(250, 0, 0, 0.7)",
    },

    mobileIntro: {
      gridRow: "1/span 1",
    },
  },
}));

export { useStyles };
