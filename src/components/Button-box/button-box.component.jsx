import React from "react";
import './button-box.styles.scss'

const ButtonBox = ({children, color}) => {
    const sty = color ? {background: color} : {}
       return <>
            <button style={sty} className="button-box"> {children} </button>
        </>
}

export default ButtonBox