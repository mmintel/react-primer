import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Column = ({
  tag,
  styles,
  className,
  children,
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
  flexGrow: props.basis ? 0 : 1,
  flexShrink: 0,
  flexBasis: props.basis ? props.basis : 0,
  paddingLeft: `${props.gutter / 2}rem`,
  paddingRight: `${props.gutter / 2}rem`,
  marginBottom: `${props.gutter}rem`,
  ...props.overrides && props.overrides(props),
});

export default connect({
  column,
})(Column);
