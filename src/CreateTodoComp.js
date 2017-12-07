import React, {Component} from 'react'
import PropTypes from 'prop-types'


class CreateTodoComp extends Component {
    
    
    // local state
    state = { query : "" }
    updateQuery = (input) =>{ this.setState( {query: input.trim()}) }
    
    render(){
        console.log("controlled component state: "+ this.state.query);
        return (
            <div>
                <h2> Hi! from create Todos</h2>
                <input type="text" onChange={(event) => this.updateQuery(event.target.value)} value={this.state.query} />

                <button onClick={( ) => {
                                 this.props.addTodo(this.state.query);
                                 this.updateQuery("");
                                }}> Add </button>
            </div>
        )
    }
}
 
export default CreateTodoComp;