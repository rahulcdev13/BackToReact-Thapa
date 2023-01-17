import React from 'react' 
const SearchResult = (props) => {
    const imagePath = `https://source.unsplash.com/user/erondu/900x400/?${props.res}`
    return (
        <>
            <img src={imagePath} alt="search" />
        </>
    )
}

export default SearchResult
