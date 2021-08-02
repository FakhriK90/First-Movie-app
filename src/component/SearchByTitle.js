import React from 'react'

const SearchByTitle = ({hundleTitle ,setSearch}) => {
    return (
        <div>
            <input
            type="text" 
            placeholder="Search" 
            className="mr-sm-2" 
            onChange={hundleTitle}
            value={setSearch}/>
        </div>
    )
}

export default SearchByTitle
