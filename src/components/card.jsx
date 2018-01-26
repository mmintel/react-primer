import React from 'react';
import { connect } from 'react-fela';

const Card = ({ styles, children, ...props }) => (
  <div className={styles.card} {...props}>
    { children }
  </div>
)

const card = props => ({
  display: 'flex',
  flexDirection: 'column',
  color: props.theme.color.gray.dark.string(),
  background: '#fff',
  borderRadius: props.theme.radius,
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  boxShadow: props.theme.shadow[2],
  ':hover': {
    transform: 'scale(1.05)',
  }
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
  borderTop: props.children && `1px solid ${props.theme.color.gray.light.string()}`,
});

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

export const CardImage = connect({ body })(({ styles, children, ...props }) => (
  <div className={styles.image} {...props}>
    {children}
  </div>
));

export const CardFooter = connect({ body })(({ styles, children, ...props }) => (
  <footer className={styles.footer} {...props}>
    {children}
  </footer>
));

export default connect({
  card,
  header,
  body,
  footer,
})(Card);
