import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import cn from 'classnames';

function withMargins(WrappedComponent) {
  const StyledComponent = ({ m, styles, className, ...props }) => {
    return <WrappedComponent className={cn(styles.margin, className)} {...props} />;
  };

  StyledComponent.propTypes = {
    m: PropTypes.shape({
      t: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      r: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      b: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      l: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })
  }

  StyledComponent.defaultProps = {
    m: undefined,
  };

  function margins(theme, t, r, b, l) {
    return {
      marginTop: t && (typeof t === 'number' ? theme.calculateSpacing(t) : 'auto'),
      marginRight: r && (typeof r === 'number' ? theme.calculateSpacing(r) : 'auto'),
      marginBottom: b && (typeof b === 'number' ? theme.calculateSpacing(b) : 'auto'),
      marginLeft: l && (typeof l === 'number' ? theme.calculateSpacing(l) : 'auto'),
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
