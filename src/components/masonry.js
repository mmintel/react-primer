import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Masonry = ({
  styles,
  design,
  className,
  children,
  columns,
  ...props
}) => {
  const childrenWithProps = React.Children.map(children,
   (child, index) => React.cloneElement(child, {
     className: styles.item,
   })
  );
  return (
    <div
      className={classnames(styles.masonry, className)}
      {...props}
      >
        {childrenWithProps}
    </div>
  )
}

Masonry.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  columns: PropTypes.number,
  style: PropTypes.object,
  design: PropTypes.func,
};

const masonry = props => ({
  lineHeight: 0,
  columnCount: props.columns || 4,
  columnGap: 0,
  ...props.design && props.design(props),
});

const item = props => ({
  display: 'inline-block',
})

export default connect({
  masonry,
  item,
})(Masonry);
