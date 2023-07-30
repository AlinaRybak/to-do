import React, { useState } from "react";
import "./App.css";

function Todo({addTodo}){
    const [value, setValue] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value);
        setValue('');
    }

    return <div className="background-image">
    <form className="input-style" onSubmit={handleSubmit}>
    <input className="form-control form-control-lg text-center w-75" value={value} placeholder="Create a new todo..." 
    onChange={e => setValue(e.target.value)}>
    </input>
    <button type="button" class="btn btn-outline-secondary btn-style">Add Task</button>
    </form>
    </div>
};

export default Todo;