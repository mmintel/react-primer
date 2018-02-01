import React from 'react';
import { connect } from 'react-fela';
import cn from 'classnames';
import { withMargins } from '../../src';

const Box = ({ styles, children, className, margin, ...props }) => (
  <div className={cn(styles.box, className)} {...props}>
    { children }
  </div>
);

const box = props => ({
  backgroundColor: '#EFEFEF',
  padding: '1rem',
  marginBottom: props.margin && !props.margin.bottom && '1rem',
});

export default withMargins(connect({ box })(Box));
