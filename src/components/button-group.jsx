import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { connect } from 'react-fela';
import { Button } from '../';

const ButtonGroup = ({
  tag,
  styles,
  className,
  children,
  overrides,
  ...props
}) => {
  const Tag = tag;
  return (
    <Tag
      className={cn(styles.root, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(Button),
    PropTypes.objectOf(Button),
  ]),
  styles: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  overrides: PropTypes.shape({
    root: PropTypes.func.isRequired,
  }),
};

ButtonGroup.defaultProps = {
  tag: 'div',
  overrides: undefined,
  children: undefined,
  className: undefined,
};

const root = props => ({
  ...props.overrides && props.overrides.root(props),
});

export default connect({
  root,
})(ButtonGroup);
