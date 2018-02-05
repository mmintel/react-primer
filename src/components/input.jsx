import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Input = ({
  styles,
  className,
  children,
  rules,
  prepend,
  append,
  type,
  ...props
}) => {
  return (
    <div className={styles.root}>
      { prepend &&
        <div className={cn(styles.affix, styles.prepend)}>
          {prepend}
        </div>
      }
      <input
        type={type}
        className={cn(styles.field, className)}
        {...props}
      />
      { append &&
        <div className={cn(styles.affix, styles.append)}>
          {append}
        </div>
      }
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'number', 'email', 'hidden', 'search', 'url']),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  prepend: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  styles: PropTypes.shape({
    root: PropTypes.string,
    field: PropTypes.string,
    affix: PropTypes.string,
    prepend: PropTypes.string,
    append: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  children: undefined,
  className: undefined,
  prepend: undefined,
  append: undefined,
};

const rules = props => ({
  root: {
    display: 'flex',
  },
  field: {
    boxSizing: 'border-box',
    fontSize: 'inherit',
    borderTopLeftRadius: props.prepend ? 0 : props.theme.radius,
    borderBottomLeftRadius: props.prepend ? 0 : props.theme.radius,
    borderTopRightRadius: props.append ? 0 : props.theme.radius,
    borderBottomRightRadius: props.append ? 0 : props.theme.radius,
    borderStyle: 'solid',
    borderColor: props.theme.color.gray.medium.string(),
    borderTopWidth: '1px',
    borderBottomWidth: '1px',
    borderLeftWidth: props.prepend ? 0 : '1px',
    borderRightWidth: props.append ? 0 : '1px',
    paddingTop: props.theme.calculateSpacing(-1),
    paddingRight: props.theme.calculateSpacing(-1),
    paddingBottom: props.theme.calculateSpacing(-1),
    paddingLeft: props.theme.calculateSpacing(-1),
    ':focus': {
      outline: 'none',
    },
  },
  affix: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: props.theme.calculateSpacing(-1),
    paddingRight: props.theme.calculateSpacing(-1),
    paddingBottom: props.theme.calculateSpacing(-1),
    paddingLeft: props.theme.calculateSpacing(-1),
    backgroundColor: props.theme.color.gray.light.string(),
    borderStyle: 'solid',
    borderColor: props.theme.color.gray.medium.string(),
    borderTopWidth: props.theme.border.width,
    borderBottomWidth: props.theme.border.width,
  },
  prepend: {
    borderLeftWidth: props.theme.border.width,
    borderRightWidth: 0,
    borderTopLeftRadius: props.theme.radius,
    borderBottomLeftRadius: props.theme.radius,
  },
  append: {
    borderRightWidth: props.theme.border.width,
    borderLeftWidth: 0,
    borderTopRightRadius: props.theme.radius,
    borderBottomRightRadius: props.theme.radius,
  },
});

export default withMargins(connect(rules)(Input));
