import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

// TODO load images first when visible in viewport

const Image = ({
  styles,
  overrides,
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
  overrides: PropTypes.func,
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
  ...props.overrides && props.overrides(props),
});

export default connect({
  image,
})(Image);
