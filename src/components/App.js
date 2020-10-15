import React from "react";
import ItemsList from "./ItemsList";
import AddTask from "./AddTask";
import TasksCompleted from "./TasksCompleted";

const tasks = [
  {
    id: 1,
    content: "worldwide - na całym świecie",
    date: "31-10-2020",
    finnishDate: "11-11-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
  {
    id: 2,
    content: "regardless of your obstacles - niezależnie od twoich przeszkód",
    date: "16-10-2020",
    finnishDate: "17-10-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
  {
    id: 3,
    content: "matured - dojrzały;   entity - jednostka;   matured entity ?",
    date: "18-10-2020",
    finnishDate: "19-10-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
  {
    id: 4,
    content: "all in all - w sumie",
    date: "18-10-2020",
    finnishDate: "19-10-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
  {
    id: 5,
    content: "falter-wachać się,   faltered - zachwiać się",
    date: "18-10-2020",
    finnishDate: "19-10-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
  {
    id: 6,
    content: "keep moving forward/backwards - idź do przodu/tyłu",
    date: "18-10-2020",
    finnishDate: "19-10-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
  {
    id: 7,
    content: "acknowledge - uznać, potwierdzone, uznanie ? ",
    date: "18-10-2020",
    finnishDate: "19-10-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
  {
    id: 8,
    content: "obstacles - przeszkody",
    date: "18-10-2020",
    finnishDate: "19-10-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
  {
    id: 9,
    content: "kind of goofy - trochę głupkowaty",
    date: "18-10-2020",
    finnishDate: "19-10-2020",
    isImportant: false,
    isDone: false,
    isDelete: false,
  },
];

class App extends React.Component {
  state = {};

  handleDoneClick = () => {
    console.log("klik DONE działa");
  };

  handleDeleteClick = () => {
    console.log("klik Delete działa");
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TO DO APP</h1>
          <AddTask />
          <ItemsList
            tasks={tasks}
            clickDone={this.handleDoneClick}
            clickDelete={this.handleDeleteClick}
          />
          <TasksCompleted />
        </header>
      </div>
    );
  }
}

export default App;
