import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import ms from 'modularscale-js';

const Headline = ({
  tag,
  styles,
  style,
  size,
  className,
  children,
  ...props
}) => {
  let Tag = tag;
  return (
    <Tag
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
  style: PropTypes.object,
};

Headline.defaultProps = {
  tag: 'h2',
};

const headline = props => ({
  display: 'block',
  ...props.styles,
})

export default connect({
  headline,
})(Headline);
