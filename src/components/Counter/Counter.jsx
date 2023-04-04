import React from 'react';
import {useState} from 'react' ;


const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
    
  };

  return (
    <div className='ticket__employee--counter'>
        <p>Counter</p>
        <span>{counter}</span>
        <div className='ticket__employee--plus--minus'> 
          <span className='ticket__employee__minus' onClick={handleDecrement}>-</span> 
          <span className='ticket__employee__plus'onClick={handleIncrement}>+</span>
        </div>
    </div>
  )
}

export default Counter