import { useState } from 'react'
import './index.css';

export default function TodoProps(props) {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [isActive, setIsActive] = useState(false);
    // const [element, setElement] = useState('');


    const handleClick = (item) => {

        setIsActive(list.filter(el => (el === item.event.target) ? isActive : !isActive));

    };

    // 👇️ or set to true
    // setIsActive(!isActive);
    // };

    // const handleClick = (item, index) => {

    //     setList(list.filter(el => (el === index) ? item.className = 'task' : item.className = 'item'));

    // }



    function addItemInSpisok() {
        setList([...list, text]);
        setText('');
    }
    function delItem(elem) {
        setList(list.filter(el => (el !== elem)));

    }

    return (
        <div className='conteiner-input'>
            <input type="text"
                value={text}
                className='input'
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                onClick={() => addItemInSpisok()}
            > Add list</button>
            <ol
                className='spisok-del'>

                {list.map((item, index) =>

                    <li

                        className='item'
                        style={{
                            textDecoration: isActive ? 'line-through' : '',
                            color: isActive ? 'red' : '',
                        }}

                        index={index}
                        key={item.index}
                        onClick={() => handleClick()}

                    >
                        {item}
                        <input type='checkbox' onChange={() => handleClick}></input>
                        <button
                       
                            onClick={() =>delItem()}
                        >del</button>


                    </li>

                    
                )}
            </ol>

        </div>
    )
}