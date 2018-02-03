import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const Image = ({
  styles,
  overrides,
  margin,
  className,
  fluid,
  stretch,
  round,
  rules,
  ...props
}) => (
  <img
    className={classnames(styles.root, className)}
    {...props}
  />
)

Image.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  overrides: PropTypes.func,
  fluid: PropTypes.bool,
  stretch: PropTypes.bool,
  round: PropTypes.bool,
};

const rules = props => ({
  root: {
    ...props.fluid && ({
      display: 'block',
      maxWidth: '100%',
    }),
    ...props.stretch && ({
      display: 'block',
      width: '100%',
    }),
    ...props.round && ({
      borderRadius: '100%',
    }),
    marginTop: props.margin && !props.margin.top && props.theme.calculateSpacing(0),
    marginBottom: props.margin && !props.margin.bottom && props.theme.calculateSpacing(0),
    marginRight: props.margin && !props.margin.right && props.theme.calculateSpacing(0),
    marginLeft: props.margin && !props.margin.left && props.theme.calculateSpacing(0),
  },
});

export default withMargins(connect(rules)(Image));
