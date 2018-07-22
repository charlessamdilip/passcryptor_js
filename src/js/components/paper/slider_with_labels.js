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

class SliderWithLabels extends React.Component {
  constructor(props) {
    super(props);
    const radioOptions = this.props.radioOptions;
    this.state = {
      value: this.props.value,
      radioValue: (radioOptions && Array.isArray(radioOptions) && radioOptions.length > 1) ? radioOptions[0] : null,
      disabled: null != this.props.disabled ? this.props.disabled : false
    };
  };

  handleSliderValueChange = (event, value) => {
    this.setState({
      value: value
    });
  };

  render() {
    const sliderLabel = this.props.label;
    const sliderMax = this.props.max;
    const sliderMin = this.props.min;
    const labelId = "__label_" + this.props.id;
    let checkBox;
    let radioBoxSet;
    const radioOptions = this.props.radioOptions;
    if (this.props.checkBox) {
      checkBox = <Checkbox classes={{root:'input_check'}}></Checkbox>
    }
    if (radioOptions && Array.isArray(radioOptions) && radioOptions.length > 1) {
      radioBoxSet = <RadioGroup className="input_radio_group with_label" value={this.state.radioValue}>{radioOptions.map((value) => {return <FormControlLabel key={value.toString()} value={value} control={<Radio className="input_check"/>} label={value} />})}</RadioGroup>
    }

    return( <div>
          <div id={labelId} >{checkBox}{sliderLabel}{radioBoxSet}</div>
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