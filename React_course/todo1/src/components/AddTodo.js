import React, { useState, useRef, useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
    const [todoName, setTodoName] = useState("");
    const [dueDate, setDueDate] = useState("");
    const { addNewItem } = useContext(TodoItemsContext);
    const dueDateElement = useRef();

    const handleNameChange = (event) => {
        setTodoName(event.target.value);
    };

    const handleDateChange = (event) => {
        setDueDate(event.target.value);
    };

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        addNewItem(todoName, dueDate);
        setDueDate("");
        setTodoName("");
    };

    return (
        <div className="container">
            <form className="row kg-row" onSubmit={handleAddButtonClicked}>
                <div className="col-6">
                    <input
                        type="text"
                        value={todoName}
                        placeholder="Enter Todo Here"
                        onChange={handleNameChange}
                    />
                </div>
                <div className="col-4">
                    <input
                        type="date"
                        value={dueDate}
                        onChange={handleDateChange}
                        ref={dueDateElement} 
                    />
                </div>
                <div className="col-2">
                    <button
                        type="submit"
                        className="btn btn-success kg-button"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddTodo;
