import React, { Component } from 'react';
import calculate from '../logic/calculate';

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
    console.log(this.state);
  };

  componentDidUpdate = (prevProp, prevState) => {
    if (prevState.next !== this.state.next && this.state.next) {
      this.setState({ screen: this.state.next });
    }
    if (
      this.state.total &&
      !this.state.next &&
      prevState.total !== this.state.total
    ) {
      this.setState({ screen: this.state.total });
    }
    if (
      !this.state.total &&
      !this.state.next &&
      (prevState.next !== this.state.next ||
        prevState.total !== this.state.total)
    ) {
      this.setState({ screen: 0 });
    }
  };

  render() {
    return (
      <div className='grid grid-cols-4 w-max mx-auto mt-20'>
        <p className='col-span-4 bg-gray-500 text-white py-4 text-right px-2'>
          {this.state.screen}
        </p>
        <button
          name='AC'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          AC
        </button>
        <button
          name='+/-'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          +/-
        </button>
        <button
          name='%'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          %
        </button>
        <button
          name='÷'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-orange-500'
          type='button'>
          ÷
        </button>
        <button
          name='7'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          7
        </button>
        <button
          name='8'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          8
        </button>
        <button
          name='9'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          9
        </button>
        <button
          name='x'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-orange-500'
          type='button'>
          x
        </button>
        <button
          name='4'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          4
        </button>
        <button
          name='5'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          5
        </button>
        <button
          name='6'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          6
        </button>
        <button
          name='-'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-orange-500'
          type='button'>
          -
        </button>
        <button
          name='1'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          1
        </button>
        <button
          name='2'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          2
        </button>
        <button
          name='3'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          3
        </button>
        <button
          name='+'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-orange-500'
          type='button'>
          +
        </button>
        <button
          name='0'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50 col-span-2'
          type='button'>
          0
        </button>
        <button
          name='.'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-slate-50'
          type='button'>
          .
        </button>
        <button
          name='='
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-orange-500'
          type='button'>
          =
        </button>
      </div>
    );
  }
}
