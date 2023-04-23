import React from "react";
import './search-input-box.styles.scss'

const SearchInputBox =  ({search ,...props}) => {
    return (
        <input 
            {...props}
            className="search-input-box"
            autoComplete="off"
        />
    )
}

export default SearchInputBox