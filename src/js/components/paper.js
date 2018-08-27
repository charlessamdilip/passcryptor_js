import React from 'react';
import Paper from '@material-ui/core/Paper';

import SliderWithLabels from './paper/slider_with_labels';
import SliderWithLabelsAndRadioBox from './paper/slider_with_labels_radio_box';
import SliderWithLabelsAndCheckBox from './paper/slider_with_labels_check_box';
import TypographyWithAction from './paper/typograpthy_with_action';

import {checkConfExists, setState, getState} from "../utils/localStorageHandler";

import style from '../../style/paper.less';

class AppPaper extends React.Component {
  constructor() {
    super();
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

  render() {
    let currentState;
    if (!checkConfExists()) {
      currentState = this.getDefaultAppState();
      setState(currentState);
    } else {
      currentState = getState();
    }
    return (
        <Paper className="paper">
          <TypographyWithAction></TypographyWithAction>
          <SliderWithLabels label="Length:" id="passlength" value={currentState.passLength} min={currentState.minPassLength} max={currentState.maxPassLength}/>
          <SliderWithLabelsAndRadioBox label="Alpha:" id="minalpha" radioOptions={this.getRadioOptions()} value={currentState.alphaLength} min={currentState.minAlphaLength} max={currentState.maxAlphaLength}/>
          <SliderWithLabelsAndCheckBox label="Numberals:" id="minnumeric" checkBox={true} value={currentState.numberLength} min={currentState.minNumberLength} max={currentState.maxNumberLength} disabled={!currentState.numberSelected}/>
          <SliderWithLabelsAndCheckBox label="SpecialCharacters:" id="minspecial" checkBox={true} value={currentState.specialCharLength} min={currentState.minSpecialCharLength} max={currentState.maxSpecialCharLength} disabled={!currentState.specialCharSelected}/>
        </Paper>
    )
  }
}

export default AppPaper;