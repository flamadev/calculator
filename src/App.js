import './App.css';
import Button from './components/button.js';
import Pantalla from './components/pantalla';
import ButtonClear from './components/clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import LogoFreeCodeCamp from './components/logo';

function App() {
  const [input, setInput] = useState('');
  const agregarInput = (val) => {
    input === Infinity ? setInput(() => val) : setInput((input) => input + val);
  };
  const calcularResultado = () => {
    try {
      setInput(evaluate(input));
    } catch {
      setInput('Operacion invalida');
    }
  };

  return (
    <div className="App">
      <LogoFreeCodeCamp />

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Button handleClick={agregarInput}>1</Button>
          <Button handleClick={agregarInput}>2</Button>
          <Button handleClick={agregarInput}>3</Button>
          <Button handleClick={agregarInput}>+</Button>
        </div>
        <div className="fila">
          <Button handleClick={agregarInput}>4</Button>
          <Button handleClick={agregarInput}>5</Button>
          <Button handleClick={agregarInput}>6</Button>
          <Button handleClick={agregarInput}>-</Button>
        </div>
        <div className="fila">
          <Button handleClick={agregarInput}>7</Button>
          <Button handleClick={agregarInput}>8</Button>
          <Button handleClick={agregarInput}>9</Button>
          <Button handleClick={agregarInput}>*</Button>
        </div>
        <div className="fila">
          <ButtonClear manejarClear={() => setInput('')}>Clear</ButtonClear>
          <Button handleClick={agregarInput}>0</Button>
          <Button handleClick={agregarInput}>.</Button>
          <Button handleClick={agregarInput}>/</Button>
        </div>
        <div className="fila">
          <Button handleClick={calcularResultado}>=</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
