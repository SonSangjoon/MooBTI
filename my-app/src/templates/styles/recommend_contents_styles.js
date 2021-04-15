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

  recommendCharText:{
    fontSize: "14px",
    fontFamily: "S-CoreDream-6Bold",
    paddingBottom: '8px',


  },

  recommendDescText:{
    fontSize: "1.6vh",
    fontFamily: 'S-CoreDream-3Light',

  },

  ImageGrid: {
    gridColumn: "span 3",
    gridRow: "4/ span 7",
  },

  PosterImg: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
  },

  movieLinkBtnGrid: {
    gridColumn: "5/ span 5",
    gridRow: "9/ span 2",
  },
  
  movieLinkBtn: {
    minWidth: "100%",
    fontSize: "12px"
  },

  restartBtnGrid: {
    gridColumn: "3/ span 8",
    gridRow: "-2/ span 2",
  },

  restartBtn: {
    minWidth: "100%",
  },

  recommendTitleText:{
    fontSize: "1.2vw",
    fontFamily: "S-CoreDream-6Bold"
  },

  // Mobile View
  mobileRecommendTitleGrid:{
    gridColumn: "span 12",
    gridRow: "span 2",
  },

  mobileRecommendTitleText:{
    fontSize: "14px",
    fontFamily: "S-CoreDream-6Bold"
  },

  mobileRecommendCharText:{
    fontSize: "14px",
    fontFamily: "S-CoreDream-4Regular"
  },

  mobileRecommendDesc:{
    gridColumn: "5/span 8",
    gridRow: "4/ span 7",
  },
  mobileMovieLinkBtnGrid: {
    gridColumn: "5/ span 5",
    gridRow: "-4/ span 2",
  },
    //Tablet View
    tabletRecommendTitleGrid:{
      gridColumn: "span 12",
      gridRow: "span 2",
    },
  
    tabletRecommendTitleText:{
      fontSize: "14px",
      fontFamily: "S-CoreDream-6Bold"
    },
  
    tabletRecommendCharText:{
      fontSize: "14px",
      fontFamily: "S-CoreDream-4Regular"
    },
  
    tabletRecommendDesc:{
      gridColumn: "5/span 8",
      gridRow: "4/ span 7",
    },
    tabletMovieLinkBtnGrid: {
      gridColumn: "2/span 10",
      gridRow: "span 2",
    },

    //PcWide View

}));




export { useStyles}