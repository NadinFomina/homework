import {Fragment, useState} from "react";
import Form from "./Form";
import List from "./List";
import Controls from "./Controls";

export default function App() {
    const [tasks, setTasks] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState([]);
    function addTask(text){
        if(tasks.some( task => task.text === text.trim())){
            return;
        }
        setTasks([
            ...tasks,
            {
                id: Date.now(),
                text,
                isDone: false
            }])
    }
    function completeTask(id){
        setTasks(tasks.map(task => {
            if(task.id === id){
                task.isDone = !task.isDone;
            }
            return task
        }))
    }
    function completeAll(){
        setTasks(tasks.filter(task =>{
            if(selectedTasks.includes(task.id)) {
                task.isDone = true;
            }
            return task;
        }))
    }
    function selectAll(){
        setSelectedTasks(tasks.map(task => task.id));
    }
    return(
        <div>
            <List
                tasks={tasks}
                onComplete={completeTask}
                selectedTasks={selectedTasks}
                onChangeSelect={setSelectedTasks}
            />
            <Form onAddTask={addTask}/>
            <button onClick={selectAll}>Выбрать все</button>
            {selectedTasks.length > 0 && <Controls onCompleteAll={completeAll} />}
        </div>
    )
}
