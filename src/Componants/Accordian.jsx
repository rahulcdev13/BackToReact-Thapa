import React, { useState } from 'react'
import {questions} from './AccordianApi';
import MyAccordian from './MyAccordian';
import './Accordian.css'

const Accordian = () => {
    const [data,setData] =useState(questions);
  return (
    <div className='main-div'>
        <h1>Accourdian</h1>
        {data.map((newdata,index)=>{
            const {id,questions,answer} = newdata;
            return <MyAccordian key={index} {...newdata} /> 
        })}
    </div>
  )
}

export default Accordian
