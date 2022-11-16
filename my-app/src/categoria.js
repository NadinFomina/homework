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


export default function Categoria() {
    const [category, setCategoria] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const response = await fetch('http://192.168.0.158:3000/categories/'+ id)
            const json = await response.json();
            setCategoria(json);
        })()
    }, [id])

    return (
        (<>
           { category &&
            <div>
                <h1>{category.title}</h1>
                <ListMy posts={category.posts}/>
            </div>}
            </>
        )
        // <div className='container'>
        //     <ul>CATEGORY:
        //         {categories.map(categoria =>
        //             <li key={categoria.id} >
        //                 <Link to={`/categoria/${categoria.id}`}>{categoria.title}</Link>
        //                 {/* <a href="#">{category.title}</a> */}


        //             </li>
                    
        //         )}
        //     </ul>

        // </div>

        //   <article className='title-categiry'>Category:
        //         {categories.map(category =>(

        //            <a href ="#">{category.title}</a>

        //         ))}
        //    </article>
    )
}