import React, { Component } from 'react';

export default class Calculator extends Component {
  state = {
    total: null,
    next: null,
    operation: null,
  };

  render() {
    return (
      <div className='grid grid-cols-4 w-max mx-auto mt-20'>
        <p className='col-span-4 bg-gray-500 text-white py-4 text-right px-2'>
          {this.state.total}
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
          name='/'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-orange-500'
          type='button'>
          /
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
          name='*'
          onClick={(e) => {
            this.handleClick(e);
          }}
          className='py-4 px-6 border bg-orange-500'
          type='button'>
          *
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
