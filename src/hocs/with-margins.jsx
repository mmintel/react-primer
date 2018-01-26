import React from 'react';
import { connect } from 'react-fela';
import cn from 'classnames';

function withMargins(WrappedComponent) {
  const StyledComponent = ({ m, styles, className, ...props }) =>
    <WrappedComponent className={cn(styles.margin, className)} {...props} />

  StyledComponent.defaultProps = {
    margin: {},
  };

  const margin = ({ m, theme }) => {
    if (!m) return;
    const { t, r, b, l, ...media } = m;
    console.log(media)
    return {
      marginTop: t && theme.calculateSpacing(t),
      marginRight: r && theme.calculateSpacing(r),
      marginBottom: b && theme.calculateSpacing(b),
      marginLeft: l && theme.calculateSpacing(l),
      ...(() => (
        for(item of media) {
          
        }
      )),
    }
  };

  return connect({
    margin,
  })(StyledComponent);
}

export default withMargins;
