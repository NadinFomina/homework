import { useState } from 'react'
import './index.css';

export default function TodoList() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [isActive, setIsActive] = useState(false);
    // const [element, setElement] = useState('');
    const handleClick = (value) => {
        setIsActive(list.filter(el => (el === value.target) ? isActive : !isActive));

    };

    // 👇️ or set to true
    // setIsActive(!isActive);
    // };

    // const handleClick = (item, index) => {

    //     setList(list.filter(el => (el === index) ? item.className = 'task' : item.className = 'item'));

    // }



    function addItemInSpisok() {
        if (text !== '') {
            setList([...list, text]);
            setText('');
        }

    }
    const deleteItem = (item) => {
        const newList = list.filter((list) => {
            return list !== item;
        });
        setList(newList);

    }

    return (
        <div className='conteiner-input'>
            <h1>Мой список дел</h1>
            <input type="text"
                placeholder='Запишите дело на сегодня'
                value={text}
                className='input'
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => addItemInSpisok()}
            > Add list
            </button>
            <ol
                className='spisok-del'>
                {list.map((item, index) =>

                    <li
                        index={index}
                        key={item.index}
                        className='item'
                        // style={{
                        //     textDecoration: isActive ? 'line-through' : '',
                        //     color: isActive ? 'red' : '',
                        // }}
                        onClick={() => handleClick(list)}
                    >
                        {item}
                        {/* <input type='checkbox' onChange={() => handleClick}></input> */}
                        <button
                            onClick={() => deleteItem(text)}
                        ></button>
                    </li>
                )}
            </ol>
        </div>
    )
}