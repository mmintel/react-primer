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
  const CustomComponent = component || (props.href ? 'a' : 'button');
  const componentClass = classNames(styles.button, className);
  return (
    <CustomComponent
      className={componentClass}
      role={props.href && 'button'}
      {...props}
    >
      {children}
    </CustomComponent>
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
