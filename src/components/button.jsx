import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Button = ({
  tag,
  styles,
  rules,
  margin,
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
      className={classnames(styles.root, className)}
      role={props.href && 'button'}
      href={href}
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
    root: PropTypes.string,
    text: PropTypes.string,
    before: PropTypes.string,
    after: PropTypes.string,
  }).isRequired,
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
  size: -2,
  block: false,
  disabled: false,
};

const rules = props => ({
  root: {
    backgroundColor: props.theme.color.gray.light.string(),
    paddingTop: props.theme.calculateSpacing(props.size),
    paddingRight: props.theme.calculateSpacing(props.size),
    paddingBottom: props.theme.calculateSpacing(props.size),
    paddingLeft: props.theme.calculateSpacing(props.size),
    borderColor: props.theme.color.gray.medium.string(),
    borderRadius: props.theme.radius,
    borderWidth: props.theme.border.width,
    fontSize: props.theme.calculateSize(props.size),
    appearance: 'none',
    display: 'inline-block',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    textTransform: 'uppercase',
    textDecoration: 'inherit',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: 'inherit',
    cursor: 'pointer',
    userSelect: 'none',
    ':hover': {
      backgroundColor: props.theme.color.gray.medium.string(),
    },
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
      backgroundColor: props.theme.color.gray.light.alpha(0.5).string(),
      '&:hover': {
        backgroundColor: props.theme.color.gray.light.alpha(0.5).string(),
      },
    },
  },
  text: {
    display: 'block',
    ...(props.before || props.after) && ({
      flexGrow: 1,
    }),
    ...(props.before && props.after) && ({
      flexGrow: 0,
    }),
  },
});

export default withMargins(connect(rules)(Button));
