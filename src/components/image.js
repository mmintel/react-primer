import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

// TODO load images first when visible in viewport

const Image = ({
  styles,
  design,
  className,
  fluid,
  stretch,
  round,
  ...props
}) => (
  <img
    className={classnames(styles.image, className)}
    {...props}
  />
)

Image.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  design: PropTypes.func,
  fluid: PropTypes.bool,
  stretch: PropTypes.bool,
  round: PropTypes.bool,
};

const image = props => ({
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
  ...props.design && props.design(props),
});

export default connect({
  image,
})(Image);
