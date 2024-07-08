import React from "react";
import '../../stylesheets/Calculator/CalButton.css';

function Button(props) {
  const isOperator = value => {
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  return (
    <div
      className={`button-container ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Button;
