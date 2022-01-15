import React, {useState} from "react";
import "./styles.css";
import Botao from "./components/Botao";
import BotaoIgual from "./components/BotaoIgual";
import Operador from "./components/Operador";
import Display from "./components/Display";

const App = () => {
  const [input, setInput ] = useState('');

  const inserirNum = (val) => {
    setInput (input + val);
  }

  return (
    <div className="App">
      <h1>Calculadora do VV</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }} >
        <div className="calc-wrapper">
          <Display>{inserirNum}</Display>
          <div className="linha">
            <Botao>7</Botao>
            <Botao>8</Botao>
            <Botao>9</Botao>
            <Operador>/</Operador>
          </div>
          <div className="linha">
            <Botao>4</Botao>
            <Botao>5</Botao>
            <Botao>6</Botao>
            <Operador>*</Operador>
          </div>
          <div className="linha">
            <Botao>1</Botao>
            <Botao>2</Botao>
            <Botao>3</Botao>
            <Operador>+</Operador>
          </div>
          <div className="linha">
            <Botao>.</Botao>
            <Botao>0</Botao>
            <Botao>c</Botao>
            <Operador>-</Operador>
          </div>
          <div className="linha">
            <BotaoIgual>=</BotaoIgual>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

