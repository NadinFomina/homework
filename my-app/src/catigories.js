import React from 'react';
import './router.css'
import { useState, useEffect } from 'react';
import Posts from './Router';
import ListMy from './list';
import {
    Routes,
    Route,
    Link,
    useParams,
} from "react-router-dom";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const response = await fetch('http://192.168.0.158:3000/categories')
            const json = await response.json();
            setCategories(json);
        })()
    }, [])

    return(
        <ul className='list-item'>
            Categories:
            {categories.map(category=>(<li key={category.slug}>
                <Link to={`/category.id}`}>{category.title}</Link>
            </li>))}
        </ul>
    )
}