import { useState, useEffect } from 'react';


export default function NextBlog({setNewpost,props}) {
    const [newBlog, setnewBlog] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch(`http://localhost:3000/posts/${props.id}`);
            const json = await response.json();
            setnewBlog(json);
        })()

    }, []);
    function handelBack(){
        setNewpost()
    }

    return (
        <div className='container-newblog'
            key={newBlog.id}
        >
            <img src={newBlog.image} alt={newBlog.id} />
            <h1>Blog {newBlog.id}</h1>
            <section>{newBlog.text}</section>
            <button className='btn-blog'
            onClick={()=>handelBack()}
            >Назад</button>






        </div>
    )
}
