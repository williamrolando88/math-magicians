import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, onClick } = props;

  Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  const validateName = (name) => ['÷', 'x', '-', '+', '='].includes(name);

  const getClases = (name) => {
    let classes = 'py-4 px-6 border active:text-white';
    if (validateName(name)) {
      classes += ' bg-orange-500 hover:bg-orange-400 active:bg-orange-900';
    } else {
      classes += ' bg-slate-50 hover:bg-slate-200 active:bg-slate-500';
    }
    if (name === '0') {
      classes += ' col-span-2';
    }
    return classes;
  };

  return (
    <button
      className={getClases(name)}
      type="button"
      name={name}
      onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
