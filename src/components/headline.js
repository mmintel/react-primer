import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import ms from 'modularscale-js';

const Headline = ({
  styles,
  style,
  className,
  children,
  tag = 'h2',
  size = 1,
  calculateSize = n => ms(n),
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
  className: PropTypes.string,
  size: PropTypes.number,
  calculateSize: PropTypes.func,
  styles: PropTypes.object,
  style: PropTypes.object,
};

const headline = props => ({
  display: 'block',
  ...props.styles,
});

export default connect({
  headline,
})(Headline);
