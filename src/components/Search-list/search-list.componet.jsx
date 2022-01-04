import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import './search-list.styles.scss'

const SearchList = ({title, imageUrl, linkUrl, history}) => {
    return (
        <div className="search-list">
            <div className="lists" onClick={() => history.push(`${linkUrl}`, title)}>
                <div 
                    className="search-list-img" 
                    style={{backgroundImage: `url(${imageUrl}) `}}
                    />
                <div className="search-list-title">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    )
}

export default withRouter(SearchList)