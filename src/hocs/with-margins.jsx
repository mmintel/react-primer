import React from 'react';
import { connect } from 'react-fela';
import cn from 'classnames';

function withMargins(WrappedComponent) {
  const StyledComponent = ({ m, styles, className, ...props }) => {
    return <WrappedComponent className={cn(styles.margin, className)} {...props} />;
  };

  StyledComponent.defaultProps = {
    m: undefined,
  };

  function margins(theme, t, r, b, l) {
    return {
      marginTop: t && theme.calculateSpacing(t),
      marginRight: r && theme.calculateSpacing(r),
      marginBottom: b && theme.calculateSpacing(b),
      marginLeft: l && theme.calculateSpacing(l),
    };
  }

  function transformMediaQueries(theme, media) {
    const rules = {};
    for (let item in media) {
      rules[item] = margins(theme, media[item].t, media[item].r, media[item].b, media[item].l)
    }
    return rules;
  }

  const margin = ({ m, theme }) => {
    if (!m) return;
    const { t, r, b, l, ...mq } = m;
    return {
      ...margins(theme, t, r, b, l),
      ...transformMediaQueries(theme, mq),
    }
  };

  return connect({
    margin,
  })(StyledComponent);
}

export default withMargins;
