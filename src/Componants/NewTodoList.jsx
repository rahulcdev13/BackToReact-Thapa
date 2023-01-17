import React from 'react'
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { useState } from 'react';

const NewTodoList = (props) => {
    const [line, setLine] = useState(false)
    const lineCute = () => {
        setLine(true)
    }
    return (
        <>
            <li style={{ textDecoration: line ? 'line-through' : 'none' }}> <HighlightOffRoundedIcon onClick={lineCute} className='btndelte' /> {props.text}</li>
        </>
    )
}

export default NewTodoList
