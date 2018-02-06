import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Input = ({
  styles,
  className,
  rules,
  prepend,
  append,
  type,
  values,
  margin,
  error,
  ...props
}) => {
  if (type === 'select' && !values) {
    return console.error('Component <Input> requires an array of values if used as type of "select"');
  }
  return (
    <div className={styles.root}>
      <div className={styles.field}>
        { prepend &&
          <div className={cn(styles.affix, styles.prepend)}>
            {prepend}
          </div>
        }
        { type === 'select' ?
          <select className={cn(styles.input, styles.select)}>
            { values.map(item => (
              <option key={item.key} value={item.key}>{item.value}</option>
            ))}
          </select> :
          <input
            type={type}
            className={cn(styles.input, className)}
            {...props}
          />
        }
        { append &&
          <div className={cn(styles.affix, styles.append)}>
            {append}
          </div>
        }
      </div>
      { error &&
        <div className={styles.error}>
          {error}
        </div>
      }
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'number', 'email', 'hidden', 'search', 'url', 'select']),
  error: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  prepend: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  values: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    value: PropTypes.string,
  })),
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
  error: undefined,
  values: undefined,
  children: undefined,
  className: undefined,
  prepend: undefined,
  append: undefined,
};

const rules = props => ({
  root: {},
  field: {
    display: 'flex',
    marginBottom: props.margin && !props.margin.bottom && props.theme.calculateSpacing(1),
  },
  input: {
    display: 'block',
    width: '100%',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: props.theme.calculateSize(1),
    appearance: 'none',
    backgroundColor: props.theme.color.white.string(),
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
    paddingTop: props.theme.calculateSpacing(0.5),
    paddingRight: props.theme.calculateSpacing(0.5),
    paddingBottom: props.theme.calculateSpacing(0.5),
    paddingLeft: props.theme.calculateSpacing(0.5),
    ':focus': {
      outline: 'none',
    },
  },
  error: {
    borderRadius: props.theme.radius,
    backgroundColor: props.theme.color.status.error.light.string(),
    color: props.theme.color.status.error.dark.string(),
    marginTop: props.theme.calculateSpacing(0.5),
    paddingTop: props.theme.calculateSpacing(0.5),
    paddingRight: props.theme.calculateSpacing(0.5),
    paddingBottom: props.theme.calculateSpacing(0.5),
    paddingLeft: props.theme.calculateSpacing(0.5),
  },
  select: {
    cursor: 'context-menu',
  },
  affix: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: props.theme.calculateSpacing(0.5),
    paddingRight: props.theme.calculateSpacing(0.5),
    paddingBottom: props.theme.calculateSpacing(0.5),
    paddingLeft: props.theme.calculateSpacing(0.5),
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
