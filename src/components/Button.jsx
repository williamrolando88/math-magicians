import React from 'react';

const Button = (props) => {
  const { name, index, onClick } = props;

  const validateName = (name) => {
    return ['÷', 'x', '-', '+', '='].includes(name);
  };

  const getClases = (name) => {
    let classes = 'py-4 px-6 border bg-slate-50';
    if (validateName(name)) {
      console.log(name);
      classes += ' bg-orange-500';
    } else {
      classes += ' bg-slate-50';
    }
    if (name === 0) {
      classes += ' col-span-2';
    }
    return classes;
  };

  return (
    <button
      className={getClases(name)}
      type='button'
      name={name}
      onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
