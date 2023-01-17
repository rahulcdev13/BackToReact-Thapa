import { useState } from 'react';
import '../App.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Clock from 'react-digital-clock';  

const Main = () => {
  const [count, setcount] = useState(0)
  const [fullname, setfullname] = useState({
    firstName: '',
    surename: '',
    email: '',
    location: ''
  });
  const savedata = (e) => {
    e.preventDefault();
    alert('form submitted succeessfully...!')
  }
  const eventhander = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const { value, name } = e.target;

    setfullname((prevValue) => {

      return {
        ...prevValue,
        [name]: value
      } 
    })
  } 
  const increment = () => {
    setcount(count + 1)
  }
  const decrement = () => {
    if (count > 0) {
      setcount(count - 1)
    } else {
      alert('Zero limit is exceed..')
      setcount(0)
    }

  }
 

  return (
    <>
      <div> 
        <Clock style={{ color: 'red' }} />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <Button variant="contained">Hello World</Button>
      </div>
      <div className='vertical-center '>
        <form onSubmit={savedata}>

          <h1 className='color text-danger'>Hello {fullname.firstName} {fullname.surename} <br /> {fullname.email} {fullname.location}</h1><br />
          <input type="text" className="form-control" placeholder='Enter Your firstName' name='firstName' value={fullname.firstName} onChange={eventhander} /><br />
          <input type="text" className="form-control" placeholder='Enter Your surename' name='surename' value={fullname.surename} onChange={eventhander} /><br />
          <input type="email" className="form-control" placeholder='Enter Your email' autoComplete='off' name='email' value={fullname.email} onChange={eventhander} /><br />
          <input type="text" className="form-control" placeholder='Enter Your location' name='location' value={fullname.location} onChange={eventhander} /><br />
          <button className='btn btn-danger' type='submit'>Sumbit</button>
        </form>
        <div>
          <h1>Count : {count} </h1>
          <button className='btn btn-success' onClick={increment} type='submit'><AddIcon /></button>
          <button className='btn btn-danger' onClick={decrement} type='submit'> <RemoveIcon /></button>
        </div>
      </div>
    </>
  )
}

export default Main
