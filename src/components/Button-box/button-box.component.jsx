import React from "react";
import './button-box.styles.scss'

const ButtonBox = ({children}) => {
       return <>
            <button className="button-box"> {children} </button>
        </>
}

export default ButtonBox