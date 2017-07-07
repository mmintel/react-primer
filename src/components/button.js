import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import ms from 'modularscale';

const Button = ({
  component,
  styles,
  style,
  className,
  children,
  block,
  disabled,
  before,
  after,
  ...props
}) => {
  let Component = component;
  if (props.href) {
    Component = props.href.length > 0 ? 'a' : 'button';
  }
  return (
    <Component
      className={classnames(styles.button, className)}
      role={props.href && 'button'}
      {...props}
    >
      {before}
      {children}
      {after}
    </Component>
  );
};

Button.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'massive']),
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  component: 'button',
  size: 'medium',
};

const button = props => ({
  appearance: 'none',
  display: 'inline-block',
  boxSizing: 'border-box',
  background: 'none',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  textDecoration: 'inherit',
  fontFamily: 'inherit',
  textAlign: 'center',
  fontSize: 'inherit',
  color: 'inherit',
  cursor: 'pointer',
  userSelect: 'none',
  ...props.block && ({
    display: 'block',
    width: '100%',
  }),
  ...props.size === 'mini' && ({
    paddingTop: `${ms(-4)}rem`,
    paddingBottom: `${ms(-4)}rem`,
    paddingLeft: `${ms(-2)}rem`,
    paddingRight: `${ms(-2)}rem`,
    fontSize: `${ms(-1)}rem`,
  }),
  ...props.size === 'tiny' && ({
    paddingTop: `${ms(-3)}rem`,
    paddingBottom: `${ms(-3)}rem`,
    paddingLeft: `${ms(-1)}rem`,
    paddingRight: `${ms(-1)}rem`,
    fontSize: `${ms(-1)}rem`,
  }),
  ...props.size === 'small' && ({
    paddingTop: `${ms(-2)}rem`,
    paddingBottom: `${ms(-2)}rem`,
    paddingLeft: `${ms(0)}rem`,
    paddingRight: `${ms(0)}rem`,
    fontSize: `${ms(-1)}rem`,
  }),
  ...props.size === 'medium' && ({
    paddingTop: `${ms(-1)}rem`,
    paddingBottom: `${ms(-1)}rem`,
    paddingLeft: `${ms(1)}rem`,
    paddingRight: `${ms(1)}rem`,
    fontSize: `${ms(0)}rem`,
  }),
  ...props.size === 'large' && ({
    paddingTop: `${ms(0)}rem`,
    paddingBottom: `${ms(0)}rem`,
    paddingLeft: `${ms(2)}rem`,
    paddingRight: `${ms(2)}rem`,
    fontSize: `${ms(1)}rem`,
  }),
  ...props.size === 'big' && ({
    paddingTop: `${ms(1)}rem`,
    paddingBottom: `${ms(1)}rem`,
    paddingLeft: `${ms(3)}rem`,
    paddingRight: `${ms(3)}rem`,
    fontSize: `${ms(2)}rem`,
  }),
  ...props.size === 'massive' && ({
    paddingTop: `${ms(2)}rem`,
    paddingBottom: `${ms(2)}rem`,
    paddingLeft: `${ms(4)}rem`,
    paddingRight: `${ms(4)}rem`,
    fontSize: `${ms(3)}rem`,
  }),
  ...props.disabled && ({
    cursor: 'not-allowed',
  }),
  ...!props.disabled && ({
    '&:hover': {
      background: '#EEE',
    },
    '&:focus': {
      outline: 'none',
    },
  }),
  ...props.style,
});

export default connect({
  button,
})(Button);
