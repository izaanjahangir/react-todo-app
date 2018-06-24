import React, { Component } from "react";
import Todoitem from "./todoitem";
import InputForm from "./inputForm";


class Todolist extends Component {


  constructor() {
    super();
    this.changeState = this.changeState.bind(this);
    this.getUserInput = this.getUserInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);    
    this.state = {
      task: [
        { name: "izaan", isDone: false },
        { name: "faraz", isDone: false }
      ],
      current: ""
    };
  }


  changeState(index) {
    let tasks = this.state.task;
    let task = tasks[index];
    task.isDone = !task.isDone;
    this.setState({ task: tasks });
    console.log(tasks);
  }


  getUserInput(value) {
    let userInput = value.target.value;
    this.setState({ current: userInput });
    console.log(this.state.current);
  }


  addTask(e) {
    e.preventDefault();
    let tasks = this.state.task;
    let current = this.state.current;
    tasks.push({ name: current, isDone: false });
    this.setState({ tasks });
    this.setState({current: ''});
  }

  deleteTask(index){
    let task = this.state.task;
    task.splice(index,1);
    this.setState({task});
  }



  render() {
    return (
      <section>

        <InputForm addTaskHandler={this.addTask} getUserInputHandler={this.getUserInput} value={this.state.current} />

        <ul>
          {this.state.task.map((value, index) => (
              <Todoitem
                name={value}
                key={index}
                clickHandler={() => this.changeState(index)}
                deleteHandler={(e)=>{
                  e.stopPropagation();
                  this.deleteTask(index)
                }}
              />
          ))}
        </ul>
      </section>
    );
  }
}
export default Todolist;
