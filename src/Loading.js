import React, {Component} from "react";

class Loading  extends Component{
  constructor(props){
    super(props);

    this.state = {
      text: "Loading"
    }
  }

  componentDidMount(){

    window.setInterval(() => {
      this.setState((old) => {
        console.log(old.text.indexOf("..."));
        if(old.text.indexOf("...") != -1) return {text : "Still loading"}
        else return {text : old.text + "."}
      })
    }, 777);
  }

  render(){
    return <h2> {this.state.text} </h2>;
  }


}

export default Loading;
