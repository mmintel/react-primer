import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Container = ({
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
      className={classnames(styles.root, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  styles: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  overrides: PropTypes.func,
};

Container.defaultProps = {
  tag: 'div',
  children: undefined,
  className: undefined,
  overrides: undefined,
};

const root = props => ({
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '1200px',
  minWidth: '280px',
  paddingLeft: props.theme.calculateSpacing(2),
  paddingRight: props.theme.calculateSpacing(2),
  marginLeft: 'auto',
  marginRight: 'auto',
  ...props.overrides && props.overrides(props),
});

export default connect({
  root,
})(Container);
