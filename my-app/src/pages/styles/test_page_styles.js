import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: 'black'
    },
  
    container: {
      height: '100vh',
    
      display: 'grid',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridTemplateColumns: 'repeat(12, 1fr)',
    },

    // emptyRow: {
    //     gridColumn : 'span 12',
    //     gridRow : 'span 1',
    // },

    // emptyGrid: {
    //     gridRow : 'span 10',
    //     gridColumn : 'span 2'
    // },

    testGrid:{
        gridColumn : '3/span 8',
        gridRow : '3/span 9',
    },

    //Mobile View

    mobileContainer : {
        height: '100vh',
        
        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridGap: theme.spacing(1),
    },
    mobileTestGrid : {
        gridRow : '2/span 10'
    },

    
    //Tablet View
    tabletTestGrid:{
        gridColumn : '2/span 10',
        gridRow : '3/span 9',
    },




    //PcWide View


}))

export { useStyles }