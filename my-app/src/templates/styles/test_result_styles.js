import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
  },

  container: {
    height: "100%",

    display: "grid",
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },

  resultMainGrid: {
    gridColumn: "span 12",
    gridRow: "span 5",
    color: "white",
  },

  resultDescriptionGrid: {
    gridColumn: "span 12",
    gridRow: "span 5",
    color: "white",
  },

  buttonGrid: {
    gridColumn: "4/ span 6",
    gridRow: "span 1",
  },

  imageGrid: {
    gridColumn: "2/span 10",
    gridRow: "2/span 9",
  },

  characterImage: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    borderRadius: "15px",
  },

  characterTitleGrid: {
    gridColumn: "span 12",
    gridRow: "11/ span 2",
  },

  characterTitle: {
    align: "center",
    marginTop: 15,
    // fontSize: "2vw",
    fontFamily: "S-CoreDream-8Heavy",
    fontSize: "25px",
    whiteSpace: "pre-wrap",
  },

  charScriptText: {
    fontSize: "15px",
    fontFamily: "S-CoreDream-6Bold",
    letterSpacing: "1px",
  },

  characterScript: {
    gridColumn: "2/span 10",
    gridRow: "3/span 2",
  },

  characterDetail: {
    gridColumn: "span 12",
    gridRow: "5/ span 8",
  },

  characterDetailText: {
    fontSize: "1vw",
    fontFamily: "S-CoreDream-3Light",
    letterSpacing: "1px",
  },

  analysisBtn: {
    minWidth: "100%",

    color: "#dc1a28",
    border: "2px solid #dc1a28",
    "&.MuiButton-root:hover": {
      color: "lightgrey",
      border: "2px solid white",
    },
  },
  analysisText: {
    fontFamily: "S-CoreDream-6Bold",
  },
  //Mobile View

  mobileResultMainGrid: {
    gridColumn: "span 12",
    gridRow: "span 4",
    color: "white",
  },

  mobileImageGrid: {
    gridColumn: "2/span 10",
    gridRow: "2/span 6",
  },
  mobileCharacterTitleGrid: {
    gridColumn: "span 12",
    gridRow: "9/ span 2",
  },

  mobileCharacterTitle: {
    align: "center",
    marginTop: 15,

    fontFamily: "S-CoreDream-6Bold",
    fontSize: "18px",
    whiteSpace: "pre-wrap",
    letterSpacing: "2px",
  },

  mobileResultDescriptionGrid: {
    gridColumn: "span 12",
    gridRow: "span 5",
    color: "white",
    maxHeight: 100,
  },

  mobileCharacterDetailText: {
    fontSize: "16px",
    letterSpacing: "2px",
    fontFamily: "S-CoreDream-4Regular",
  },

  mobileCharScriptText: {
    fontSize: "17px",
    letterSpacing: "2px",
    fontFamily: "S-CoreDream-6Bold",
  },

  mobileCharacterScript: {
    gridColumn: "2/span 10",
    gridRow: "span 2",
  },

  mobileCharacterDetail: {
    gridColumn: "span 12",
    gridRow: "3/ span 7",
  },

  mobileButtonGrid: {
    gridColumn: "3/ span 8",
    gridRow: "span 1",
  },

  //Tablet View
  tabletResultMainGrid: {
    gridColumn: "span 12",
    gridRow: "span 4",
    color: "white",
  },

  tabletImageGrid: {
    gridColumn: "2/span 10",
    gridRow: "2/span 6",
  },
  tabletCharacterTitleGrid: {
    gridColumn: "span 12",
    gridRow: "9/ span 2",
  },

  tabletCharacterTitle: {
    align: "center",
    marginTop: 15,

    fontFamily: "S-CoreDream-6Bold",
    fontSize: "17px",
    whiteSpace: "pre-wrap",
    letterSpacing: "1px",
  },

  tabletCharacterDetailText: {
    fontSize: "14px",
    letterSpacing: "1px",
  },

  tabletCharScriptText: {
    fontSize: "14px",
    letterSpacing: "2px",
    fontFamily: "S-CoreDream-6Bold",
  },

  tabletCharacterScript: {
    gridColumn: "2/span 10",
    gridRow: "span 2",
  },

  tabletCharacterDetail: {
    gridColumn: "span 12",
    gridRow: "4/span 8",
  },

  tabletButtonGrid: {
    gridColumn: "2/ span 10",
    gridRow: "span 1",
  },
  //PcWide View
}));

export { useStyles };
