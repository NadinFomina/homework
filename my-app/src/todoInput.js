import React from 'react';

const TodoInput=({text,setText,addList})=>{
    return(
        <div className='todo-input'>
            <input 
            type='text'
            name='list'
            value={text}
            placeholder='add text'
            onChange={(e)=>{
                setText(e.target.value)
            }}
            />
            <button className='add-item' 
            onClick={()=>addList()}>Add </button>
        </div>
    )
}
export default TodoInput