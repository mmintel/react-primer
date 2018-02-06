import React from 'react';
import { connect } from 'react-fela';
import cn from 'classnames';
import { withMargins } from '../../src';

const Box = ({ styles, children, className, margin, rules, ...props }) => (
  <div className={cn(styles.root, className)} {...props}>
    { children }
  </div>
);

const rules = props => ({
  root: {
    backgroundColor: '#EFEFEF',
    padding: '1rem',
    marginBottom: props.margin && !props.margin.bottom && '1rem',
  },
});

export default withMargins(connect(rules)(Box));
