import PropTypes from 'prop-types';
import Bricks from 'bricks.js';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

class Masonry extends React.Component {
  propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    columns: PropTypes.number,
    style: PropTypes.object,
    design: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.node = null;
    this.bricks = null;
  }

  componentDidMount() {
    console.log(this.node)
    if(this.node) {
      this.bricks = Bricks({
        container: this.node,
      })
    }
  }

  render() {
    const {
      styles,
      design,
      className,
      children,
      columns,
      ...props
    } = this.props;

    const childrenWithProps = React.Children.map(children,
     (child, index) => React.cloneElement(child, {
       className: styles.item,
     })
    );

    return (
      <div
        className={classnames(styles.masonry, className)}
        ref={node => this.node = node}
        {...props}
        >
          {childrenWithProps}
      </div>
    )
  }
}

const masonry = props => ({
  lineHeight: 0,
  columnCount: props.columns || 4,
  columnGap: 0,
  ...props.design && props.design(props),
});

const item = props => ({
  display: 'block',
  maxWidth: '100%',
})

export default connect({
  masonry,
  item,
})(Masonry);
