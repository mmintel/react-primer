import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Headline = ({
  styles,
  design,
  className,
  children,
  tag = 'h2',
  size = 1,
  calculateSize,
  ...props
}) => {
  const Tag = tag;
  return (
    <Tag
      style={{ fontSize: calculateSize(size) }}
      className={classnames(styles.headline, className)}
      {...props}
    >
      {children}
    </Tag>
  );
};

Headline.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  calculateSize: PropTypes.func.isRequired,
  design: PropTypes.func,
  className: PropTypes.string,
  size: PropTypes.number,
  styles: PropTypes.object,
};

const headline = props => ({
  display: 'block',
  marginTop: 0,
  marginBottom: 0,
  ...props.design && props.design(props),
});

export default connect({
  headline,
})(Headline);
