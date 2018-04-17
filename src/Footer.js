import React, {Component} from 'react'


class FooterComp extends Component{


  state = { goodbye: "thanks for stopping by!"};

  render(){
    return(
      <div>
      <h2> New Footer </h2>
      <h3> {this.state.goodbye} </h3>
      <h4> {this.props.todos.map( td => (

        <p key={td}>{td}</p>
      ))} </h4>
      </div>
    )
  }
}

export default FooterComp;
