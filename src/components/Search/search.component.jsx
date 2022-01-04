import React from "react";
import './search.styles.scss'

import SearchInputBox from "../Search-input-box/search-input-box.component";
import SearchList from "../Search-list/search-list.componet";
import directory_data from "../Directory/directory-data";

class Search extends React.Component{

    constructor() {
        super()
        this.state = {
            search: '',
            data: directory_data
        }
    }

    filteringData = () => {
        const {search} = this.state
        const filterData = directory_data.filter(({title}) => {
            return  title.toLowerCase().includes(search.toLowerCase())
         })

        //  if(filterData.length === directory_data.length) {
        //      this.setState({data: []})
        //  }
        // else{
            this.setState({data: filterData})
        // }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value}, this.filteringData)    
    }
 
    render() {
       const {search, data} = this.state
       const {history} = this.props
       const text = search ? "Clear" : ''
    return (
        <>
        <div className="search">
            <div className="search-con"><i className="fas fa-search"></i></div>
                <SearchInputBox 
                    value={search}
                    type="search"
                    placeholder="Search for Food!"
                    name="Search"
                    onChange={this.handleChange}
                    search={search}
                />

                <button 
                    className="search-btn" 
                    onClick={() => this.setState({search: ''}, this.filteringData)}
                >{text}</button>

                <button
                  className="search-close"
                  onClick={() => history.push('/')}
                  >
                     <i className="fas fa-times"></i>
                </button>
        </div>
        {
            data.map(({id, ...props}) => {
                    return <SearchList key={id} {...props} />
            })
        }
        </>
    )
    }
}

export default Search