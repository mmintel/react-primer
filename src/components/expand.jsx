import React from 'react';
import cn from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

export default class Expand extends React.Component {
  state = {
    active: false,
  }

  handleToggle = (e, index) => {
    this.setState({
      active: !this.state.active,
    });
    this.props.onToggle && this.props.onToggle(e, {
      index,
      active: this.state.active,
    });
  }

  render() {
    const { onToggle, ...props } = this.props;
    return (
      <View onToggle={this.handleToggle} active={this.state.active} {...props } />
    );
  }
}

const toggler = props => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const content = props => ({
  display: props.active ? 'block' : 'none',
});

const View = withMargins(connect({
  toggler,
  content,
})(
  ({ tag = 'div', styles, children, margin, className, active, index, toggler, onToggle, ...props }) => {
    const Tag = tag;

    return (
      <Tag className={cn(className)} {...props}>
        <div onClick={e => onToggle(e, index)} className={styles.toggler}>
          { toggler }
        </div>
        <div className={styles.content}>
          { children }
        </div>
      </Tag>
    );
  }
));
