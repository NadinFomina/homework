import React, {useState} from 'react';
export default function Form (props){
const[text,setText]=useState('');
function sendMessage(e){
    e.preventDefault();
    fetch('hhtp://192.168.0.148:3000/messages',
    {
        method: 'POST',
        body: JSON.stringify({
            text,
            userId:props.userId
        }),
        headers:{
            'Content-type':'application/json',
            'Accept':'application/json'
        }
    });
}
return(
    <form onSubmit={sendMessage}>
        <textarea 
        onChange={(e)=>setText(e.target.value)}
        rows="3"/>
        <input type ="submit" value ="Send"/>
    </form>
)
}