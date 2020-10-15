import React, { Component } from "react";

class ItemsList extends Component {
  state = {};
  render() {
    return (
      <>
        {this.props.tasks.map((task) => (
          <div key={task.id}>
            <strong>
              {task.id}.{task.content}
            </strong>
            do kiedy należy wykonać:
            <em />
            {task.date}
            <button onClick={this.props.clickDone}>Zadanie wykonane</button>
            <button onClick={this.props.clickDelete}>X</button>
          </div>
        ))}
        <hr />
      </>
    );
  }
}

export default ItemsList;
