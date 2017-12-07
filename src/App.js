import React, { Component } from 'react';
import TodosComponent from "./TodosComponent"
import CreateTodoComp from "./CreateTodoComp"

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
    
    addTodo = (td) => {
                console.log("In root state: "+ this.state.todos)
        this.setState(
            (old) => ({ todos : old.todos.concat([td]) })
        );
    }

         
  render() {
    return (
        <div>
        <TodosComponent todos={this.state.todos} removeHandler={this.removeTodo}/>
        <CreateTodoComp addTodo={this.addTodo}/>
        </div>

    );
  }
}

export default App;