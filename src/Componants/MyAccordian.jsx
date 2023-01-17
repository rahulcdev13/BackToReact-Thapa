import React from 'react'
import { useState } from 'react'
import './Accordian.css'

const MyAccordian = ({questions,answer}) => {
    const [show,setShow] = useState(false)
  return (
    <>
      <div className='main-heading'>
        <p onClick={()=>setShow(!show)}>{show? " ➖ " : " ➕ " }</p>
        <h3>{questions}</h3>
      </div>
      {
        show && <p className='answers'>{answer}</p>
      }
      
    </>

  )
}

export default MyAccordian
