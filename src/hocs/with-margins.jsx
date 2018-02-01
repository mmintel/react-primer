import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-fela';
import cn from 'classnames';

function withMargins(WrappedComponent) {
  const ComponentWithMargin = ({ margin, styles, className, ...props }) =>
    <WrappedComponent className={cn(styles.margin, className)} margin={margin} {...props} />;

  ComponentWithMargin.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.shape({
      margin: PropTypes.string,
    }).isRequired,
    margin: PropTypes.oneOfType([PropTypes.bool, PropTypes.shape({
      top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    })]),
  };

  ComponentWithMargin.defaultProps = {
    margin: undefined,
    className: undefined,
  };

  function getMargin(theme, margin) {
    if (typeof margin === 'number') {
      return theme.calculateSpacing(margin);
    } else if (margin === 'auto') {
      return 'auto';
    }
    return new Error('Invalid value for margin.');
  }

  function margins(theme, top, right, bottom, left) {
    const styles = {};
    if (top !== undefined) {
      styles.marginTop = getMargin(theme, top);
    }
    if (right !== undefined) {
      styles.marginRight = getMargin(theme, right);
    }
    if (bottom !== undefined) {
      styles.marginBottom = getMargin(theme, bottom);
    }
    if (left !== undefined) {
      styles.marginLeft = getMargin(theme, left);
    }
    return styles;
  }

  function transformMediaQueries(theme, media) {
    const rules = {};
    for (let item in media) {
      rules[item] = margins(theme, media[item].top, media[item].right, media[item].bottom, media[item].left)
    }
    return rules;
  }

  const margin = ({ margin, theme }) => {
    if (!margin) return {};
    console.log(margin)
    const { top, right, bottom, left, ...mq } = margin;
    return {
      ...margins(theme, top, right, bottom, left),
      ...transformMediaQueries(theme, mq),
    }
  };

  return connect({
    margin,
  })(ComponentWithMargin);
}

export default withMargins;
