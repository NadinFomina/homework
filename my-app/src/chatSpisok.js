import {useState, useEffect} from 'react';
export default function List(){
    const[messages,setMessages]=useState([]);
    useEffect(()=>{
        async function loadData(){
            const response =await fetch('hhtp://192.168.0.148:3000/messages')
            const json = await response.json();
            setMessages(json);

        }
        setInterval(loadData,2000);
    },[])
    return(
        <ul>
            {messages.map(message=><li>
                <img src={message.user.avatar}/>
                <time>{message.time}</time>
                <p>{message.text}</p>
            </li>)}
        </ul>
    )
}
