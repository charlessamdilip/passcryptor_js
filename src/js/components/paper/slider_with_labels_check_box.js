import React from 'react';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/lab/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import style from '../../../style/slider.less';
import labelStyle from '../../../style/label.less';
import inputStyle from '../../../style/input.less';

class SliderWithLabelsAndCheckBox extends React.Component {
  constructor(props) {
    super(props);
    const radioOptions = this.props.radioOptions;
    this.state = {
      value: this.props.value,
      checked: false
    };
  };

  handleSliderValueChange = (event, value) => {
    this.setState({
      value: value
    });
  };

  handlerCheckBoxChange = (event, checked) => {
    this.setState({
      checked: checked,
    });
  };

  render() {
    const sliderLabel = this.props.label;
    const sliderMax = this.props.max;
    const sliderMin = this.props.min;
    const labelId = "__label_" + this.props.id;
    const labelDisaled = this.state.checked ? "": " disabled";
    return( <div>
          <div id={labelId} ><Checkbox classes={{root:'input_check'}} checked={this.state.checked} onChange={this.handlerCheckBoxChange}></Checkbox>
{sliderLabel}</div>
          <Slider classes={{root: 'slider_root', thumb: 'slider_button', trackBefore: 'slider_track_before', trackAfter: 'slider_track_after', disabled: 'slider_disabled'}} value={this.state.value} step={1} min={sliderMin} max={sliderMax} onChange={this.handleSliderValueChange} disabled={!this.state.checked}/>
          <Grid container className="slider_label_container">
            <Grid item xs={4} className={"slider_label text-left" + labelDisaled}>{sliderMin}</Grid>
            <Grid item xs={4} className={"slider_label text-center" + labelDisaled}>{this.state.value}</Grid>
            <Grid item xs={4} className={"slider_label text-right" + labelDisaled}>{sliderMax}</Grid>
          </Grid>
        </div>
    );
  }
}

export default SliderWithLabelsAndCheckBox;