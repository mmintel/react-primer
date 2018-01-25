import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Button = ({
  tag,
  styles,
  overrides,
  size,
  className,
  children,
  block,
  before,
  after,
  href,
  ...props
}) => {
  const Tag = tag || href.length > 0 ? 'a' : 'button';
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
      { children &&
        <span >
          {children}
        </span>
      }
      {after &&
        <span >
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
  href: PropTypes.string,
  styles: PropTypes.shape({
    button: PropTypes.string,
    text: PropTypes.string,
    before: PropTypes.string,
    after: PropTypes.string,
  }).isRequired,
  overrides: PropTypes.shape({
    button: PropTypes.func,
    text: PropTypes.func,
    before: PropTypes.func,
    after: PropTypes.func,
  }),
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: undefined,
  before: undefined,
  after: undefined,
  className: undefined,
  href: undefined,
  tag: 'button',
  size: 0,
  block: false,
  disabled: false,
  overrides: {},
};

const button = props => ({
  background: props.theme.color.gray.light.string(),
  paddingTop: props.theme.calculateSpacing(1),
  paddingRight: props.theme.calculateSpacing(1),
  paddingBottom: props.theme.calculateSpacing(1),
  paddingLeft: props.theme.calculateSpacing(1),
  borderColor: props.theme.color.gray.medium.string(),
  borderRadius: props.theme.radius,
  appearance: 'none',
  display: 'inline-block',
  boxSizing: 'border-box',
  borderWidth: '1px',
  borderStyle: 'solid',
  textDecoration: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  textAlign: 'center',
  color: 'inherit',
  cursor: 'pointer',
  userSelect: 'none',
  ':focus': {
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
  '[disabled]': {
    cursor: 'not-allowed',
    backgroundColor: '#EEE',
    '&:hover': {
      backgroundColor: '#EEE',
    },
  },
  ...props.overrides.button && props.overrides.button(props),
})

const text = props => ({
  display: 'block',
  ...(props.before || props.after) && ({
    flexGrow: 1,
  }),
  ...(props.before && props.after) && ({
    flexGrow: 0,
  }),
  ...props.overrides.text && props.overrides.text(props),
});

const beforeAndAfter = ({ size }) => {
  const s = size || 0;
  return {
    ...(s || s === 0) && ({

    }),
  };
};

const before = props => ({
  ...beforeAndAfter(props),
  ...props.overrides.before && props.overrides.before(props),
});

const after = props => ({
  ...beforeAndAfter(props),
  ...props.overrides.after && props.overrides.after(props),
});

export default connect({
  button,
  text,
  before,
  after,
})(Button);
