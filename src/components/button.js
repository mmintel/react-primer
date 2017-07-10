import PropTypes from 'prop-types';
import React from 'react';
import _ from 'lodash';
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
    Tag = props.href.length > 0 ? 'a' : 'button';
  }
  return (
    <Tag
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
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  before: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  after: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  size: PropTypes.number,
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
  size: 0,
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
  padding: 0,
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

const text = ({ before, after, size }) => {
  const s = size || 0;
  return {
    display: 'block',
    ...(before || after) && ({
      flex: 1,
    }),
    ...(s || s === 0) && ({
      paddingTop: `${ms(s)}rem`,
      paddingBottom: `${ms(s)}rem`,
      paddingLeft: `${ms((before || after) ? s : s * 2)}rem`,
      paddingRight: `${ms((before || after) ? s : s * 2)}rem`,
      fontSize: `${ms(_.clamp(s, -1, s))}rem`,
    })
  }
}

const beforeAndAfter = ({ size }) => {
  const s = size || 0;
  return {
    ...(s || s === 0) && ({
      paddingTop: `${ms(s)}rem`,
      paddingBottom: `${ms(s)}rem`,
      paddingLeft: `${ms(s / 2)}rem`,
      paddingRight: `${ms(s / 2)}rem`,
      fontSize: `${ms(_.clamp(s, -1, s))}rem`,
    }),
  };
};

const before = props => ({
  ...beforeAndAfter(props),
  ...props.beforeStyle,
});

const after = props => ({
  ...beforeAndAfter(props),
  ...props.afterStyle,
});

export default connect({
  button,
  text,
  before,
  after,
})(Button);
