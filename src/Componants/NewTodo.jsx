
import React from 'react'
import { useState } from 'react'
import './todo.css'
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import NewTodoList from './NewTodoList';

const NewTodo = () => {
    const [item, setItem] = useState('');
    const [newitem, setNewitem] = useState([])

    const eventhandler = (e) => {
        setItem(e.target.value)
    }
    const addtodoList = () => {
        setNewitem((preValue) => {
            return [...preValue, item]
        })
        setItem('')
    }
    // const deletelist = (id) => {
    //     setNewitem((preValue)=>{
    //         return preValue.filter((arrElem,index)=>{
    //             return index!==id
    //         })
    //     })
    // } 

    return (
        <><br />
            <div className='mains'>
                <h3 className=' titles align-content-center text-danger'>ToDo-List Application</h3>
                <div className='displa'>
                    <input type="text" className="form-control" placeholder="Enter Your todo..! "
                        onChange={eventhandler}
                        name='item'
                        value={item} required />&nbsp;
                    <button className='btn btn-danger' onClick={addtodoList}> <AddCircleOutlinedIcon /> </button>
                </div><hr />
                <div className='todolist'>
                    <ol className='list'>
                        {newitem.map((data, index) => {
                            // return <NewTodoList text={data} key={index} id={index} onSelect={deletelist} />
                            return <NewTodoList text={data} key={index} id={index} />
                        })}
                    </ol>
                </div>
            </div> 
        </>
    )
}
export default NewTodo
