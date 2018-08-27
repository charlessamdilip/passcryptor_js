import React from 'react';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

import SliderWithLabel from  './slider_with_labels';
import Slider from '@material-ui/lab/Slider';
import style from '../../../style/slider.less';
import labelStyle from '../../../style/label.less';
import inputStyle from '../../../style/input.less';
import {isValidSlideMovement} from "../../utils/appUtil";
import {setValue} from "../../utils/localStorageHandler";

class SliderWithLabelsAndCheckBox extends SliderWithLabel {
  constructor(props) {
    super(props);
    const radioOptions = this.props.radioOptions;
    this.state.checked = !this.props.disabled;
  };

  handlerCheckBoxChange = (event, checked) => {
    if (checked && !isValidSlideMovement(this.props.name, this.state.value, checked)) {
      this.props.sliderInconsistencyHandler();
      return;
    }
    this.setState({
      checked: checked,
    });
    setValue(this.props.name + "Selected", checked);
    this.props.generatePasswordHandler(event, this.state.value);
  };

  handleSliderValueChange = (event, value) => {
    if (this.state.checked && !isValidSlideMovement(this.props.name, value, this.state.checked)) {
      this.props.sliderInconsistencyHandler();
      return;
    }

    this.setState({
      value: value
    });

    setValue(this.props.name + "Length", value);
    if (this.state.checked) {
      this.props.generatePasswordHandler(event, value);
    }
  };

  render() {
    const sliderLabel = this.props.label;
    const sliderMax = this.props.max;
    const sliderMin = this.props.min;
    const labelId = "__label_" + this.props.id;
    const labelDisaled = this.state.checked ? "" : " disabled";
    let classObj;
    if (this.state.checked) {
      classObj = {
        root: 'slider_root',
        thumb: 'slider_button',
        trackBefore: 'slider_track_before'
      }
    } else {
      classObj = {
        root: 'slider_root_disabled',
        thumb: 'slider_button_disabled',
        trackBefore: 'slider_track_before_disabled'
      }
    }
    classObj.trackAfter = 'slider_track_after';
    classObj.disabled = 'slider_disabled';
    return( <div>
          <div id={labelId} ><Checkbox classes={{root:'input_check'}} checked={this.state.checked} onChange={this.handlerCheckBoxChange}></Checkbox>
{sliderLabel}</div>
          <Slider classes={classObj} value={this.state.value} step={1} min={sliderMin} max={sliderMax} onChange={this.handleSliderValueChange} />
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