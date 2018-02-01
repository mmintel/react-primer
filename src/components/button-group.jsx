import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

const ButtonGroup = ({
  tag,
  styles,
  className,
  children,
  margin,
  overrides,
  ...props
}) => {
  const Tag = tag;
  const childrenWithProps = React.Children.map(children,
   child => React.cloneElement(child, {
     overrides: {
       root: () => ({
         '&:first-child': {
           borderTopRightRadius: 0,
           borderBottomRightRadius: 0,
           borderRightWidth: 0,
         },
         '&:not(:first-child):not(:last-child)': {
           borderRadius: 0,
           borderRightWidth: 0,
         },
         '&:last-child': {
           borderTopLeftRadius: 0,
           borderBottomLeftRadius: 0,
         },
       }),
     },
   }),
  );
  return (
    <Tag
      className={cn(styles.root, className)}
      {...props}
    >
      {childrenWithProps}
    </Tag>
  );
};

ButtonGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  styles: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.func]),
  className: PropTypes.string,
  overrides: PropTypes.shape({
    root: PropTypes.func.isRequired,
  }),
};

ButtonGroup.defaultProps = {
  tag: 'div',
  overrides: undefined,
  children: undefined,
  className: undefined,
};

const root = props => ({
  display: 'inline-flex',
  ...props.overrides && props.overrides.root(props),
});

export default withMargins(connect({
  root,
})(ButtonGroup));
