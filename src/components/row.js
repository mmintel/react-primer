import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Row = ({
  tag,
  styles,
  style,
  className,
  children,
  gutter,
  ...props
}) => {
  let Tag = tag;
  return (
    <Tag
      className={classnames(styles.row, className)}
      {...props}
    >
      { React.Children.map(children, (child, index) => (
        <div key={`row-${index}`} className={styles.column}>{child}</div>
      )) }
    </Tag>
  );
};

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  style: PropTypes.object,
  gutter: PropTypes.number,
  wrap: PropTypes.bool,
  reverse: PropTypes.bool,
  design: PropTypes.func,
};

Row.defaultProps = {
  tag: 'div',
  gutter: 2,
};

const row = props => ({
  display: 'flex',
  flexDirection: props.reverse ? 'row-reverse' : 'row',
  flexWrap: props.wrap && 'wrap',
  marginLeft: `${(props.gutter / 2) * -1}rem`,
  marginRight: `${(props.gutter / 2) * -1}rem`,
  ...props.design && props.design(props),
});

const column = props => ({
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 0,
  paddingLeft: `${props.gutter / 2}rem`,
  paddingRight: `${props.gutter / 2}rem`,
});

export default connect({
  row,
  column,
})(Row);
