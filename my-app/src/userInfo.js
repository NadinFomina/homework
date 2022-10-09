import { useEffect,useState } from "react";
import { Link,useParams } from "react-router-dom";

export default function User(){
    const [user,setUser]=useState('');
    const {id}=useParams();
    useEffect (()=>{
        (
            async ()=>{
                const response = await fetch(`https://dummyjson.com/users?skip=${id - 1}&limit=1`);
                const {users}= await response.json();
                setUser(users[0]);

            })()
        
    },[id])

    return(
        <div>
             <>
            <figure>
                <img src = { user.image } alt="face"/>
                <figcaption>
                    <h2>{ user.firstName + ' ' + user.lastName }</h2>
                    <article>
                       <b> Age:</b> {user.age}<br/>
                       <b>Email:</b> {user.email}<br/>
                       <b>Phone:</b> {user.phone}
                    </article>

                <button> <Link to="/">return to users</Link></button>
                </figcaption>
            </figure>
        </>
        </div>
    )

}