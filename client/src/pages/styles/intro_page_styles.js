import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 1), 90%,rgba(200, 50, 50, 0.9))",
  },

  container: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: theme.spacing(3),
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
    fontWeight: "bold",
  },

  subText: {
    padding: 5,
    marginBottom: 15,
    color: "rgba(180, 180, 180, 1)",

    fontSize: "2vw",
  },

  link: {
    textDecoration: "none",
  },

  button: {
    borderRadius: "10px",
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

  mobileContainer: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
  },

  mobileTextBox: {
    padding: "5px",
    justifyContent: "center",
  },

  mobileMainText: {
    padding: 10,
    color: "white",
    fontSize: "6vw",
    fontWeight: "bold",
    marginTop: "20",
  },

  mobileSubText: {
    padding: 10,
    color: "rgba(180, 180, 180, 1)",
    fontSize: "4vw",
  },

  mobileLink: {
    textDecoration: "none",
    margin: "20px 0 0 15px",
  },

  mobileButton: {
    background: "#dc1a28",
    borderRadius: "10px",
    padding: "5px 30px 5px 30px",
    size: "large",
    fontSize: "20px",
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
}));

export { useStyles };
