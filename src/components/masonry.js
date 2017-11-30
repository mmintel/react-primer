import PropTypes from 'prop-types';
import MasonryLayout from 'masonry-layout';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

class Masonry extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    columns: PropTypes.number,
    gutterWidth: PropTypes.number,
    gutterHeight: PropTypes.number,
    style: PropTypes.object,
    design: PropTypes.func,
  };

  static defaultProps = {
    columns: 4,
    gutterWidth: 0,
    gutterHeight: 0,
  }

  constructor(props) {
    super(props);
    this.node = null;
    this.masonry = null;
  }

  componentDidMount() {
    this.masonry = new MasonryLayout(this.node);
  }

  render() {
    const {
      styles,
      design,
      className,
      children,
      columns,
      gutterWidth,
      gutterHeight,
      ...props
    } = this.props;

    const wrappedChildren = React.Children.map(children, (child, index) => (
      <li key={`masonry-${index}`} className={styles.item}>{child}</li>
    ));

    return (
      <ul
        className={classnames(styles.masonry, className)}
        ref={node => this.node = node}
        {...props}
        >
          {wrappedChildren}
      </ul>
    )
  }
}

const masonry = props => ({
  display: 'block',
  listStyle: 'none',
  paddingLeft: 0,
  marginTop: 0,
  marginBottom: 0,
  marginRight: props.gutterWidth ? `${props.gutterWidth * -1}rem` : 0,
  marginLeft: props.gutterWidth ? `${props.gutterWidth * -1}rem` : 0,
  ...props.design && props.design(props),
});

const item = props => ({
  display: 'block',
  //lineHeight: 0,
  width: `${100 / (props.columns || 4)}%`,
  paddingRight: props.gutterWidth ? `${props.gutterWidth / 2}rem` : 0,
  paddingLeft: props.gutterWidth ? `${props.gutterWidth / 2}rem` : 0,
  paddingBottom: props.gutterHeight ? `${props.gutterHeight}rem` : 0,
});

export default connect({
  masonry,
  item,
})(Masonry);
