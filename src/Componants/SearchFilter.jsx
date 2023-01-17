import React from 'react'
import { useState } from 'react'
import SearchResult from './SearchResult';

const SearchFilter = () => {
    const [search,setSearch] = useState('');
    console.log(search);
    return (
        <>
            <h1>Search Live Filter 🔍</h1>
            <div>
                <input type='text' 
                onChange={(e)=>{setSearch(e.target.value)}} 
                className='form-control' 
                placeholder='Enter your thoughts...!'
                value={search} /> <br/> 
                { search === "" ? null :  <SearchResult res ={search} /> }
            </div>
        </>
    )
}

export default SearchFilter
