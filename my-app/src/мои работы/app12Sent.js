// import { useState, Fragment, useEffect } from "react";
// // export default function MyApp(){
// //     const [count,setCount]=useState(0);
// //     const[delta,setDelta]=useState(1)
// //     // function click(){
// //     //     setCount(count +1);
// //     // }
// //     useEffect(()=>{
// //         document.title=`Clicked:${count}`;
// //     },[count])
// //     return (
// //         <Fragment>
// //             <p>{count}</p>
// //             <input 
// //             type='number'
// //              value ={delta} 
// //              onChange={(e)=>setDelta(Number.parseInt(e.target.value))}/>
// //             <button onClick={()=>setCount(count+delta)}>click me</button>
// //         </Fragment>
// //     )
// // }
// export default function MyApp() {
//     const [text, setText] = useState('');
//     const [spisok, setSpisok] = useState([]);

//     function addItem() {
//         setSpisok([...spisok, text]);
//         setText('');
//     }
//     function delItem(item) {
//         setSpisok(spisok.filter(el => el !== item));

//     }
//     function TrItem(item){
//         setSpisok(spisok.filter(el =>(el==item) ? item.className='TRitem':item.className='item'))
//     }

//     return (
//         <Fragment>
//             <input
//                 type="text"
//                 value={text}
//                 onChange={(e) => setText(e.target.value)} />
//             <button onClick={() => addItem()}>click me</button>
//             <ul>

//                 {spisok.map((item, index) =>

//                     <li 
//                     key={index}>
// { item }
//                         <input type="checkbox" onChange={()=> TrItem()}></input>
//                         <button onClick={() => delItem(item)}> del</button>
//                     </li>)}
//             </ul>
//         </Fragment>
//     )

// }
// import { useState, useEffect } from 'react';

// export default function MyApp() {
//   const [count, setCount] = useState(0);

  // По принципу componentDidMount и componentDidUpdate:
//   useEffect(() => {
//     // Обновляем заголовок документа, используя API браузера
//     document.title = `Вы нажали ${count} раз`;
//   });

//   return (
//     <div>
//       <p>Вы нажали {count} раз</p>
//       <button onClick={() => setCount(count + 1)}>
//         Нажми на меня
//       </button>
//     </div>
//   );
// }
