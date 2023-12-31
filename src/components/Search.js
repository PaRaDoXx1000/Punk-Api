import React from 'react'

const Search = (props) => {
    const {setSearchText, searchBeers} = props;

    return (
        <div className="search">
            <input type="text" placeholder="Search by name..." onChange={(e) => {searchBeers(e.target.value);setSearchText(e.target.value)}}/>
        </div>
    )
}

export default Search