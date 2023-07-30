import React, { useState } from "react";
import "./App.css";

function EditTodoForm({editTodo, task}){
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue('');
    }

    return <div>
    <form className="input-style-edit" onSubmit={handleSubmit}>
    <input className="form-control form-control-lg text-center w-75" value={value} placeholder="Update task..." 
    onChange={e => setValue(e.target.value)}>
    </input>
    <button type="button" class="btn btn-outline-secondary btn-style">Update Task</button>
    </form>
    </div>
};

export default EditTodoForm;