import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "black",
  },

  container: {
    height: "100vh",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  emptyRow: {
    gridColumn: "span 12",
    gridRow: "span 1",
  },

  emptyColumn: {
    gridRow: "span 10",
    gridColumn: "span 1",
  },

  resultGrid: {
    gridColumn: "2/span 5",
    gridRow: "2/span 10",
    color: "white",
  },

  result: {
    display: "flex",
  },
  recommendContentsGrid: {
    gridColumn: "8/span 4",
    gridRow: "2/span 10",
    color: "white",
  },
  shareButton: {
    position: "fixed",
    bottom: "100px",
    right: "5px",
    padding: "20px",
  },

  mobileContainer: {
    backgroundColor: "black",
    height: "auto",
    position: "relative",
  },

  mobileBlock: {
    overflow: "auto",
    display: "block",
    margin: "30px",
  },

  mobileResultBlock: {
    overflow: "auto",
    display: "block",
    margin: "15px",
  },

  mobileRecommendBlock1: {
    overflow: "auto",
    display: "block",
    margin: "15px",
    marginTop:"45px",
  },

  mobileRecommendBlock: {
    overflow: "auto",
    display: "block",
    margin: "15px",
    
  },
  mobileShareButton: {
    position: "fixed",
    bottom: "80px",
    right: "0",
    padding: "10px",
  },
  mobileempty:{
    height:"10px"
  }
}));

export { useStyles };
