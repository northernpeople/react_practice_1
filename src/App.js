import React, { Component } from 'react';
import TodosComponent from "./TodosComponent"
import logo from './logo.svg';
import './App.css';

class App extends Component {
    
    state  = {
      todos : ["clean my room", "buy milk"]
    }


removeTodo = (tdRemove) => {
    this.setState(
      (old) => ( { todos : old.todos.filter( e => e !== tdRemove ) } )
    );
  }
            
  render() {
    return (
      <div className="App">
        <TodosComponent todos={this.state.todos} removeHandler={this.removeTodo}/>
      </div>
    );
  }
}

export default App;



