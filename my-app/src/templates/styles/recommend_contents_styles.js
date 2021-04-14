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
  recommendBadTitleGrid: {
    gridColumn: "span 12",
    gridRow: "1",
  },

  recommendTitleFont:{
    fontSize: "17.3px",
  },
  recommendMbtiFont:{
    fontSize: "16px",
    fontFamily: 'S-CoreDream-3Light'
  },
  recommendDescFont:{
    fontSize: "14px",
    fontFamily: 'S-CoreDream-3Light'

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

  recommendDesc: {
    gridColumn: "5/span 8",
    gridRow: "4/ span 10",
  },
  dummyRecommendBadDesc: {
    gridColumn: "5/span 8",
    gridRow: "3/ span 10",
  },

  netflixLinkBtnGrid: {
    gridColumn: "5/ span 5",
    gridRow: "9/ span 2",
  },
  
  dummyBtn: {
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

  recommendText: {
    gridColumn: "span 12",
    gridRow: "span 3",
    color: "white",
  },


    //Tablet View

    //PcWide View

}));




export { useStyles}