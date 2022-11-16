
// http://192.168.0.158:3000/posts//
import React from 'react';
// import './router.css'
import { useState, useEffect } from 'react';
import ListMy from './list';
// import {
//     BrowserRouter,
//     RouterProvider,
//     Route,
//     Link,
// } from "react-router-dom";


export default function Posts() {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://192.168.0.158:3000/posts');
            const json = await response.json();
            setPost(json);
        })()
    }, [])

    return (
  <ListMy posts={posts}/>
    )
}