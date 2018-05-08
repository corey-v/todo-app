import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reacto-do</h1>
        </header>
        <form>
          <input type="text" name="taskInput" />
          <input type="submit" value="Add Task" />
        </form>
      </div>
    );
  }
  
}

export default App;
