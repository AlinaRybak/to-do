import React from "react";
import "./App.css";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";


function Todos ({task, toggleComplete, deleteTodo, editTodo}){
    return <div className="d-flex justify-content-center align-items-center">
        <div className="d-flex todo mt-3 w-50">
        <div className={`mr-auto p-2 ${task.completed ? "completed" : ""}`} onClick={()=>toggleComplete(task.id)}>{task.task}</div>
        <div className="p-2"><FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/></div>
        <div className="p-2"><FontAwesomeIcon icon={faTrash} onClick={()=>deleteTodo(task.id)}/></div>
    </div>
    </div>
}

export default Todos;