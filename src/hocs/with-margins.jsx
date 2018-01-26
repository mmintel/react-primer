import React from 'react';
import { connect } from 'react-fela';
import cn from 'classnames';

function withMargins(WrappedComponent) {
  const StyledComponent = ({ margin, styles, className, ...props }) => {
    console.log(styles)
    return <WrappedComponent className={cn(styles.margin, className)} {...props} />
  }

  StyledComponent.defaultProps = {
    margin: {},
  };

  const margin = props => ({
    marginTop: props.margin.top && props.theme.calculateSpacing(props.margin.top),
    marginRight: props.margin.right && props.theme.calculateSpacing(props.margin.right),
    marginBottom: props.margin.bottom && props.theme.calculateSpacing(props.margin.bottom),
    marginLeft: props.margin.left && props.theme.calculateSpacing(props.margin.left),
  });

  return connect({
    margin,
  })(StyledComponent);
}

export default withMargins;
