import React from 'react';
import Grid from '@material-ui/core/Grid';

import AppPaper from '../paper.js'

class AppLayout extends React.Component {
  render() {
    return(
        <Grid container alignItems="center" justify="center">
            <AppPaper></AppPaper>
        </Grid>
    );
  }
}

export default AppLayout;