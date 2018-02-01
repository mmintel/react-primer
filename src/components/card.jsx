import React from 'react';
import { connect } from 'react-fela';
import cn from 'classnames';
import { withMargins } from '../';

const root = props => ({
  display: 'flex',
  flexDirection: 'column',
  color: props.theme.color.gray.dark.string(),
  background: '#fff',
  borderRadius: props.theme.radius,
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  borderWidth: props.level === 0 ? props.theme.border.width : 0,
  borderStyle: 'solid',
  borderColor: props.theme.color.gray.light.string(),
  boxShadow: props.level > 0 && props.theme.shadow[props.level],
  marginBottom: props.margin && !props.margin.bottom && props.theme.calculateSpacing(0),
  marginTop: props.margin && !props.margin.top && props.theme.calculateSpacing(0),
  ...props.overrides && props.overrides.root(props),
});

const header = props => ({
  paddingTop: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingBottom: '1rem',
  borderBottom: `1px solid ${props.theme.color.gray.light.string()}`,
});

const body = props => ({
  flexGrow: 1,
  flexShrink: 0,
  flexBasis: 'auto',
  paddingTop: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingBottom: '1rem',
});

const footer = props => ({
  paddingTop: '1rem',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  paddingBottom: '1rem',
  borderTop: `1px solid ${props.theme.color.gray.light.string()}`,
});

const Card = ({ styles, children, className, margin, ...props }) => (
  <div className={cn(styles.root, className)} {...props}>
    { children }
  </div>
);

Card.defaultProps = {
  level: 0,
};

export default withMargins(connect({ root })(Card));

export const CardHeader = connect({ header })(({ styles, children, ...props }) => (
  <header className={styles.header} {...props}>
    {children}
  </header>
));

export const CardBody = connect({ body })(({ styles, children, ...props }) => (
  <div className={styles.body} {...props}>
    {children}
  </div>
));

export const CardFooter = connect({ footer })(({ styles, children, ...props }) => (
  <footer className={styles.footer} {...props}>
    {children}
  </footer>
));
