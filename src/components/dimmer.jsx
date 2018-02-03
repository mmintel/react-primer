import { Motion, spring } from 'react-motion';
import { withMargins } from '../';
import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-fela';

const Dimmer = ({ styles, className, children, enabled, rules, ...props}) => (
  <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(enabled ? 0.5 : 0) }}>
    { interpolatedStyles =>
      <div style={{ backgroundColor: `rgba(0,0,0,${interpolatedStyles.opacity})` }} className={classnames(styles.root, className)} {...props}>
        {children}
      </div>
    }
  </Motion>
);

const rules = props => ({
  root: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    pointerEvents: 'none',
  },
});

export default withMargins(connect(rules)(Dimmer));
