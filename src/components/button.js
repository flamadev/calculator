import React from 'react';
import '../stylesheets/button.css';

function Button(props) {
  const isOperator = (valor) => {
    return isNaN(valor) && valor !== '.' && valor !== '=';
  };

  return (
    <div
      className={`boton-contenedor ${
        isOperator(props.children) ? 'operador' : null
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
