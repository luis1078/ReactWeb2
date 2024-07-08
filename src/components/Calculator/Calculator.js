import { useState, useImperativeHandle, forwardRef } from "react";
import { evaluate } from "mathjs";
import Screen from "./Screen";

const Calculator = forwardRef((props, ref) => {
  const [input, setInput] = useState('');
  const [resultShown, setResultShown] = useState(false);
  const isOperator = (value) => {
    return ['+', '-', '*', '/'].includes(value);
  };

   useImperativeHandle(ref, () => ({
    addInput: (value) => {
      if (resultShown) {
        if (isOperator(value)) {
          setInput(prevInput => prevInput.slice(0, -1) + value);
        } else {
          setInput(value);
        }
        setResultShown(false);
      } else {
        if (isOperator(value) && isOperator(input.slice(-1))) {
          setInput(prevInput => prevInput.slice(0, -1) + value);
        } else {
          setInput((prevInput) => prevInput + value);
        }
      }
    },
    clearInput: () => {
      setInput('');
      setResultShown(false);
    },
    calculateResult: () => {
      if (input) {
        setInput(evaluate(input).toString());
        setResultShown(true);
      } else {
        setInput('');
      }
    }
  }));

  return (
    <div>
      <Screen input={input} />
    </div>
  );
});

export default Calculator;
