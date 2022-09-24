import React from 'react';
import TodoApp from "./TodoApp"

const Pagination = ({ skipUserPerPage, totalUsers,paginate }) => {
    const perNumber = [];
    for (let i = 1; i <= Math.ceil(totalUsers / skipUserPerPage); i++) {
        perNumber.push(i)
    }
    return (
        <div>
            <ul>

    {
        perNumber.map(number=>(
            <li key={number}>
                <a href="!#" onClick={()=>paginate(number)}>{number}</a>
            </li>
        ))
    }

            </ul>
        </div>
    )

}
export default Pagination;