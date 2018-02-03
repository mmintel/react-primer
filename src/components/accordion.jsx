import React from 'react';
import cn from 'classnames';
import { connect } from 'react-fela';
import { withMargins } from '../';

class Accordion extends React.Component {
  state = {
    activeItem: 0,
  }

  handleToggle = (e, data) => {
    this.setState({
      activeItem: data.index,
    })
  }

  render() {
    const { activeItem } = this.state;
    const { tag = 'div', children, margin, rules, ...props } = this.props;
    const Tag = tag;

    const childrenWithProps = React.Children.map(children,
     (child, index) => React.cloneElement(child, {
       active: activeItem === index,
       index,
       onToggle: this.handleToggle,
     })
    );

    return(
      <Tag {...props}>
        { childrenWithProps }
      </Tag>
    );
  }
}

const rules = props => ({})

export default withMargins(connect(rules)(Accordion));
