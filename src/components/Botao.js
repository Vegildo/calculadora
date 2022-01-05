import React from "react";
import "./components.css";

const Botao = ({ children, onClick }) => {

    return (
        <div>
            <div
            className="botao-wrapper botao"
            onClick={() => onClick(children)}
            >
                {children}
            </div>
        </div>
    );
    //  const eUmNum = valor => {
    //      if (!isNaN(valor) || valor === 'C' || valor ==='.') {
    //          return true
    //      }
    //      return false;
    //  };

    //  const eUmIgual = valor => {
    //      if (valor === '=') {
    //          return true;
    //      }
    //      return false;
    //  };

    // return (
    //     <div>
    //         {isInput ? (
    //     <div className="input">{children}</div>
    //   ) : (
    //     <div
    //       className={`botao-wrapper botao ${eUmIgual(children) ? "btn-igual" : null} ${eUmNum(children) ? null : "operacao"}`}
    //       onClick={() => onClick(children)}>
    //       {children}
    //     </div>
    //   )}
    //     </div>
    // );
};




export default Botao;