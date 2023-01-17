import React from 'react'
const Slot = () => {

    let x = '🧡'
    let y = '🧡'
    let z = '❤'

    if (x === y && y === x) {
        return (
            <>
                <div>
                    <h4> {x} {y} {z} </h4>
                    <p>This is Matching Awwww...👍 </p>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div>
                    <h4> {x} {y} {z} </h4>
                    <p>This is Not Matching Awwww...👍 </p>
                </div>
            </>
        )
    } 
}

export default Slot
