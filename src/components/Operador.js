import React from "react";
import "./components.css";

const Operador = ({ children, onClick }) => {
    return (
        <div>
            <div
            className="botao-wrapper botao operacao"
            onClick={() => onClick(children)}
            >
                {children}
            </div>
        </div>
    );
};

export default Operador;