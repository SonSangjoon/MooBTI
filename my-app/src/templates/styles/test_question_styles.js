import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  testContainer: {
    height: "100%",
    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  imageGrid: {
    gridColumn: "span 12",
    gridRow: "span 8",
  },

  questionRow: {
    gridColumn: "span 12",
    gridRow: "span 1",
  },

  questionText: {
    color: "white",
    fontSize: "25px",
    paddingTop: 20,
  },

  image: {
    objectFit: "cover",
    width: "100%",
    height: "40vh",
    borderRadius: "10px",
  },

  answerGrid: {
    gridColumn: "span 12",
    gridRow: "span 2",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },

  emptyBox: {
    width: "100%",
    height: "60vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingContainer: {
    height: "100%",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
  },

  loadingGrid: {
    gridRow: "2/span 1",
  },
  loadingBox: {
    // display: 'inline-block',
    // verticalAlign : 'middle'
    align: "center",
  },
  loadingText: {
    display: "block",
    color: "white",
    fontSize: "3vmin",
    padding: 20,
  },

  // Mobile View

  mobileTestContainer: {
    height: "100%",
    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
  },

  mobileImage: {
    objectFit: "cover",
    width: "100%",
    height: "28vh",
    borderRadius: "10px",
  },

  mobileImageGrid: {
    gridRow: "span 5",
    gridColumn: "span 12",
    margin: "10px",
  },

  mobileQuestionRow: {
    gridRow: "6/span 2",
    gridColumn: "span 12",

    paddingTop: "10px",
  },

  mobileQuestionText: {
    color: "white",
    fontSize: "17px",
    whiteSpace: "pre-wrap",
  },

  mobileAnswerGrid1: {
    gridRow: "8/span 1",
    gridColumn: "span 12",
  },

  mobileAnswerGrid2: {
    gridRow: "10/span 2",
    gridColumn: "span 12",
  },

  mobileBtnWrapper: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    height: "100%",
  },

  //Tablet View
  tabletImageGrid: {
    gridColumn: "span 12",
    gridRow: "span 6",
  },

  tabletImage: {
    objectFit: "cover",
    width: "100%",
    height: "30vh",
    borderRadius: "10px",
  },

  tabletQuestionRow: {
    gridColumn: "span 12",
    gridRow: "7/span 2",
  },

  tabletQuestionText: {
    color: "white",
    fontSize: "19px",
    paddingTop: 20,
    whiteSpace: "pre-wrap",
  },

  //PcWide View
  pcWideImageGrid: {
    gridColumn: "3/span 8",
    gridRow: "span 6",
  },
  pcWideImage: {
    objectFit: "cover",
    width: "100%",
    height: "53vh",
    borderRadius: "10px",
  },
  pcWideQuestionRow: {
    gridColumn: "span 12",
    gridRow: "9/span 1",
  },

  pcWideQuestionText: {
    color: "white",
    fontSize: "40px",
    paddingTop: 20,
  },

  pcWideAnswerGrid: {
    gridColumn: "3/span 8",
    gridRow: "10/span 2",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
}));

export { useStyles };
