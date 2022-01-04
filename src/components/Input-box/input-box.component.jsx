import React from "react";
import './input-box.styles.scss'

const InputBox = ({children,bigBox,bigBoxup, ...props}) => {
    return(
    <>
        {
            children && <label className="input-box-label">{children}</label>
        }
        <input {...props}  className={`${bigBox && "big"} ${bigBoxup && "big-box-up"} input-box`}/>
    </>
)}

export default InputBox