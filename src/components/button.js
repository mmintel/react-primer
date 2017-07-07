import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import ms from 'modularscale';

const Button = ({
  component,
  styles,
  style,
  textStyle,
  beforeStyle,
  afterStyle,
  size,
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
      {before &&
        <span className={styles.before}>
          {before}
        </span>
      }
      <span className={styles.text}>
        {children}
      </span>
      {after &&
        <span className={styles.after}>
          {after}
        </span>
      }
    </Component>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  before: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  after: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  size: PropTypes.oneOf(['mini', 'tiny', 'small', 'medium', 'large', 'big', 'massive']),
  className: PropTypes.string,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  beforeStyle: PropTypes.object,
  afterStyle: PropTypes.object,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  component: 'button',
  size: 'medium',
};

const button = ({block, before, after, disabled, style}) => ({
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
  ...block && ({
    display: before || after ? 'flex' : 'block',
    width: '100%',
  }),
  ...(before || after) && ({
    display: 'flex',
    alignItems: 'center',
  }),
  ...disabled && ({
    cursor: 'not-allowed',
  }),
  ...!disabled && ({
    '&:hover': {
      background: '#EEE',
    },
    '&:focus': {
      outline: 'none',
    },
  }),
  ...style,
});

const text = ({before, after, size}) => ({
  display: 'block',
  ...(before || after) && ({
    flex: 1,
  }),
  ...size === 'mini' && ({
    paddingTop: `${ms(-4)}rem`,
    paddingBottom: `${ms(-4)}rem`,
    paddingLeft: `${ms((before || after) ? -4 : -2 )}rem`,
    paddingRight: `${ms((before || after) ? -4 : -2 )}rem`,
    fontSize: `${ms(-1)}rem`,
  }),
  ...size === 'tiny' && ({
    paddingTop: `${ms(-3)}rem`,
    paddingBottom: `${ms(-3)}rem`,
    paddingLeft: `${ms((before || after) ? -3 : -1)}rem`,
    paddingRight: `${ms((before || after) ? -3 : -1)}rem`,
    fontSize: `${ms(-1)}rem`,
  }),
  ...size === 'small' && ({
    paddingTop: `${ms(-2)}rem`,
    paddingBottom: `${ms(-2)}rem`,
    paddingLeft: `${ms((before || after) ? -2 : 0)}rem`,
    paddingRight: `${ms((before || after) ? -2 : 0)}rem`,
    fontSize: `${ms(-1)}rem`,
  }),
  ...(!size || size === 'medium') && ({
    paddingTop: `${ms(-1)}rem`,
    paddingBottom: `${ms(-1)}rem`,
    paddingLeft: `${ms((before || after) ? -1 : 1)}rem`,
    paddingRight: `${ms((before || after) ? -1 : 1)}rem`,
    fontSize: `${ms(0)}rem`,
  }),
  ...size === 'large' && ({
    paddingTop: `${ms(0)}rem`,
    paddingBottom: `${ms(0)}rem`,
    paddingLeft: `${ms((before || after) ? 0 : 2)}rem`,
    paddingRight: `${ms((before || after) ? 0 : 2)}rem`,
    fontSize: `${ms(1)}rem`,
  }),
  ...size === 'big' && ({
    paddingTop: `${ms(1)}rem`,
    paddingBottom: `${ms(1)}rem`,
    paddingLeft: `${ms((before || after) ? 1 : 3)}rem`,
    paddingRight: `${ms((before || after) ? 1 : 3)}rem`,
    fontSize: `${ms(2)}rem`,
  }),
  ...size === 'massive' && ({
    paddingTop: `${ms(2)}rem`,
    paddingBottom: `${ms(2)}rem`,
    paddingLeft: `${ms(4)}rem`,
    paddingRight: `${ms(4)}rem`,
    fontSize: `${ms(3)}rem`,
  }),
});

const beforeAndAfter = props => ({
  
});

const before = props => ({
  ...props.beforeStyle,
});

const after = props => ({
  ...props.afterStyle,
});

export default connect({
  button,
  text,
  before,
  after,
})(Button);
