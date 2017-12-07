import React, {Component} from 'react'
import PropTypes from 'prop-types'


class TodosComponent extends Component {
    
     // controlled component
    state = { query : "" }
    updateQuery = (input) =>{ console.log("Updated to: "+input); this.setState( {query: input.trim()}) }
    

    

    
    render(){
        return(
            
            <div>
            <ul>
                {this.props.todos.map( td => (  
                    <li key={td}>{td}
                        <button onClick={() => this.props.removeHandler(td)}> Remove {td} </button>
                    </li>
                 
                 ))}
                
            </ul>
//             <input type="text" onChange={(event) => this.updateQuery(event.target.value)} />
            
//             <button onClick={() => this.addTodo(this.state.query)}> Add </button>


            
            </div>
        )
    }
}

export default TodosComponent;
