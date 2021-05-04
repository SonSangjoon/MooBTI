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
    gridRow: "span 2",
  },

  recommendDesc: {
    gridColumn: "5/span 8",
    gridRow: "4/ span 10",
  },

  recommendCharText: {
    fontSize: "1.2vw",
    fontFamily: "S-CoreDream-6Bold",
    paddingBottom: "10px",
  },

  recommendDescText: {
    fontSize: "1vw",
    fontFamily: "S-CoreDream-3Light",
  },

  // ImageGrid: {
  //   gridColumn: "span 3",
  //   gridRow: "4/ span 7",
  // },

    ImageGrid: {
    gridColumn: "span 3",
    gridRow: "4/ span 7",
  },

  posterImg: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    borderRadius: "9px",
  },

  movieLinkBtnGrid: {
    gridColumn: "5/ span 5",
    gridRow: "9/ span 2",
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
  mobileRecommendTitleGrid: {
    gridColumn: "span 12",
    gridRow: "span 2",
  },

  mobileImageGrid: {
    gridColumn: "span 3",
    gridRow: "5/ span 4",
  },

  mobileRecommendTitleText: {
    fontSize: "18px",
    fontFamily: "S-CoreDream-6Bold",
  },

  mobileCharTitleGrid: {
    gridColumn: "span 12",
    gridRow: "3/ span 2",
    textAlign: "center",
  },

  mobileRecommendCharText: {
    fontSize: "20px",
    fontFamily: "S-CoreDream-4Regular",
  },

  mobileRecommendDesc: {
    gridColumn: "5/span 8",
    gridRow: "5/ span 7",
    textAlignVertical: "center",
  },

  mobileRecommendDescText: {
    fontSize: "px",
  },

  mobileMovieLinkBtnGrid: {
    gridColumn: "3/ span 8",
    gridRow: "-4/ span 2",
  },

  mobileRestartBtnGrid: {
    gridColumn: "3/ span 8",
    gridRow: "-4/ span 2",
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
    gridRow: "4/ span 7",
  },

  tabletRecommendDescText: {
    fontSize: "12px",
    fontFamily: "S-CoreDream-4Regular",
  },

  tabletMovieLinkBtnGrid: {
    gridColumn: "2/span 10",
    gridRow: "span 2",
  },

  tabletRestartBtnGrid: {
    gridColumn: "2/ span 10",
    gridRow: "-2/ span 2",
  },

  //PcWide View
}));

export { useStyles };
