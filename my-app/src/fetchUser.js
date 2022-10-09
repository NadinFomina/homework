import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



export default function Users() {
    const [img, setUser] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://dummyjson.com/users');
            const json = await response.json();
            setUser(json.users)
        })()
    }, [])
    return (
        <div className='spisokUserov'>
            <ul>
            {img.map(user =>
            <li key={user.id}>
                <h2>{user.lastName} {user.firstName}</h2>
                <Link to={`${user.id}`}> info about user </Link>
            </li>
            

           
                // <Link key={img.id} to={`/img${img.image}`}>
                //     <img src={user.image} key={user.id} alt={user.firstName}/>
                  
                // </Link>
                )} 
                </ul>
        </div>
       



    )
 








} 