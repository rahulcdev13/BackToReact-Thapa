import React from 'react'
const Slot = () => {

    let x = '๐งก'
    let y = '๐งก'
    let z = 'โค'

    if (x === y && y === x) {
        return (
            <>
                <div>
                    <h4> {x} {y} {z} </h4>
                    <p>This is Matching Awwww...๐ </p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <h4> {x} {y} {z} </h4>
                    <p>This is Not Matching Awwww...๐ </p>
                </div>
            </>
        )
    } 
}

export default Slot
