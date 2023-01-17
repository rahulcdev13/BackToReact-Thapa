import React from 'react'
import CreateNote from './CreateNote'
import Footer from './Footer'
import Header from './Header'
import './Note.css'

const Note = () => {
  return (
    <>
      <div className=''>
        <Header />
        <CreateNote />
        <Footer />
      </div>
    </>
  )
}

export default Note
