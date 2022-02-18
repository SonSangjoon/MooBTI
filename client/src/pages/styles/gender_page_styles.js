import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "black",
  },

  container: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: theme.spacing(2),
  },
  genderGrid: {
    gridRow: "2/span 1",
  },
  title: {
    paddingBottom: "1vh",
    fontSize: "28px",
    color: "white",
  },

  imgTitle: {
    fontSize: 20,
    color: "white",
  },

  gender_img: {
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "white",
      borderRadius: "10px",
    },
    padding: "14px 14px",
    marginBottom: "10px",
  },

  image: {
    borderRadius: "50px",
    objectFit: "cover",
    width: "100%",
    height: "53vh",
  },

  mobileContainer: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: theme.spacing(1),
  },

  mobileGrid: {
    gridRow: "2/span 1",
  },

  mobiletitle: {
    paddingBottom: "1vh",
    fontSize: "20px",
    color: "white",
  },

  mobileImageTitle: {
    fontSize: 17,
    color: "white",
  },

  tabletContainer: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridGap: theme.spacing(2),
  },

  tabletGenderPageGrid: {
    gridRow: "2/span 1",
  },
}));

export { useStyles };
