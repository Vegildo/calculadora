import React, {useState} from "react";
import "./styles.css";
import Botao from "./components/Botao";
import BotaoIgual from "./components/BotaoIgual";
import Operador from "./components/Operador";
import Display from "./components/Display";
import * as math from "mathjs";



const App = () => {
  const [input, setInput ] = useState('');

  const inserirNum = (val) => {
    setInput (input + val);
  }

  const inserirSimb = val => {
    if (input === '') {
      setInput (0 + val);
    } else {
      setInput (input + val);
    }
  }

  const inserirReset = () => {
    setInput ('');
  }

  const calcular = () => {
    if (input === '') {
      setInput ('Resposta é 0. Aprenda a usar a calculadora seu jumento')
    } else {
      setInput (math.evaluate(input));
    }
  }

  return (
    <div className="App">
      <h1>Calculadora do VV</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }} >
        <div className="calc-wrapper">
          <Display>{input}</Display>
          <div className="linha">
            <Botao onClick={inserirNum}>7</Botao>
            <Botao onClick={inserirNum}>8</Botao>
            <Botao onClick={inserirNum}>9</Botao>
            <Operador onClick={inserirSimb}>/</Operador>
          </div>
          <div className="linha">
            <Botao onClick={inserirNum}>4</Botao>
            <Botao onClick={inserirNum}>5</Botao>
            <Botao onClick={inserirNum}>6</Botao>
            <Operador onClick={inserirSimb}>*</Operador>
          </div>
          <div className="linha">
            <Botao onClick={inserirNum}>1</Botao>
            <Botao onClick={inserirNum}>2</Botao>
            <Botao onClick={inserirNum}>3</Botao>
            <Operador onClick={inserirSimb}>+</Operador>
          </div>
          <div className="linha">
            <Botao onClick={inserirSimb}>.</Botao>
            <Botao onClick={inserirNum}>0</Botao>
            <Botao onClick={inserirReset}>c</Botao>
            <Operador onClick={inserirSimb}>-</Operador>
          </div>
          <div className="linha">
            <BotaoIgual onClick={calcular}>=</BotaoIgual>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

