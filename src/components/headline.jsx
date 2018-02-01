import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Headline = ({
  styles,
  overrides,
  className,
  children,
  margin,
  tag = 'h2',
  rules,
  ...props
}) => {
  const Tag = tag;
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
  overrides: PropTypes.shape({
    root: PropTypes.func,
  }),
  className: PropTypes.string,
  styles: PropTypes.object,
};

const headline = props => ({
  display: 'block',
  marginTop: props.margin && !props.margin.top ? props.theme.calculateSpacing(0) : 0,
  marginBottom: props.margin && !props.margin.bottom ? props.theme.calculateSpacing(0) : 0,
  ...props.overrides && props.overrides.root(props),
});

export default withMargins(connect({
  headline,
})(Headline));
