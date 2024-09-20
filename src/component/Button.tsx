import React from "react";
import "./Button.css";


type Props={
    onClick: () =>void;
    text:string;
    disabled?:boolean;
};

const Button: React.FC<Props> = ({onClick, text, disabled}) => {
    return (
    <button
    className="button" 
    onClick={onClick} 
    disabled={disabled} 
        style={{
            backgroundColor:disabled 
            ?"rgb(244, 202, 202)"
            :"red",
            background:"white",
            padding:"10px",
            margin:"10px",
            borderRadius:"5px",
            cursor:"pointer",
        }}
    >
        {text}
    </button>
    )
};
export default Button;