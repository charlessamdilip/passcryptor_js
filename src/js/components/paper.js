import React from 'react';
import Paper from '@material-ui/core/Paper';

import SliderWithLabels from './paper/slider_with_labels';
import SliderWithLabelsAndRadioBox from './paper/slider_with_labels_radio_box';
import SliderWithLabelsAndCheckBox from './paper/slider_with_labels_check_box';
import TypographyWithAction from './paper/typograpthy_with_action';

import {
  checkConfExists,
  setState,
  getState,
  setValue
} from '../utils/localStorageHandler';
import {generatePassword} from '../utils/appUtil';

import style from '../../style/paper.less';

class AppPaper extends React.Component {
  constructor() {
    super();
    let currentState;
    if (!checkConfExists()) {
      currentState = this.getDefaultAppState();
      setState(currentState);
    } else {
      currentState = getState();
    }
    this.state = {
      password: generatePassword(currentState),
      currentState: currentState
    };
  }

  getDefaultAppState() {
    return {
      minPassLength: 4,
      maxPassLength: 126,
      passLength: 8,
      minAlphaLength: 1,
      maxAlphaLength: 126,
      alphaLength: 8,
      minNumberLength: 1,
      maxNumberLength: 126,
      numberLength: 1,
      minSpecialCharLength: 1,
      maxSpecialCharLength: 126,
      specialCharLength: 1,
      numberSelected: false,
      specialCharSelected: false,
      alphaType: "any"
    };
  }

  getRadioOptions() {
    return [
        "any", "small", "caps", "require small", "require caps", "all"
    ];
  }

  updatePassword = (password) => {
    this.setState({
      password: password
    });
  }

  generatePasswordHandler = (event, value) => {
    this.updatePassword(generatePassword());
  }

  render() {
    const currentState = this.state.currentState;
    return (
        <Paper className="paper">
          <TypographyWithAction password={this.state.password} generatePasswordHandler={this.generatePasswordHandler}></TypographyWithAction>
          <SliderWithLabels name="pass" label="Length:" id="passlength" value={currentState.passLength} min={currentState.minPassLength} max={currentState.maxPassLength} generatePasswordHandler={this.generatePasswordHandler} sliderInconsistencyHandler={this.props.sliderInconsistencyHandler}/>
          <SliderWithLabelsAndRadioBox name="alpha" label="Alpha:" id="minalpha" radioOptions={this.getRadioOptions()} radioSelected={currentState.alphaType} value={currentState.alphaLength} min={currentState.minAlphaLength} max={currentState.maxAlphaLength} generatePasswordHandler={this.generatePasswordHandler} sliderInconsistencyHandler={this.props.sliderInconsistencyHandler}/>
          <SliderWithLabelsAndCheckBox name="number" label="Numberals:" id="minnumeric" checkBox={true} value={currentState.numberLength} min={currentState.minNumberLength} max={currentState.maxNumberLength} disabled={!currentState.numberSelected} generatePasswordHandler={this.generatePasswordHandler} sliderInconsistencyHandler={this.props.sliderInconsistencyHandler}/>
          <SliderWithLabelsAndCheckBox name="specialChar" label="SpecialCharacters:" id="minspecial" checkBox={true} value={currentState.specialCharLength} min={currentState.minSpecialCharLength} max={currentState.maxSpecialCharLength} disabled={!currentState.specialCharSelected} generatePasswordHandler={this.generatePasswordHandler} sliderInconsistencyHandler={this.props.sliderInconsistencyHandler}/>
        </Paper>
    )
  }
}

export default AppPaper;