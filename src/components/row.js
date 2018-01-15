import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Row = ({
  tag,
  styles,
  className,
  children,
  gutter,
  wrap,
  reverse,
  basis,
  overrides,
  ...props
}) => {
  const Tag = tag;
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      gutter,
      basis,
    }));
  return (
    <Tag
      className={classnames(styles.row, className)}
      {...props}
    >
      { childrenWithProps }
    </Tag>
  );
};

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]).isRequired,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  styles: PropTypes.shape({
    row: PropTypes.string,
  }).isRequired,
  gutter: PropTypes.number,
  wrap: PropTypes.bool,
  reverse: PropTypes.bool,
  overrides: PropTypes.func,
};

Row.defaultProps = {
  tag: 'div',
  gutter: 2,
  wrap: true,
  reverse: false,
  className: undefined,
  overrides: undefined,
};

const row = props => ({
  display: 'flex',
  flexDirection: props.reverse ? 'row-reverse' : 'row',
  flexWrap: props.wrap && 'wrap',
  marginLeft: `${(props.gutter / 2) * -1}rem`,
  marginRight: `${(props.gutter / 2) * -1}rem`,
  ...props.overrides && props.overrides(props),
});

export default connect({
  row,
})(Row);
