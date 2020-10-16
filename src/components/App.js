import React from "react";
import ItemsList from "./ItemsList";
import AddTask from "./AddTask";
// import TasksCompleted from "./TasksCompleted";

class App extends React.Component {
  state = {
     tasks: [
      {
        id: 1,
        content: "worldwide - na całym świecie",
        date: "31-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
      {
        id: 2,
        content: "regardless of your obstacles - niezależnie od twoich przeszkód",
        date: "16-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
      {
        id: 3,
        content: "matured - dojrzały;   entity - jednostka;   matured entity ?",
        date: "18-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
      {
        id: 4,
        content: "all in all - w sumie",
        date: "18-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
      {
        id: 5,
        content: "falter-wachać się,   faltered - zachwiać się",
        date: "18-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
      {
        id: 6,
        content: "keep moving forward/backwards - idź do przodu/tyłu",
        date: "18-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
      {
        id: 7,
        content: "acknowledge - uznać, potwierdzone, uznanie ? ",
        date: "18-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
      {
        id: 8,
        content: "obstacles - przeszkody",
        date: "18-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
      {
        id: 9,
        content: "kind of goofy - trochę głupkowaty",
        date: "18-10-2020",
        finnishDate:null,
        important: false,
        active: false,
        isDelete: false,
      },
    ]
  };

  handleDoneClick = (id) => {
    console.log('done elementu o id ' + id);
    let tasks = Array.from(this.state.tasks);
    tasks.forEach(task=>{
      if (task.id === id){
        task.active=true;
        task.finishDate = new Date().getTime();
      }
    })

  };

  handleDeleteClick = (id) => {
    console.log('delete elementu o id ' + id);
    
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id ===id);
    tasks.splice(index,1);


    this.setState({
      tasks,
    })  
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TO DO APP</h1>
          <AddTask />
          <ItemsList
            tasks={this.state.tasks}
            // clickDone={() => this.handleDoneClick(task.id)}
            change={this.handleDoneClick}
            delete={this.handleDeleteClick}
          />
          {/* <TasksCompleted tasks={this.state.tasks}/> */}
        </header>
      </div>
    );
  }
}

export default App;
