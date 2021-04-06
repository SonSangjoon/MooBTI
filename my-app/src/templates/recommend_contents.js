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

    recommendContainer:{
        gridColumn : 'span 12',
        gridRow : 'span 4',
        color: 'white',

        display: 'grid',
        gridTemplateRows: 'repeat(12, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)'
    },

    recommendText:{
        gridColumn : 'span 12',
        gridRow : 'span 3',
        color: 'white',
    },

}))

export default function RecommendContentsTemplate({mbtiType, genderType}) {
    const classes = useStyles();
    return (
        <Grid className={classes.container}>
            <Grid className={classes.recommendContainer} item>
                <Grid className={classes.recommendText} item>
                    {mbtiType}
                </Grid>
            </Grid>
            <Grid className={classes.recommendContainer} item>
                <Grid className={classes.recommendText} item>
                    {genderType}
                </Grid>
            </Grid>
            <Grid className={classes.recommendContainer} item>
                <Grid className={classes.recommendText} item>
                    {mbtiType}
                </Grid>
            </Grid>
        </Grid>
    )
}