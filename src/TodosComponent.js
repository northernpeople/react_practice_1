import React, {Component} from 'react'
import PropTypes from 'prop-types'


class TodosComponent extends Component {
    
    render(){
        return(
            <ul>
                {this.props.todos.map( td => (
                 
                    <li key={td}>{td}
            
                    <button onClick={() => this.props.removeHandler(td)}> Remove {td} 
                    </button>
                    
                    </li>
                 
                 ))}
                
            </ul>
        )
    }
}

export default TodosComponent;
