import React from 'react'
import './todo.css'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Todolist = (props) => {
    return <li><DeleteRoundedIcon className='delteicon' onClick={() => { props.onselect(props.id) }} /> {props.text}</li>
}
export default Todolist
