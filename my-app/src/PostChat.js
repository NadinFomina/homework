import React from 'react';
import { useState, useEffect } from 'react'
import NextBlog from './newBlog';
import { Fragment } from 'react';

export default function Post({ newBlog, setNewBlog, id }) {
  const [top, setTop] = useState([]);
  const [newpost, setNewpost] = useState();


  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3001/posts');
      const json = await response.json();
      setTop(json);
    })()

  }, [])
  function handelClick(id) {
    setNewpost(id);
    

  }
  return (
    <Fragment>
      <div className='container-blog'>
        {newpost ? <NextBlog newpost={newpost} setNewpost={setNewpost} /> :
          <ul>
            {top.map((top) =>
              <li
                key={top.id}
              >
                <img src={top.image} alt={top.id} />
                <h1>Blog {top.id}</h1>

                <section>{top.text}</section>
                <button className='btn-blog'
                  onClick={() => handelClick(top.id)}
                >next Blog</button>

              </li>)}


          </ul>
        }

      </div>
    </Fragment>
  )
}