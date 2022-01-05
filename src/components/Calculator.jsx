import React, { Component } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

export default class Calculator extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
    screen: 0,
  };

  handleClick = (e) => {
    const state = calculate(this.state, e.target.name);
    this.setState({ ...state });
  };

  render() {
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
      <div className='grid grid-cols-4 w-max mx-auto mt-20'>
        <p className='col-span-4 bg-gray-500 text-white py-4 text-right px-2'>
          {this.state.next === null
            ? this.state.total === null
              ? 0
              : this.state.total
            : this.state.next}
        </p>

        {buttonValue.map((button, index) => (
          <Button key={index} name={button} onClick={this.handleClick} />
        ))}
      </div>
    );
  }
}
