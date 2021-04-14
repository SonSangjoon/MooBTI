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
    gridRow: "-2/ span 2",
  },

  imageGrid: {
    gridColumn: "2/span 10",
    gridRow: "2/span 9",
  },

  characterImage: {
    objectFit: "fill",
    width: "100%",
    maxHeight: "100%",
    borderRadius: '15px'
  },

  characterTitleGrid:{
    gridColumn: "span 12",
    gridRow: "11/ span 2",
  },

  characterTitle: {
    align: "center",
    marginTop: 15,
    // fontSize: "2vw",
    fontFamily: 'S-CoreDream-6Bold',
    fontSize: "19px",
  },
  charScriptFont: {
    fontSize: "13px",
  },

  characterScript: {
    gridColumn: "2/span 10",
    gridRow: "2/span 2",
  },

  characterDetail: {
    gridColumn: "span 12",
    gridRow: "4/ span 8",
  },

  characterDetailText:{
    fontSize: '16px'
  },

  dummyBtn: {
    minWidth: "100%",
  },
}));

export { useStyles }