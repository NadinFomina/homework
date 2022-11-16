import './style.css';
export default function List(props){
    function changeSelect(id){
        if(props.selectedTasks.includes(id)){
            props.onChangeSelect(props.selectedTasks.filter(taskId => taskId !== id))
        } else {
            props.onChangeSelect([...props.selectedTasks, id]);
        }

    }
    return (
        <ul>
            {props.tasks.map( task =>
                <li

                    className={task.isDone ? 'done' :''}
                    key={task.id}
                >
                    <input type="checkbox" checked={props.selectedTasks.includes(task.id)} onChange={()=>changeSelect(task.id)}/>
                    <span onClick={()=>props.onComplete(task.id)}>
                         {task.text}
                    </span>

                </li>)}
        </ul>
    )
}