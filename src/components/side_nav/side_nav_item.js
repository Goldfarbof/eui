import {
  Children,
  cloneElement,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const EuiSideNavItem = ({ children, indent, isSelected }) => {
  const child = Children.only(children);

  const classes = classNames(
    child.props.className,
    'kuiSideNavItem',
    {
      'kuiSideNavItem-isSelected': isSelected,
      'kuiSideNavItem--indent': indent,
    }
  );

  return cloneElement(child, Object.assign({}, child.props, {
    className: classes,
  }));
};

EuiSideNavItem.propTypes = {
  isSelected: PropTypes.bool,
  indent: PropTypes.bool,
};
