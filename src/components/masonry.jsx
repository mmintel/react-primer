import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

class Masonry extends React.Component {
  constructor(props) {
    super(props);
    this.node = null;
    this.masonry = null;
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      const MasonryLayout = require('masonry-layout');
      const ImagesLoaded = require('imagesloaded');
      new ImagesLoaded(this.node, () => {
        this.masonry = new MasonryLayout(this.node);
      });
    }
  }

  render() {
    const {
      styles,
      overrides,
      className,
      children,
      gutterWidth,
      gutterHeight,
      rules,
      ...props
    } = this.props;

    const wrappedChildren = React.Children.map(children, (child, index) => (
      <li key={`masonry-${index}`} className={styles.item}>{child}</li>
    ));

    return (
      <ul
        className={classnames(styles.root, className)}
        ref={node => this.node = node}
        {...props}
        >
          {wrappedChildren}
      </ul>
    )
  }
}

Masonry.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  columns: PropTypes.number,
  gutterWidth: PropTypes.number,
  gutterHeight: PropTypes.number,
  style: PropTypes.shape({
    root: PropTypes.string,
  }).isRequired,
  overrides: PropTypes.shape({
    root: PropTypes.func,
    item: PropTypes.func,
  }),
};

Masonry.defaultProps = {
  overrides: {},
  gutterWidth: 0,
  gutterHeight: 0,
};

const root = props => ({
  display: 'block',
  listStyle: 'none',
  paddingLeft: 0,
  marginTop: props.margin && !props.margin.top && 0,
  marginBottom: props.margin && !props.margin.bottom && props.theme.calculateSpacing(0),
  marginRight: props.gutterWidth ? props.theme.calculateSpacing((props.gutterWidth / 2) * -1) : 0,
  marginLeft: props.gutterWidth ? props.theme.calculateSpacing((props.gutterWidth / 2) * -1) : 0,
  ...props.overrides.root && props.overrides.root(props),
});

const item = props => ({
  display: 'block',
  boxSizing: 'border-box',
  paddingRight: props.gutterWidth ? `${props.gutterWidth / 2}rem` : 0,
  paddingLeft: props.gutterWidth ? `${props.gutterWidth / 2}rem` : 0,
  paddingBottom: props.gutterHeight ? `${props.gutterHeight}rem` : 0,
  ...props.overrides.item && props.overrides.item(props),
});

export default withMargins(connect({
  root,
  item,
})(Masonry));
