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

const rules = props => ({
  root: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    display: props.active ? 'block' : 'none',
  }
});

const View = withMargins(connect(rules)(
  ({ tag = 'div', styles, children, margin, className, active, index, toggler, onToggle, rules, ...props }) => {
    const Tag = tag;

    return (
      <Tag className={cn(className)} {...props}>
        <div onClick={e => onToggle(e, index)} className={styles.root}>
          { toggler }
        </div>
        <div className={styles.content}>
          { children }
        </div>
      </Tag>
    );
  }
));
