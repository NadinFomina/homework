import { useEffect, useState } from 'react'
export default function Auth(props) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch('http://192.168.0.148:3000/users');
            const json = await response.json();
            setUsers(json);
        })()
    }, [])

    return (
        <div>
            <h1>выберите пользователя:</h1>
            <ul>
                {users.map(user =>
                    <li
                        key={user.id}>
                        {user.name}
                        <img src={user.avatar} />
                        <button onClick={() => props.onSelectUser(user)}>Select user</button>
                    </li>)}
            </ul>
        </div>
    )
}