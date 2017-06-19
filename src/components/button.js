import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { themr } from 'react-css-themr';

const Button = ({
  component,
  styles,
  className,
  children,
  ...props
}) => {
  const Component = component || (props.href ? 'a' : 'button');
  return (
    <Component
      className={classnames(styles.button, className)}
      role={props.href && 'button'}
      {...props}
    >
      {children}
    </Component>
  );
};

Button.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  component: 'button',
  size: 'medium',
};

const button = props => ({
  appearance: 'none',
  background: 'none',
  border: 'none',
  display: 'inline-block',
  fontSize: 'inherit',
  color: 'inherit',
});

export default connect({
  button,
})(Button);
