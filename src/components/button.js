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
  design,
  size,
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
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  size: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.func,
  theme: PropTypes.object,
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
    fontSize: 'inherit',
    textAlign: 'center',
    fontSize: 'inherit',
    color: 'inherit',
    cursor: 'pointer',
    userSelect: 'none',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
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
    ...props.design.button && props.design.button(props),
  }
};

const text = props => ({
  display: 'block',
  ...(props.before || props.after) && ({
    flexGrow: 1,
  }),
  ...(props.before && props.after) && ({
    flexGrow: 0,
  }),
  ...(props.size || props.size === 0) && ({

  }),
  ...props.design.text && props.design.text(props),
})

const beforeAndAfter = ({ size }) => {
  const s = size || 0;
  return {
    ...(s || s === 0) && ({

    }),
  };
};

const before = props => ({
  ...beforeAndAfter(props),
  ...props.design.before && props.design.before(props),
});

const after = props => ({
  ...beforeAndAfter(props),
  ...props.design.after && props.design.after(props),
});

export default connect({
  button,
  text,
  before,
  after,
})(Button);
