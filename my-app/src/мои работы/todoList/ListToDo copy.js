import { useState } from 'react';

export default function ListToDo() {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    function addItemInSpisok() {
        if (text !== '') {
            setList([...list, text]);
            setText('');
        }
    }

}