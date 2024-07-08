import Button from './Button';
import Counter from './Counter';
import React from 'react';
import styles from '../../stylesheets/Counter/CounterView.module.css';


class CounterView extends React.Component{
  constructor(){
    super();
    this.state = {
      numClicks: 0
    }; 
    this.handleClick = this.handleClick.bind(this);
    this.restartCounter = this.restartCounter.bind(this);
  }

  handleClick(){
    this.setState(({ numClicks }) => ({ numClicks: numClicks + 1 }));
  }
  
  restartCounter(){
    this.setState({numClicks: 0 });
  }

  render(){
    return (
      <div className={styles.CounterView}>
        <div className={styles.mainContainer}>
          <Counter 
            numClicks= {this.state.numClicks}
          />
          <Button 
            text='Click'
            buttonType= 'clickButton'
            clickFunction={this.handleClick}
          />
          <Button 
            text='Restart'
            buttonType= 'restartButton'
            clickFunction={this.restartCounter}
          />
        </div>
      </div>
    );
  }
}


export default CounterView;
