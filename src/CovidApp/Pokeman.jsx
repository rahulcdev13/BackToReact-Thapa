import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

const Pokeman = () => {
    const [data,setData] = useState() 
    const [name,setname] = useState() 
    const [moves,setmoves] = useState() 
    
    useEffect(() => { 
    async function  getData(){
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data}`); 
        console.log(response.data);
        setname(response.data.name);
        setmoves(response.data.moves.length)

    }
    getData();
},)
    
  return (
    <>
      <div>
        <h1>You Choose {data} Value </h1>
        <h1>You got {name} name </h1>
        <h1>Your moves is  {moves} moves </h1>
        <select value={data} onChange={(e)=>[
            setData(e.target.value)
        ]}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="7">7</option>
        </select>
      </div>
    </>
  )
}

export default Pokeman
