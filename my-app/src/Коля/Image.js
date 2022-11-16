import React, {useEffect, useState } from 'react'
import { Link, useParams} from 'react-router-dom'

export default function Image(){
    
    const [img, setImg] = useState([]);

   useEffect(()=>{
    (async()=>{
        const response = await fetch(`https://dummyjson.com/users/`);
        const json = await response.json()
        setImg(json.users)
    })()
   },[])

   return(
    <div>
        

        {img.map(user=>
      <Link key = {img.id} to={`/img${img.image}`}>
        <img src={user.image} key={user.id}/>
        </Link>)}

    </div>
   )

   
}
