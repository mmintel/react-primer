import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Container = ({
  tag,
  styles,
  style,
  className,
  children,
  ...props
}) => {
  let Tag = tag;
  return (
    <Tag
      className={classnames(styles.container, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  style: PropTypes.object,
};

Container.defaultProps = {
  tag: 'div',
};

const container = props => ({
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '1200px',
  minWidth: '280px',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  ...props.styles,
})

export default connect({
  container,
})(Container);
