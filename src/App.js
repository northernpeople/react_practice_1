import React, { Component } from 'react';
import TodosComponent from "./TodosComponent"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosComponent/>
      </div>
    );
  }
}

export default App;
