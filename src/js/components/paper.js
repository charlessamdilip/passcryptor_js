import React from 'react';
import Paper from '@material-ui/core/Paper';

import SliderWithLabels from './paper/slider_with_labels';
import SliderWithLabelsAndRadioBox from './paper/slider_with_labels_radio_box';
import SliderWithLabelsAndCheckBox from './paper/slider_with_labels_check_box';
import TypographyWithAction from './paper/typograpthy_with_action';

import style from '../../style/paper.less';

class AppPaper extends React.Component {
  render() {
    return (
        <Paper className="paper">
          <TypographyWithAction></TypographyWithAction>
          <SliderWithLabels label="Length:" id="passlength" value={8} min={4} max={126}/>
          <SliderWithLabelsAndRadioBox label="Alphabets:" id="minalpha" radioOptions={["any", "small", "caps"]} value={8} min={4} max={126}/>
          <SliderWithLabelsAndCheckBox label="Numberals:" id="minnumeric" checkBox={true} value={8} min={4} max={126} disabled={true}/>
          <SliderWithLabelsAndCheckBox label="SpecialCharacters:" id="minspecial" checkBox={true} value={8} min={4} max={126} disabled={true}/>
        </Paper>
    )
  }
}

export default AppPaper;