
import React from 'react'
import { useState } from 'react'
import './todo.css'
import Todolist from './Todolist'; 
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const Todo = () => {
  const [todoName, setTodoName] = useState('');
  const [items, setitems] = useState([]);

  const eventhandler = (e) => {
    setTodoName(e.target.value)
  }
  const addtodoList = () => {
    setitems((prevlist) => {
      return [...prevlist, todoName];
    })
    setTodoName('');
  }
  const deleteitem = (id) => {
    setitems((prevlist) => {
      return prevlist.filter((arrElement, index) => {
        return index !== id;
      })
    })
  }
  return (
    <><br />
      <div className='mains'>
        <h3 className=' titles align-content-center text-danger'>ToDo-List Application</h3>
        <div className='displa'>
          <input type="text" className="form-control" placeholder="Enter Your todo..! "
            onChange={eventhandler}
            name='todoName'
            value={todoName} required />&nbsp;
          <button className='btn btn-danger' onClick={addtodoList}> <AddCircleOutlinedIcon /> </button>
        </div><hr />
        <div className='todolist'>
          <ol className='list'>
            {items.map((lists, index) => {
              return <Todolist
                key={index}
                id={index}
                text={lists}
                onselect={deleteitem} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}
export default Todo
