import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskItem from './components/TaskItem';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toDo: ["exampleTask"]
    }

    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  /**
   * 
   * @param {string} task | the string to add to the task list
   */
  addTask(task) {
    let newTask = task.taskInput;
    let currentTasks = this.state.toDo;

    //Check if empty, if not then add to task list
    if (newTask.trim().length > 0) {
      currentTasks.push(newTask);
      this.setState({
        toDo: currentTasks
      })
    }

  }

  /**
   * 
   * @param {string} task | the string to match in the task list and remove
   */
  removeTask(task) {
    
    let currentTasks = this.state.toDo;
    for(let i=0; i< currentTasks.length; i++){
      if(currentTasks[i] === task){
        currentTasks.splice(i,1);
      }
    }
    
    this.setState({
      toDo: currentTasks
    })
  }

  render() {
    let i = 0;
    const taskItems = this.state.toDo.map((task) => <li key={i++}><TaskItem removeTask={this.removeTask} task={task} /></li>);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reacto-do</h1>
        </header>
        <h2>Add A Task</h2>
        <TaskInput addTask={this.addTask} />
        <br />
    
        <ul>
            {taskItems}
        </ul>
      </div>
    );
  }

}

export default App;
