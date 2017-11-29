import PropTypes from 'prop-types';
import { SpringGrid, measureItems, layout } from 'react-stonecutter';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Grid = measureItems(SpringGrid, {
  measureImages: true,
  background: true,
});

class Masonry extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
    className: PropTypes.string,
    columns: PropTypes.number.isRequired,
    columnWidth: PropTypes.number.isRequired,
    gutterWidth: PropTypes.number,
    gutterHeight: PropTypes.number,
    style: PropTypes.object,
    design: PropTypes.func,
  };

  static defaultProps = {
    gutterWidth: 0,
    gutterHeight: 0,
  }

  constructor(props) {
    super(props);
    this.node = null;
  }

  render() {
    const {
      styles,
      design,
      className,
      children,
      columns,
      columnWidth,
      gutterWidth,
      gutterHeight,
      ...props
    } = this.props;

    const wrappedChildren = React.Children.map(children, (child, index) => (
      <li key={`masonry-${index}`} className={styles.item}>{child}</li>
    ));

    return (
      <Grid
        component="ul"
        columns={columns}
        columnWidth={columnWidth}
        layout={layout.pinterest}
        gutterWidth={gutterWidth}
        gutterHeight={gutterHeight}
        className={classnames(styles.masonry, className)}
        ref={node => this.node = node}
        {...props}
        >
          {wrappedChildren}
      </Grid>
    )
  }
}

const masonry = props => ({
  listStyle: 'none',
  paddingLeft: 0,
  marginTop: 0,
  marginBottom: 0,
  ...props.design && props.design(props),
});

const item = props => ({
  width: `${props.columnWidth}`,
  marginBottom: 0,
  lineHeight: 0,
});

export default connect({
  masonry,
  item,
})(Masonry);
