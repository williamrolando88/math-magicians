import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className='grid grid-cols-4 w-max mx-auto mt-20'>
        <p className='col-span-4 bg-gray-500 text-white py-4 text-right px-2'>
          0
        </p>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          AC
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          +/-
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          %
        </button>
        <button className='py-4 px-6 border bg-orange-500' type='button'>
          /
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          7
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          8
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          9
        </button>
        <button className='py-4 px-6 border bg-orange-500' type='button'>
          *
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          4
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          5
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          6
        </button>
        <button className='py-4 px-6 border bg-orange-500' type='button'>
          -
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          1
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          2
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          3
        </button>
        <button className='py-4 px-6 border bg-orange-500' type='button'>
          +
        </button>
        <button
          className='py-4 px-6 border bg-slate-50 col-span-2'
          type='button'>
          0
        </button>
        <button className='py-4 px-6 border bg-slate-50' type='button'>
          .
        </button>
        <button className='py-4 px-6 border bg-orange-500' type='button'>
          =
        </button>
      </div>
    );
  }
}
