import React from 'react';
import Posts from './Router';
import { Link } from 'react-router-dom';

export default function ListMy(props) {
    return (
        <div className='Post-list'>
            {props.posts.map(post =>
                <article key={post.id}>
                    <Link
                        to={`/posts/${post.id}`}>
                        <h3>{post.title}</h3>
                        </Link>
                    <img src={post.image} alt={post.title}></img>
                    <p>{post.paragraphs.shift()}</p>
                </article>
            )}</div>
    )

}