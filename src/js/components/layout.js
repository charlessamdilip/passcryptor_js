import React from 'react';
import Grid from '@material-ui/core/Grid';

import AppLayout from './layout/app_layout';
import HeaderLayout from './layout/header_layout';

class Layout extends React.Component {
  render() {
    return (
        <Grid container>
          <HeaderLayout/>
          <AppLayout/>
        </Grid>
    );
  }
}

export default Layout;