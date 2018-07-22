import React from 'react';

import {CopyToClipboard} from 'react-copy-to-clipboard';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import ToolTip from '@material-ui/core/Tooltip';
import AutoRenew from '@material-ui/icons/Autorenew';
import ContentCopy from '@material-ui/icons/ContentCopy';

import labelStyle from '../../../style/input.less';


class TypographyWithAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "Test@akdfdkjlas"
    };
  }

  render() {
    return (<div className="typography_continer">
          <ToolTip title={this.state.password}>
            <Input id="password_field" className="input_text" disabled={true} value={this.state.password}/>
          </ToolTip>
          <ToolTip title="Refresh">
            <Button className="input_button" variant="outlined"><AutoRenew/></Button>
          </ToolTip>
          <ToolTip title="Copy to clipboard">
            <CopyToClipboard text={this.state.password}>
              <Button className="input_button" variant="outlined"><ContentCopy/></Button>
            </CopyToClipboard>
          </ToolTip>
        </div>
    );
  }
}

export default TypographyWithAction;