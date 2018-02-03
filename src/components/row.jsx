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
  align,
  valign,
  rules,
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
  align: PropTypes.oneOf(['left', 'center', 'right', 'between', 'around']),
  valign: PropTypes.oneOf(['top', 'center', 'bottom']),
  gutter: PropTypes.number,
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
    marginLeft: props.theme.calculateSpacing((props.gutterWidth / 2) * -1),
    marginRight: props.theme.calculateSpacing((props.gutterWidth / 2) * -1),
  }
});

export default withMargins(connect(rules)(Row));
