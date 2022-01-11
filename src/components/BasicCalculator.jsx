import React from 'react';
import Calculator from './Calculator';

const BasicCalculator = () => (
  <main className="flex items-center justify-between w-3/5">
    <h2 className="text-2xl">Give me something to calculate!</h2>
    <div>
      <Calculator />
    </div>
  </main>
);

export default BasicCalculator;
