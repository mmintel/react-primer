import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Column = ({
  tag,
  styles,
  className,
  children,
  margin,
  gutter,
  basis,
  rules,
  ...props
}) => {
  const Tag = tag;
  return (
    <Tag
      className={classnames(styles.root, className)}
      {...props}
    >
      { children }
    </Tag>
  );
};

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]).isRequired,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  styles: PropTypes.shape({
    column: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
  gutter: PropTypes.number,
};

Column.defaultProps = {
  tag: 'div',
  gutter: 2,
  className: undefined,
};

const rules = props => ({
  root: {
    boxSizing: 'border-box',
    flexGrow: props.basis ? 0 : 1,
    flexShrink: 0,
    flexBasis: props.basis ? props.basis : 0,
    paddingLeft: props.theme.calculateSpacing(props.gutter / 2),
    paddingRight: props.theme.calculateSpacing(props.gutter / 2),
    marginBottom: props.margin && !props.margin.bottom && props.theme.calculateSpacing(0),
  },
});

export default withMargins(connect(rules)(Column));
