import React, { Component } from "react";

class AddTask extends Component {

  count = 10;
  state = {
   
      date:"2020-10-20",
      // date: new Date().toISOString().slice(0,10),
      content:"",
      important:false,
    
  };

  contentTaskHandler = (e) => {
    // this.setState(prevState=>{
      // let newTask = Object.assign({}, prevState.task);
      // newTask.content = 'nie mam wiadra';
      // return {newTask};
      this.setState({
      content:e.target.value
      })
    }
    
  
  importantHandler = (e)=>{   
    this.setState({
        important:!this.state.important
      })
  }

  dateHandler = (e) => {
    this.setState({
      date:e.target.value
    })
  }

  submitHandler = () =>{
    const task = {
      id:this.count,
      date:this.state.date,
      content:this.state.content,
      important:this.state.important,
      finnishDate:null,
      active: true,
      isDelete: false,

    }
     this.count++;
 
    // this.setState((prevState)=>{
    //   state:[...prevState, task]
    // }
    this.props.add()
    }

  render() {
    return (
      <>
        <div className="form">
          <div>
          <input onChange={this.contentTaskHandler} type="text"/>
          <label htmlFor="important">
          <input type="checkbox" placeholder="Dodaj nowe zadanie" id="important" onChange={this.importantHandler} checked={this.state.important}/>
          Priorytet</label>
          </div>
          <div>
          <label htmlFor="date">
            Do kiedy zrobić
            <input type="date" id="date" onChange={this.dateHandler} value={this.state.date} min="2020-10-01" max="2020-12-31"/>
          </label>
          </div>
          <button onClick={this.submitHandler}>Dodaj</button>
        </div>

        <hr />
      </>
    );
  }
}
export default AddTask;
