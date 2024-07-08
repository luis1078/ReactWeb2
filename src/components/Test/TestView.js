import React from 'react';
import egresados from './data';
import Test from './Test';
import styles from '../../stylesheets/Test/TestView.module.css';

class TestView extends React.Component{
  render(){
    return (
      <div className={styles.App}>
        <div className={styles.mainContainer}>
          <h1 className='asd'>Celebres egresados de la Universidad Sideral Carrion</h1>
          {egresados.map((egresado, index) => (
            <Test 
              key={index}
              name={egresado.name}
              alt={egresado.alt}
              text={egresado.text}
              info={egresado.info}
              image={egresado.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default TestView;
