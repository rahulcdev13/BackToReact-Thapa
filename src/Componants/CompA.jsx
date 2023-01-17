import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const CompA = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title=`You clicked of ${count}`
  },[count]) 

setTimeout(() => {
  setCount(count+1)
}, 1000);

  return (
    <> 
      <h1>{count}</h1>
      <button className='btn btn-success' onClick={()=>setCount(count+1)}>Click me</button>
    </>
  )
}

export default CompA
