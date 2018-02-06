import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
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
  prepend,
  append,
  href,
  ...props
}) => {
  const Tag = tag || href.length > 0 ? 'a' : 'button';
  return (
    <Tag
      className={cn(styles.root, className)}
      role={props.href && 'button'}
      href={href}
      {...props}
    >
      {prepend &&
        <span className={cn(styles.affix, styles.prepend)}>
          {prepend}
        </span>
      }
      { children &&
        <span className={styles.text}>
          {children}
        </span>
      }
      {append &&
        <span className={cn(styles.affix, styles.append)}>
          {append}
        </span>
      }
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  prepend: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  size: PropTypes.number,
  className: PropTypes.string,
  href: PropTypes.string,
  styles: PropTypes.shape({
    root: PropTypes.string,
    text: PropTypes.string,
    prepend: PropTypes.string,
    append: PropTypes.string,
  }).isRequired,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  children: undefined,
  prepend: undefined,
  append: undefined,
  className: undefined,
  href: undefined,
  tag: 'button',
  size: 0,
  block: false,
  disabled: false,
};

const rules = props => ({
  root: {
    backgroundColor: props.theme.color.gray.light.string(),
    borderColor: props.theme.color.gray.medium.string(),
    borderRadius: props.theme.radius,
    borderWidth: props.theme.border.width,
    fontSize: props.theme.calculateSize(props.size),
    appearance: 'none',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    borderStyle: 'solid',
    textTransform: 'uppercase',
    textDecoration: 'inherit',
    fontFamily: 'inherit',
    textAlign: 'center',
    color: 'inherit',
    cursor: 'pointer',
    userSelect: 'none',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: props.theme.color.gray.medium.string(),
    },
    '&:focus': {
      backgroundColor: props.theme.color.gray.medium.string(),
      outline: 'none',
    },
    ...props.block && ({
      display: 'flex',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'inherit',
    lineHeight: 1,
    paddingTop: props.theme.calculateSpacing(props.size / 2),
    paddingRight: props.theme.calculateSpacing(props.size / 2),
    paddingBottom: props.theme.calculateSpacing(props.size),
    paddingLeft: props.theme.calculateSpacing(props.size),
    ...(props.prepend || props.append) && ({
      flexGrow: 1,
    }),
    ...(props.prepend && props.append) && ({
      flexGrow: 0,
    }),
  },
  affix: {
    fontSize: 'inherit',
    paddingTop: props.theme.calculateSpacing(props.size),
    paddingRight: props.theme.calculateSpacing(props.size),
    paddingBottom: props.theme.calculateSpacing(props.size),
    paddingLeft: props.theme.calculateSpacing(props.size),
  },
  prepend: {
  },
  append: {
  },
});

export default withMargins(connect(rules)(Button));
