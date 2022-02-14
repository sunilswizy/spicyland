import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import './menu-item.styles.scss'

const MenuItem = ({title, imageUrl, linkUrl, size, history}) => {
    return (
        <div 
            className={`menu-item ${size && "large"}`}
            onClick={() => history.push(`${linkUrl}`, title) } 
            >
                <div className="menu-item-img" style={{backgroundImage: `url(${imageUrl})`}} /> 
                <div className="menu-item-title">
                    <h1>{title}</h1>
                </div>
        </div>
    )
}

export default withRouter(MenuItem)