import React from 'react';
import Grid from '@material-ui/core/Grid';

import style from '../../../style/header.less';

class HeaderLayout extends React.Component {
  render() {
    return(
        <Grid item xs={12} className="header_grid">
          <span>Pass</span><span className="base_brand">cryptor</span>
        </Grid>
    );
  }
}

export default HeaderLayout;