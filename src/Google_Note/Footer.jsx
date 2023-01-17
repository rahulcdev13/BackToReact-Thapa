import React from 'react'
import './Note.css'

const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <div className='footer'>
      <h6 style={{ marginTop: '20px'}}>Google kepp note appllication @ {years}</h6>
    </div>
  )
} 
export default Footer
