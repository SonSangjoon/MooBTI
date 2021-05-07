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
    fontFamily: "S-CoreDream-6Bold",
    paddingBottom: "10px",
  },

  recommendDescText: {
    fontSize: "1vw",
    fontFamily: "S-CoreDream-3Light",
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
  },

  movieLinkBtn: {
    minWidth: "100%",
    fontSize: "12px",
    color: "secondary",
  },
  movieLinkText: {
    color: "white",
    fontFamily: "S-CoreDream-4Regular",
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
    fontFamily: "S-CoreDream-6Bold",
  },

  recommendTitleText: {
    // fontSize: "1.4vw",
    fontSize: "18px",
    fontWeight: "bold",
    fontFamily: "S-CoreDream-6Bold",
  },

  // Mobile View
  mobileroot:{
    align: "center",
  },
  mobileposterImg: {
    width: "40%",
    borderRadius: "9px",
  },

  mobileRecommendBox1: {
    marginTop: "20px",
    background: "linear-gradient(180deg, #000000 0%, #922020 95%)",
    borderRadius: "10px",
    textAlign: "center",
  },

  mobileRecommendBox2: {
    marginTop: "40px",
    background: "linear-gradient(180deg, #000000 0%, #1b83be 95%)",
    borderRadius: "10px",
    textAlign: "center",
  },

  mobileRecommendTitleBox: {
    color: "white"
  },

  mobileImageBox: {
    marginTop: "40px"
  },

  mobileRecommendTitleText: {
    fontSize: "17px",
    textAlign: "center",
    fontFamily: "S-CoreDream-6Bold",
  },

  mobileCharTitleBox: {
    color:"white",
    textAlign: "center",
  },

  mobileRecommendCharText: {
    marginTop: "4px",
    fontSize: "20px",
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
  },

  mobileMovieLinkBtnBox: {
    margin: "20px",
    textAlign: "center",
  },

  mobileEmptynBox:{
    height: "20px,"
  },

  mobilerestartBtn: {
    width: "80%",
    color: "white",
    border: "2px solid white",
    borderRadius: "20px"
    },


  mobileRestartBtnBox: {
    textAlign: "center",
    marginTop : "40px",
  },

  mobileMovieLinkBtn:{
    width: "80%",
    color: "white",
  },

  //Tablet View
  tabletRecommendTitleGrid: {
    gridColumn: "span 12",
    gridRow: "span 2",
  },

  tabletRecommendTitleText: {
    fontSize: "14px",
    fontFamily: "S-CoreDream-6Bold",
  },

  tabletRecommendCharText: {
    fontSize: "14px",
    fontFamily: "S-CoreDream-6Bold",
    paddingBottom: "10px",
  },

  tabletRecommendDesc: {
    gridColumn: "5/span 8",
    gridRow: "3/ span 7",
  },

  tabletRecommendDescText: {
    fontSize: "12px",
    fontFamily: "S-CoreDream-4Regular",
  },

  // tabletMovieLinkBtnGrid: {
  //   gridColumn: "2/span 10",
  //   gridRow: "span 2",
  // },
  tabletMovieLinkBtnGrid: {
    gridColumn: "4/ span 9",
    gridRow: "9/ span 2",
  },

  tabletRestartBtnGrid: {
    gridColumn: "2/ span 10",
    gridRow: "-2/ span 2",
  },

  //PcWide View
}));

export { useStyles };
