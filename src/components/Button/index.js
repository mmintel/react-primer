import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import styles from './styles.scss';
import { themr } from 'react-css-themr';

const Button = ({
  component,
  className,
  children,
  ...props
}) => {
  const Component = component || (props.href ? 'a' : 'button');
  return (
    <Component
      className={classNames(styles.button, className)}
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

export default Button;
