import React from 'react';

import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/lab/Slider';

import {isValidSlideMovement} from "../../utils/appUtil";
import {setValue} from "../../utils/localStorageHandler";

import style from '../../../style/slider.less';
import labelStyle from '../../../style/label.less';
import inputStyle from '../../../style/input.less';


class SliderWithLabels extends React.Component {
  constructor(props) {
    super(props);
    const radioOptions = this.props.radioOptions;
    this.state = {
      value: this.props.value,
      disabled: null != this.props.disabled ? this.props.disabled : false
    };
  };

  handleSliderValueChange = (event, value) => {
    if (!isValidSlideMovement(this.props.name, value, true)) {
      this.props.sliderInconsistencyHandler();
      return;
    }

    this.setState({
      value: value
    });

    setValue(this.props.name + "Length", value);
    this.props.generatePasswordHandler(event, value);
  };

  render() {
    const sliderLabel = this.props.label;
    const sliderMax = this.props.max;
    const sliderMin = this.props.min;
    const labelId = "__label_" + this.props.id;

    return( <div>
          <div id={labelId} >{sliderLabel}</div>
          <Slider classes={{root: 'slider_root', thumb: 'slider_button', trackBefore: 'slider_track_before', trackAfter: 'slider_track_after'}} value={this.state.value} step={1} min={sliderMin} max={sliderMax} onChange={this.handleSliderValueChange} disabled={this.state.disabled}/>
          <Grid container className="slider_label_container">
            <Grid item xs={4} className="slider_label text-left">{sliderMin}</Grid>
            <Grid item xs={4} className="slider_label text-center">{this.state.value}</Grid>
            <Grid item xs={4} className="slider_label text-right">{sliderMax}</Grid>
          </Grid>
        </div>
    );
  }
}

export default SliderWithLabels;