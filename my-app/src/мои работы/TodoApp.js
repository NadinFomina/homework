import { useState, useEffect, Fragment } from "react";
import TableTodos from "./Todo_fetch";
import UserProfile from "./userProfile";
import './App.css';


export default function TodoApp() {
    const [user, setUser] = useState([]);
    const [selectUser, setSelectUser] = useState();
    const [skip, setSkip] = useState(0);


    useEffect(() => {
        async function loadData() {
            const response = await fetch('https://dummyjson.com/users/?limit=5&skip='+skip);
            const json = await response.json();
            setUser(json.users);
        }
        loadData();
    }, [skip]);




    return (
        <Fragment>
            <UserProfile userId={selectUser} />
            <TableTodos
                users={user}

                onSelectUser={(id) => setSelectUser(id)}
                selectUserId={selectUser} />
            <button 
            onClick={()=>setSkip(skip-5)}
            >pre</button>
            <button onClick={()=>setSkip(skip+10)}>next</button>
        </Fragment>
    )
}