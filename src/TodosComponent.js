import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class TodosComponent extends Component {
    
     // controlled component
   
    render(){
        return(     
            <div>
                <ul>
                    {this.props.todos.map( td => (  
                        <li key={td}>{td}
                            <button onClick={() => this.props.removeHandler(td)}> Remove {td} </button>
                        </li>)
                        )
                    }               
                </ul>
                <Link to="/create"> Add Todo</Link>
            </div>
        )
    }
}

export default TodosComponent;
