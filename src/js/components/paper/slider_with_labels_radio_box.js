import React from 'react';

import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/lab/Slider';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import SliderWithLabel from  './slider_with_labels';
import style from '../../../style/slider.less';
import labelStyle from '../../../style/label.less';
import inputStyle from '../../../style/input.less';

class SliderWithLabelsAndRadioBox extends SliderWithLabel {
  constructor(props) {
    super(props);
    const radioOptions = this.props.radioOptions;
    this.state.radioValue = this.props.radioSelected ? this.props.radioSelected
          : ((radioOptions && Array.isArray(radioOptions) && radioOptions.length > 1)
          ? radioOptions[0] : null);
  };

  handleRadioValueChange = (event, radioValue) => {
    this.setState({
      radioValue: radioValue
    });
  };

  render() {
    const sliderLabel = this.props.label;
    const sliderMax = this.props.max;
    const sliderMin = this.props.min;
    const labelId = "__label_" + this.props.id;
    let radioBoxSet;
    const radioOptions = this.props.radioOptions;
    if (radioOptions && Array.isArray(radioOptions) && radioOptions.length > 1) {
      radioBoxSet =
          <RadioGroup className="input_radio_group with_label" value={this.state.radioValue} onChange={this.handleRadioValueChange}>
            {radioOptions.map((value) => {return <FormControlLabel classes={{root:'input_label'}} key={value.toString()} value={value}
                                                                   control={<Radio classes={{root:"input_radio"}}/>} label={value} />})}</RadioGroup>
    }

    return(<div>
          <div id={labelId} >{sliderLabel}{radioBoxSet}</div>
          <Slider classes={{root: 'slider_root', thumb: 'slider_button', trackBefore: 'slider_track_before', trackAfter: 'slider_track_after'}}
                  value={this.state.value} step={1} min={sliderMin} max={sliderMax} onChange={this.handleSliderValueChange} disabled={this.state.disabled}/>
          <Grid container className="slider_label_container">
            <Grid item xs={4} className="slider_label text-left">{sliderMin}</Grid>
            <Grid item xs={4} className="slider_label text-center">{this.state.value}</Grid>
            <Grid item xs={4} className="slider_label text-right">{sliderMax}</Grid>
          </Grid>
        </div>
    );
  }
}

export default SliderWithLabelsAndRadioBox;