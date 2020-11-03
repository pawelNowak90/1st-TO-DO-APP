import React, { Component } from "react";

const Task = (props) => {
   const {content, id, date} = props.task;
    return (
        <div>
            <p>
           <strong> {content}</strong> - do <span> {date}</span>
            {/* {console.log(props.task.active)} */}

            {props.task.active && <button onClick={()=>props.change(id)}>Zostało zrobione</button>}
             <button onClick={()=>props.delete(id)}>X</button>
            </p>
        </div>
     );
}
export default Task;