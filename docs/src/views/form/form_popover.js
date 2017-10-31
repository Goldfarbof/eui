import React, {
  Component,
} from 'react';

import {
  EuiButton,
  EuiPopover,
  EuiForm,
  EuiRange,
  EuiFormRow,
  EuiSwitch,
  EuiFieldText,
} from '../../../../src/components';

function makeId() {
  return Math.random().toString(36).substr(2, 5);
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopoverOpen: false,
      isSwitchChecked: true,
    };
  }

  onSwitchChange = () => {
    this.setState({
      isSwitchChecked: !this.state.isSwitchChecked,
    });
  }

  onButtonClick = () => {
    this.setState({
      isPopoverOpen: !this.state.isPopoverOpen,
    });
  }

  closePopover = () => {
    this.setState({
      isPopoverOpen: false,
    });
  }

  render() {
    const button = (
      <EuiButton
        iconSide="right"
        fill
        iconType="arrowDown"
        onClick={this.onButtonClick}
      >
        Form in a popover
      </EuiButton>
    );

    const formSample = (
      <EuiForm>
        <EuiFormRow>
          <EuiSwitch
            id={makeId()}
            name="popswitch"
            label="Isn't this popover form cool?"
            checked={this.state.isSwitchChecked}
            onChange={this.onSwitchChange}
          />
        </EuiFormRow>

        <EuiFormRow
          id={makeId()}
          label="A text field"
        >
          <EuiFieldText name="popfirst" />
        </EuiFormRow>

        <EuiFormRow
          id={makeId()}
          label="Range"
          helpText="Some help text for the range"
        >
          <EuiRange
            min={0}
            max={100}
            name="poprange"
          />
        </EuiFormRow>
      </EuiForm>
    );

    return (
      <div>
        <EuiPopover
          ownFocus
          button={button}
          isOpen={this.state.isPopoverOpen}
          closePopover={this.closePopover.bind(this)}
        >
          <div style={{ width: '300px' }}>
            {formSample}
          </div>
        </EuiPopover>
      </div>
    );
  }
}
