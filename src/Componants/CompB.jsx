import React from 'react' 
import { useState } from 'react'

const CompB = () => {
  const [count, setCount] = useState(0);
 
  return (
    <> 
      <h1>{count}</h1>
      <button className='btn btn-success' onClick={()=>setCount(count+1)}>Click me</button>
    </>
  )
}

export default CompB
