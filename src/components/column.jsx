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
  overrides,
  ...props
}) => {
  const Tag = tag;
  return (
    <Tag
      className={classnames(styles.column, className)}
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
  overrides: PropTypes.func,
};

Column.defaultProps = {
  tag: 'div',
  gutter: 2,
  overrides: undefined,
  className: undefined,
};

const column = props => ({
  boxSizing: 'border-box',
  flexGrow: props.basis ? 0 : 1,
  flexShrink: 0,
  flexBasis: props.basis ? props.basis : 0,
  paddingLeft: props.theme.calculateSpacing(props.gutter / 2),
  paddingRight: props.theme.calculateSpacing(props.gutter / 2),
  marginBottom: props.margin && !props.margin.bottom && props.theme.calculateSpacing(0),
  ...props.overrides && props.overrides(props),
});

export default withMargins(connect({
  column,
})(Column));
