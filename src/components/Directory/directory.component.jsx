import React from "react";
import './directory.styles.scss'

import directory_data from "./directory-data";
import MenuItem from "../menu-item/menu-item.component";

const Directory = () => {
    return (
        <div className="directory">
            <div className="directory-heading">
                    <h1 className="directory-heading-name">Our <span>specialty</span></h1>
            </div>
            <div className="directory-con">
            {
                directory_data.map(({id, ...otherProps}) => {
                        return <MenuItem key={id} {...otherProps} />
                })
            }
            </div>
        </div>
    )
}

export default Directory