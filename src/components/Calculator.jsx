import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (e) => {
    const {
      total: newTotal,
      next: newNext,
      operation: newOperation,
    } = calculate({ total, next, operation }, e.target.name);
    setTotal(!newTotal ? null : newTotal);
    setNext(!newNext ? null : newNext);
    setOperation(!newOperation ? null : newOperation);
  };

  const buttonValue = [
    'AC',
    '+/-',
    '%',
    '÷',
    7,
    8,
    9,
    'x',
    4,
    5,
    6,
    '-',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '=',
  ];

  return (
    <div className="grid grid-cols-4 w-max mx-auto mt-20">
      <p className="col-span-4 bg-gray-500 text-white py-4 text-right px-2">
        {next === null ? (total === null ? 0 : total) : next}
      </p>

      {buttonValue.map((button) => (
        <Button key={button} name={button} onClick={handleClick} />
      ))}
    </div>
  );
};

export default Calculator;
