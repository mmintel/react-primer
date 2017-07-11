import Loading from './loading.js';
import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

class Image extends React.Component {
  state = {
    loading: true,
  }

  handleLoad = (e) => {
    this.setState({
      loading: false,
    })
  }

  render() {
    const {
      styles,
      style,
      tag,
      src,
      alt,
      className,
      children,
      fluid,
      round,
      imgProps,
      ...props
    } = this.props;
    const { loading } = this.state;
    const Tag = tag;
    return (
      <Tag className={classnames(styles.tag, styles.loading, !loading && styles.loaded, className)} {...props}>
        { loading &&
          <Loading className={styles.loader} color="#AAA" />
        }
        <img
          onLoad={this.handleLoad}
          className={classnames(styles.image, imgProps && imgProps.className)}
          src={src}
          alt={alt}
          {...imgProps}
        />
      </Tag>
    )
  }
}

Image.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  imgProps: PropTypes.object,
  style: PropTypes.object,
  fluid: PropTypes.bool,
  round: PropTypes.bool,
};

Image.defaultProps = {
  tag: 'div',
}

const image = props => ({
  transition: 'opacity 0.5s ease-in-out',
  ...props.fluid && ({
    display: 'block',
    maxWidth: '100%',
  }),
  ...props.round && ({
    borderRadius: '100%',
  }),
  ...props.imgProps && props.imgProps.styles,
});

const loading = props => ({
  transition: 'background 0.5s ease-in-out',
  background: '#EEE',
  '> img': {
    opacity: 0,
  },
});

const loaded = props => ({
  background: 'transparent',
  '> img': {
    opacity: 1,
  }
});

const tag = props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ...props.styles,
})

const loader = props => ({
  marginTop: '2rem',
  marginRight: '2rem',
  marginBottom: '2rem',
  marginLeft: '2rem',
})

export default connect({
  tag,
  image,
  loading,
  loaded,
  loader,
})(Image);
