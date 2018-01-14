import React, { Component } from 'react';

class TodoItem extends Component{
  render(){
    return(
      <div>
      <table>
        <tr>
        <td>{this.props.todo.title}</td>
        <td>{this.props.todo.id}</td>
      </tr>
      </table>
      </div>
    )
  }
};

export default TodoItem;
