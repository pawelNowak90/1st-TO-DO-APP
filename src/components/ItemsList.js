import React, { Component } from "react";
import Task from './Task';

class ItemsList extends Component {
  state = {};

  render() {
  
    const active=this.props.tasks.filter(task => task.active);
    const done=this.props.tasks.filter(task => !task.active);
    

    const activeTasks=active.map(task => (
    <Task key={task.id} task={task} change={this.props.change} delete={this.props.delete}/>)
    )
    const doneTasks=done.map(task => (
      <Task key={task.id} task={task} change={this.props.change} delete={this.props.delete}/>)
      )
  
    return (
      <>
        <div className="active">
          <h1>Zadania do zrobienia</h1>
          {activeTasks}
          <h1>Zadania zrobione (0)</h1>
          
          {doneTasks}
        </div>

      </>
    );
  }
}

export default ItemsList;
