import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
export const User = () => {

    const { id } = useParams();
    const [user, setUser] = useState('');

    useEffect(() => {

        (async () => {
            const response = await fetch(`https://dummyjson.com/users?skip=${id - 1}&limit=1`);
            const { users } = await response.json();
            setUser(users[0]);
        })()

    }, [id])

    return (
        <>
            <figure>
                <img src = { user.image } alt="face"/>
                <figcaption>
                    <h2>{ user.firstName + ' ' + user.lastName }</h2>
                    <Link to="/users">return to users</Link>
                </figcaption>
            </figure>
        </>
    )
}