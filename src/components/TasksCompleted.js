import React, { Component } from "react";
import Task from './Task';

const TasksCompleted = (props) => {
  const activeTasks=props.tasks.filter(task => task.active === false);
  activeTasks.map(task => (
    <Task key={task.id} task={task} />)
    )
  return (
  <>
  <p>TASKS COMPLETED Component</p>
  {activeTasks}
</>
  )

};



export default TasksCompleted;
