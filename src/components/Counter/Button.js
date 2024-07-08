import React from "react";
import '../../stylesheets/Counter/Button.css'

class Button extends React.Component{
  render(){
    return(
      <button className={ this.props.buttonType }
      onClick={this.props.clickFunction}>
        {this.props.text}
      </button>
    );
  }
}

export default Button;