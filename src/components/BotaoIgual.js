import React from "react";
import "./components.css";

const BotaoIgual = ({ children, onClick }) => {
    return (
        <div>
            <div
            className="botao-wrapper botao btn-igual"
            onClick={() => onClick(children)}
            >
                {children}
            </div>
        </div>
    );
};

export default BotaoIgual;