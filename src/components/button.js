import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { combineRules } from 'fela';
import ms from 'modularscale-js';

const Button = ({
  tag,
  styles,
  style,
  textStyle,
  beforeStyle,
  afterStyle,
  size,
  calculateSize = n => ms(n),
  className,
  children,
  block,
  before,
  after,
  ...props
}) => {
  let Tag = tag;
  if (props.href) {
    Tag = props.href.length > 0 ? 'a' : 'button';
  }
  return (
    <Tag
      className={classnames(styles.button)}
      style={{ fontSize: calculateSize(size) }}
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
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.func,
  textStyle: PropTypes.object,
  beforeStyle: PropTypes.object,
  afterStyle: PropTypes.object,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  tag: 'button',
  size: 0,
};

const button = props => {
  console.log(props)
  return {
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
    '&:focus': {
      outline: 'none',
    },
    ...(props.before || props.after) && ({
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    ...props.block && ({
      display: props.before || props.after ? 'flex' : 'block',
      width: '100%',
    }),
    '[disabled]': ({
      cursor: 'not-allowed',
      backgroundColor: '#EEE',
      '&:hover': {
        backgroundColor: '#EEE',
      },
    }),
    ...props.style && props.style(props),
  }
};

const text = ({ before, after, size }) => {
  const s = size || 0;
  return {
    display: 'block',
    ...(before || after) && ({
      flexGrow: 1,
    }),
    ...(before && after) && ({
      flexGrow: 0,
    }),
    ...(s || s === 0) && ({

    })
  }
}

const beforeAndAfter = ({ size }) => {
  const s = size || 0;
  return {
    ...(s || s === 0) && ({

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
