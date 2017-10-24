import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  EuiFormControlLayout,
} from '../form_control_layout';

import {
  EuiValidatableControl,
} from '../validatable_control';

export const EuiFieldText = ({
  id,
  name,
  placeholder,
  value,
  className,
  icon,
  isInvalid,
  inputRef,
  fullWidth,
  ...rest,
}) => {
  const classes = classNames('euiFieldText', className, {
    'euiFieldText--withIcon': icon,
    'euiFieldText--fullWidth': fullWidth,
  });

  return (
    <EuiFormControlLayout
      icon={icon}
      fullWidth={fullWidth}
    >
      <EuiValidatableControl
        isInvalid={isInvalid}
      >
        <input
          type="text"
          id={id}
          name={name}
          placeholder={placeholder}
          className={classes}
          value={value}
          ref={inputRef}
          {...rest}
        />
      </EuiValidatableControl>
    </EuiFormControlLayout>
  );
};

EuiFieldText.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  isInvalid: PropTypes.bool,
  inputRef: PropTypes.func,
  fullWidth: PropTypes.bool,
};

EuiFieldText.defaultProps = {
  value: undefined,
  fullWidth: false,
};
