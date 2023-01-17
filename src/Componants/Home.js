import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../App.css'

const Home = () => {
  const Location = useLocation();
  const navigate = useNavigate() 
  const { name, lname } = useParams();
  return (
    <>
      <h1 >Hello User {name} {lname} page is here ...!  </h1>
      <p>My Current Location is {Location.pathname}</p>
      {Location.pathname === `/home/rahul/chavan` ? <button className='btn btn-danger' onClick={() => { alert('Its Awesome rahul..!') }}>Click me</button> : ''}
      <h1 style={{ color: "green" }}>GeeksForGeeks</h1>
      <button className='btn btn-primary' onClick={() => navigate("/")}>About</button>
    </>
  )
}
export default Home
