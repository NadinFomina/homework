import {useState} from "react";
export default function Form(props){
    const [text, setText] = useState('')
    function submit(e){
        e.preventDefault();
        props.onAddTask(text);
        setText('')
    }
    return (<form onSubmit={submit}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <input type="submit" value="Add"/>
    </form>)
}