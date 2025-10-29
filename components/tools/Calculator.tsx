import React, { useState } from 'react';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [currentValue, setCurrentValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const handleDigitClick = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);
    if (currentValue === null || operator === null) return inputValue;

    let result = currentValue;
    switch (operator) {
      case '+':
        result += inputValue;
        break;
      case '-':
        result -= inputValue;
        break;
      case '*':
        result *= inputValue;
        break;
      case '/':
        result /= inputValue;
        break;
      default:
        break;
    }
    return result;
  };

  const handleOperatorClick = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (currentValue === null) {
      setCurrentValue(inputValue);
    } else if (operator) {
      const result = performCalculation();
      setCurrentValue(result);
      setDisplay(String(result));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };


  const handleEqualsClick = () => {
    if (operator) {
      const result = performCalculation();
      setCurrentValue(null); // Reset for new calculations
      setDisplay(String(result));
      setOperator(null);
      setWaitingForOperand(true);
    }
  };
  
  const handleDecimalClick = () => {
    if (waitingForOperand) {
        setDisplay('0.');
        setWaitingForOperand(false);
        return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setCurrentValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const buttonClass = "bg-zinc-800 hover:bg-zinc-700 text-slate-100 font-bold py-4 rounded-lg transition-colors text-xl";
  const operatorButtonClass = "bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-lg transition-colors text-xl";

  return (
    <div className="w-full max-w-xs mx-auto bg-black p-4 rounded-lg shadow-lg">
      <div className="bg-zinc-900 text-white text-right text-4xl p-4 mb-4 rounded-lg overflow-x-auto break-all">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button onClick={handleClearClick} className={`${operatorButtonClass} col-span-2`}>C</button>
        <button onClick={() => handleOperatorClick('/')} className={operatorButtonClass}>÷</button>
        <button onClick={() => handleOperatorClick('*')} className={operatorButtonClass}>×</button>

        <button onClick={() => handleDigitClick('7')} className={buttonClass}>7</button>
        <button onClick={() => handleDigitClick('8')} className={buttonClass}>8</button>
        <button onClick={() => handleDigitClick('9')} className={buttonClass}>9</button>
        <button onClick={() => handleOperatorClick('-')} className={operatorButtonClass}>−</button>

        <button onClick={() => handleDigitClick('4')} className={buttonClass}>4</button>
        <button onClick={() => handleDigitClick('5')} className={buttonClass}>5</button>
        <button onClick={() => handleDigitClick('6')} className={buttonClass}>6</button>
        <button onClick={() => handleOperatorClick('+')} className={operatorButtonClass}>+</button>

        <button onClick={() => handleDigitClick('1')} className={buttonClass}>1</button>
        <button onClick={() => handleDigitClick('2')} className={buttonClass}>2</button>
        <button onClick={() => handleDigitClick('3')} className={buttonClass}>3</button>
        <button onClick={handleEqualsClick} className={`${operatorButtonClass} row-span-2`}>=</button>

        <button onClick={() => handleDigitClick('0')} className={`${buttonClass} col-span-2`}>0</button>
        <button onClick={handleDecimalClick} className={buttonClass}>.</button>
      </div>
    </div>
  );
};

export default Calculator;