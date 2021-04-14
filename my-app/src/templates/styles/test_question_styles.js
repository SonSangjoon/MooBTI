import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    testContainer: {
        height: "100%",
        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)',
    },

    emptyRow: {
        gridColumn : 'span 12',
        gridRow : 'span 1',
    },

    questionText: {
        color: 'white',
        fontSize: '2vmax',
        paddingTop: 20
    },

    imageGrid:{
        gridColumn : 'span 12',
        gridRow : 'span 6',
    },

    image:{
        objectFit: 'cover',
        width: '100%',
        height: '40vh',
        borderRadius: "10px"
    },

    answerGrid:{
        gridColumn : 'span 12',
        gridRow : 'span 2',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
    },

    emptyBox:{
        width: '100%',
        height: "60vh",
        
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    loadingText:{
        color: 'white',
        fontSize: '2vmax',
        padding: 20
    },

    // Mobile View

    mobileTestContainer: {
        height: "100%",
        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
    },

    mobileImage:{
        objectFit: 'cover',
        width: '100%',
        height: '28vh',
        borderRadius: "10px"
    },

    mobileImageGrid:{
        gridRow : 'span 5',
        margin: '10px'
    },

    mobileQuestionRow:{
        gridRow : '7/span 2',
        paddingTop: '10px'
    },
    
    mobileQuestionText:{
        color: 'white',
        fontSize: '4vw',
    },

    mobileAnswerGrid1:{
        gridRow : '9/span 2',
    },    

    mobileAnswerGrid2:{
        gridRow : '11/span 2',
    },

    mobileBtnWrapper:{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%'
    },

     //Tablet View
     tabletImage:{
        objectFit: 'cover',
        width: '100%',
        height: '53vh',
        borderRadius: "10px"
    },

    //PcWide View
    
}));

export { useStyles }