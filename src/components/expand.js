import React from 'react';
import cn from 'classnames';
import { connect } from 'react-fela';

class Expand extends React.Component {
  state = {
    active: false,
  }

  render() {
    const { tag = 'div', styles, children, className, active, index, toggler, onToggle, ...props } = this.props;
    const Tag = tag;

    return(
      <Tag className={cn(styles.expand, className)} {...props}>
        <div onClick={e => onToggle(e, index)} className={styles.toggler}>
          { toggler }
        </div>
        <div className={styles.content}>
          { children }
        </div>
      </Tag>
    )
  }
}

const expand = props => ({
  borderBottom: '1px solid #e4e4e4',
});

const toggler = (props, state) => ({
  cursor: props.active ? 'auto' : 'pointer',
})

const content = props => ({
  display: props.active ? 'block' : 'none',
  paddingBottom: '12px',
});

export default connect({
  expand,
  toggler,
  content,
})(Expand);
