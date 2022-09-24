import {useState, useEffect} from 'react'
import TodoApp from "./TodoApp";

export default function TableTodos(props){
    const users =props.users;
    const [skip, setSkip]=useState(0);
    return(<div>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>age</th>
                    <th>address</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user=>(
                    <tr 
                    className={props.selectUserId==user.id? 'selected':''}
                    key={user.id}
                    onClick={()=>props.onSelectUser(user.id)}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.age}</td>
                        <td>{user.address.address}</td>
                    </tr>
                ))}
            </tbody>
           
        </table>
       
        </div>
    )

}