import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Checkbox = ({
  styles,
  className,
  children,
  rules,
  type,
  ...props
}) => {
  return (
    <div className={styles.root}>
      <input
        className={cn(styles.field, className)}
        type="checkbox"
        {...props}
      />
    </div>
  );
};

Checkbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  styles: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

Checkbox.defaultProps = {
  children: undefined,
  className: undefined,
};

const rules = props => ({
  root: {
    display: 'flex',
  },
});

export default withMargins(connect(rules)(Checkbox));
