import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "black",
  },

  container: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridGap: theme.spacing(2),
  },

  emptyRowGrid: {
    gridRow: "span 2",
  },
  emptyColumnGrid: {
    gridColumn: "span 2",
  },

  title: {
    paddingBottom: "1vh",
    fontSize: "28px",
    color: "white",
  },

  imgTitle: {
    fontSize: 20,
    color: "white",
  },

  gender_img: {
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "white",
      borderRadius: "10px",
    },
    padding: "4px 4px",
    marginBottom: "10px",
  },

  image: {
    borderRadius: "10px",
  },

//Mobile View

 mobileContainer: {
  height: "100vh",
  display: "grid",
  gridTemplateRows: "repeat(3, 1fr)",
  gridGap: theme.spacing(1),
},

mobileGrid:{
gridRow: '2/span 1'
},

mobiletitle: {
paddingBottom: '1vh',
fontSize: '20px',
color: 'white',
},

mobileImageTitle: {
fontSize: 17,
color:'white'
},


  //Tablet View

  tabletRoot: {
    height: "100vh",
    backgroundColor: "black",
  },

  tabletContainer: {
    height: "100vh",
    display: "grid",
    gridTemplateRows: "repeat(3, 1fr)",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridGap: theme.spacing(2),
  },

  // tabletEmptyRowGrid: {
  //   gridRow: "span 2",
  // },
  // tabletEmptyColumnGrid: {
  //   gridColumn: "span 2",
  // },

  tabletGenderPageGrid:{
    gridColumn: "2",
    gridRow: "2"
  },

  // image: { 
  //   borderRadius:'10px',
  // },

// tabletTitle:{
//     fontSize: "2.7vw",
//     color: "white",

//   },

//PcWide View

}));

export { useStyles }