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
  align,
  valign,
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
  basis: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(['left', 'center', 'right', 'between', 'around']),
  valign: PropTypes.oneOf(['top', 'center', 'bottom']),
  gutter: PropTypes.number,
  wrap: PropTypes.bool,
  reverse: PropTypes.bool,
  overrides: PropTypes.func,
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
  overrides: undefined,
};

const row = props => ({
  display: 'flex',
  flexDirection: props.reverse ? 'row-reverse' : 'row',
  flexWrap: props.wrap && 'wrap',
  justifyContent: ((align) => {
    switch (align) {
      case 'left':
        return 'flex-start';
      case 'right':
        return 'flex-end';
      case 'between':
        return 'space-between';
      case 'around':
        return 'space-around';
      default:
        return align;
    }
  })(props.align),
  alignItems: ((valign) => {
    switch (valign) {
      case 'top':
        return 'flex-start';
      case 'bottom':
        return 'flex-end';
      default:
        return valign;
    }
  })(props.valign),
  marginLeft: `${(props.gutter / 2) * -1}rem`,
  marginRight: `${(props.gutter / 2) * -1}rem`,
  ...props.overrides && props.overrides(props),
});

export default connect({
  row,
})(Row);
