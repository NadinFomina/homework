import {Fragment,useState} from 'react';
import Auth from './chat';
import List from './chatSpisok';
import Form from './chatForma';

export default function Appchat(){
    const [user,setUser]=useState();
    return(
        <Fragment>
            {!user && <Auth onSelectUser={setUser}/>}
            {user && <List/>}
            {user && <Form userId={user.id}/>}
        </Fragment>
    )
}