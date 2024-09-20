import "./Button.css";
import { useState} from 'react'
import React from "react";

type ButtonProps={
    text?:string;
    disabled?:boolean;
};

const Saying: React.FC<ButtonProps> = ({text,disabled}) => {

    const [mostrarMensaje, setMostrarMensaje] = useState(false);

    const manejarClick = () => {
        setMostrarMensaje(prev => !prev); 
    };

    return (
          <div>
            <button  
            disabled={disabled} 
            onClick={manejarClick}
            >
            
            {mostrarMensaje ? 'Ocultar refrán' : 'Mostrar refrán'}
            </button>
            {mostrarMensaje && <p>{text}</p>} 
        </div>
    );
};

export default Saying;


