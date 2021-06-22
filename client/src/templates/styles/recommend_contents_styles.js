import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  recommendGrid1: {
    gridColumn: "span 12",
    gridRow: "span 6",
  },
  recommendGrid2: {
    gridColumn: "span 12",
    gridRow: "7/span 5",
  },

  recommendContainer: {
    color: "white",
    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  recommendTitleGrid: {
    gridColumn: "span 12",
    gridRow: "span 1",
  },

  recommendDesc: {
    gridColumn: "5/span 8",
    gridRow: "3/ span 10",
  },
  // recommendDesc: {
  //   gridColumn: "5/span 8",
  //   gridRow: "4/ span 10",
  // },

  recommendCharText: {
    fontSize: "1.2vw",
    paddingBottom: "10px",
  },

  recommendDescText: {
    fontSize: "1vw",
  },

  ImageGrid: {
    gridColumn: "span 3",
    gridRow: "3/ span 5",
  },

  //   ImageGrid: {
  //   gridColumn: "5/span 4",
  //   gridRow: "3/ span 7",
  // },

  posterImg: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    borderRadius: "9px",
  },

  movieLinkBtnGrid: {
    gridColumn: "5/ span 8",
    gridRow: "7/ span 2",
    fontFamily: "Apple SD Gothic Neo",
  },

  movieLinkBtn: {
    minWidth: "100%",
    fontSize: "12px",
    color: "secondary",
  },
  movieLinkText: {
    color: "rgba(256,256,256,0.8)",
    fontFamily: "Apple SD Gothic Neo",
  },

  restartBtnGrid: {
    gridColumn: "3/ span 8",
    gridRow: "-2/ span 2",
  },

  restartBtn: {
    minWidth: "100%",

    color: "#dc1a28",
    border: "2px solid #dc1a28",
    "&.MuiButton-root:hover": {
      color: "lightgrey",
      border: "2px solid white",
    },
  },

  restartBtnText: {
    fontFamily: "Apple SD Gothic Neo",
  },

  recommendTitleText: {
    fontSize: "1.4vw",
    // fontSize: "18px",
    fontWeight: "bold",
  },

  // Mobile View

  mobileposterImg: {
    width: "40%",
    borderRadius: "9px",
  },

  mobileRecommendBox1: {
    marginTop: "20px",
    background: "linear-gradient(to top, black, 30%,rgba(146,32,32, 1))",
    borderRadius: "10px",
    textAlign: "center",
    paddingTop: "15px",
    paddingBottom: "15px",
    // border: "0.01px solid rgba(256,256,256, 0.1)",
  },

  mobileRecommendBox2: {
    marginTop: "40px",
    // to top, black, 20%, cyan
    background: "linear-gradient(to top, black, 30%, rgba(27,131,190, 0.7))",
    borderRadius: "10px",
    textAlign: "center",
    paddingTop: "15px",
    paddingBottom: "25px",
  },

  mobileRecommendTitleBox: {
    color: "white",
  },

  mobileImageBox: {
    marginTop: "20px",
  },

  mobileRecommendTitleText: {
    fontSize: "17px",
    textAlign: "center",
  },

  mobileCharTitleBox: {
    color: "white",
    textAlign: "center",
  },

  mobileRecommendCharText: {
    marginTop: "4px",
    fontSize: "25px",
    fontWeight: "bold",
  },

  mobileCharMbtiText: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  mobileRecommendDesc: {
    textAlignVertical: "center",
    whiteSpace: "pre-wrap",
  },

  mobileRecommendDescText: {
    margin: "30px",
    color: "white",
    fontSize: "17px",
    textAlign: "center",
    fontFamily: "Apple SD Gothic Neo",
  },

  mobileEmptynBox: {
    height: "20px,",
  },

  mobilerestartBtn: {
    width: "70%",
    color: "white",
    border: "2px solid white",
    borderRadius: "20px",
  },


  mobileRestartBtnBox: {
    textAlign: "center",
    marginTop: "40px",
  },

  mobileMovieLinkBtn: {
    width: "59%",
    color: "black",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
    border: "2px solid rgba(256,256,256,0.1)",
    borderRadius: "8px",
  },

  //Tablet View
  tabletRecommendTitleGrid: {
    gridColumn: "span 12",
    gridRow: "span 2",
  },

  tabletRecommendTitleText: {
    fontSize: "14px",
  },

  tabletRecommendCharText: {
    fontSize: "14px",
    paddingBottom: "10px",
  },

  tabletRecommendDesc: {
    gridColumn: "5/span 8",
    gridRow: "3/ span 7",
  },

  tabletRecommendDescText: {
    fontSize: "12px",
  },

  tabletMovieLinkBtnGrid: {
    gridColumn: "4/ span 9",
    gridRow: "9/ span 2",
  },

  tabletRestartBtnGrid: {
    gridColumn: "2/ span 10",
    gridRow: "-2/ span 2",
  },

  //PcWide View

  span: {
    margin: "10px",
  },
}));

export { useStyles };
