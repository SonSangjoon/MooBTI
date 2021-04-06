import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    container: {
      height: '100%',
  
      display: 'grid',
      gridTemplateRows: 'repeat(12, 1fr)',
      gridTemplateColumns: 'repeat(12, 1fr)',
    },


    result:{
        gridColumn : 'span 12',
        gridRow : 'span 6',
        color: 'white',

        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)'
    },

    resultSpecific:{
        gridColumn : 'span 12',
        gridRow : 'span 6',
        color: 'white',

        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)'
    },


}))

export default function ResultTemplate({mbtiType, genderType}) {
    const classes = useStyles();
    return (
        <Grid className={classes.container}>
            <Grid className={classes.result} item>
                {mbtiType}
            </Grid>
            <Grid className={classes.resultSpecific} item>
                {genderType}
            </Grid>
        </Grid>
    )
}