import React, { Component } from "react";
import Task from './Task';

class ItemsList extends Component {
  state = {};

  render() {
  
    // const tasks=this.props.tasks.map(task => (
    // <Task key={task.id} task={task} change={this.props.change} delete={this.props.delete}/>)
    // )
  
    return (
      <>
        <div className="active">
          <h1>Zadania do zrobienia</h1>
          {tasks}
        </div>

      </>
    );
  }
}

export default ItemsList;
