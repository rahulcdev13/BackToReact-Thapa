import React from 'react'
import './Note.css'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const CreateNote = () => {
  return (
    <>
     <div className='main-div'>
      <input type='text' placeholder='Title'  />
      <textarea rows="" cols="" placeholder='enter your notes'></textarea>
      <Button variant="contained"> <AddCircleOutlineIcon /> </Button>

      
      </div>
    </>
   
  )
}

export default CreateNote
