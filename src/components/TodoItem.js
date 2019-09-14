import React, {Component} from 'react';

class TodoItem extends Component {
  render() {
    return (
      <p>{this.props.title}</p>
    )
  }
}

export default TodoItem;
