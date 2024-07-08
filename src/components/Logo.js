import React from "react";
import reactLogo from '../images/react-logo.png'
import '../stylesheets/Logo.css'

function Logo(){
    return(
        <div className='react-logo-container'>
        <img 
          src={reactLogo}
          className='react-logo'
          alt= 'logo'
          />
          </div>
    );
}

export default Logo;