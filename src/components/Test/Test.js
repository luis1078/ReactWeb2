import React from 'react';
import '../../stylesheets/Test/Test.css';

class Test extends React.Component{
  render(){
    return(
      <div className='container-test'>
        <img 
          className='image-test'
          src={require(`../../images/${this.props.image}`)}
          alt={`Foto de ${this.props.alt}`} />
        <div className='container-text-test'>
          <p className='name-test'><strong>{this.props.name}</strong></p>
          <p className='info-test'>{this.props.info}</p>
          <p className='text-test'>"{this.props.text}"</p>
        </div>
      </div>
    );
  }
}

export default Test;
