import React, { Component } from 'react';
import TodosComponent from "./TodosComponent";
import CreateTodoComp from "./CreateTodoComp";
import {Route} from "react-router-dom";
import Footer from "./Footer";
import Loading from "./Loading";

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
        this.setState(
            (old) => ({ todos : old.todos.concat([td]) })
        );
    }


  render() {
    return (
        <div>
            <Route path="/" exact render={ ()=>( <TodosComponent todos={this.state.todos} removeHandler={this.removeTodo}/>
                    )}
            />
            <Route path="/create" render={({history})=>(
                <CreateTodoComp addTodo={ (td) =>{  this.addTodo(td);
                                                    history.push("/"); } }/> ) }
            />

            <Loading />
            <Footer todos={this.state.todos} />
        </div>

    );
  }
}

export default App;
