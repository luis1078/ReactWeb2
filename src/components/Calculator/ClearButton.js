import React from "react";
import '../../stylesheets/Calculator/ClearButton.css'

const ClearButton = (props) =>(
    <div className='clear-button' onClick={props.handleClick}>
        {props.children}
    </div>
);

export default ClearButton;