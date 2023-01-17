import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Covid.css'

const Covid = () => {
    const [apidata, setdata] = useState([]);



    const getData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json')
        const actualdata = await res.json()
        setdata(actualdata.statewise);
    }
    console.log(apidata)

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <h1>India Covid-19 Dashboard </h1> 
            <div className='divs'> 
                <table>
                    <thead>
                        <tr>
                            <th>confirmed</th>
                            <th>active</th>
                            <th>confirmed</th>
                            <th>active</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {apidata.map((newdata,index) => {
                            return (
                                <>
                                    <tr>
                                        <td>{newdata.confirmed}</td>
                                        <td>{newdata.active}</td>
                                        <td>{newdata.deltaconfirmed}</td>
                                        <td>{newdata.deltadeaths}</td>
                                      
                                    </tr>
                                </>
                            )
                        })} 
                    </tbody> 
                </table>  
            </div> 

        </>
    )
}

export default Covid
