import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Row = ({
  tag,
  styles,
  className,
  children,
  gutter,
  wrap,
  reverse,
  basis,
  rules,
  margin,
  margins,
  ...props
}) => {
  const Tag = tag;
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, {
      gutter,
      basis,
      margin: child.props.margin || margins,
    }));
  return (
    <Tag
      className={classnames(styles.root, className)}
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
    root: PropTypes.string,
  }).isRequired,
  basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  gutter: PropTypes.number,
  margins: PropTypes.bool,
  wrap: PropTypes.bool,
  reverse: PropTypes.bool,
};

Row.defaultProps = {
  tag: 'div',
  align: 'left',
  valign: 'top',
  gutter: 2,
  wrap: true,
  reverse: false,
  basis: undefined,
  className: undefined,
};

const rules = props => ({
  root: {
    display: 'flex',
    flexDirection: props.reverse ? 'row-reverse' : 'row',
    flexWrap: props.wrap && 'wrap',
    marginLeft: props.theme.calculateSpacing((props.gutter / 2) * -1),
    marginRight: props.theme.calculateSpacing((props.gutter / 2) * -1),
  }
});

export default withMargins(connect(rules)(Row));
