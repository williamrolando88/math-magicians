import React from 'react';
import Calculator from './Calculator';

const App = () => {
  return (
    <main className="flex">
      <h2 className="text-4xl font-serif">Give me something to calculate!</h2>
      <div className="">
        <Calculator />
      </div>
    </main>
  );
};

export default App;
