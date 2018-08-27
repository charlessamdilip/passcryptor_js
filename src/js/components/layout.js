
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

import AppLayout from './layout/app_layout';
import HeaderLayout from './layout/header_layout';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  showSliderInconsistencyMessage = () => {
    this.setState({
      open: true
    });
  }

  handleClose = (event, value) => {
    this.setState({
      open: false
    });
  }

  render() {
    return (
        <Grid container>
          <HeaderLayout/>
          <AppLayout sliderInconsistencyHandler={this.showSliderInconsistencyMessage}/>
          <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={this.state.open}
              autoHideDuration={600}
              onClose={this.handleClose}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">Slider Consistency Issue</span>}
          />
        </Grid>
    );
  }
}

export default Layout;