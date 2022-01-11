import React from 'react';
import Calculator from './Calculator';

const App = () => (
  <main className="flex w-4/5 justify-between items-center">
    <h2 className="text-4xl font-serif">Give me something to calculate:</h2>
    <div className="">
      <Calculator />
    </div>
  </main>
);

export default App;
