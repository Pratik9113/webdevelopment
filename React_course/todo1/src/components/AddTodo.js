import { useState } from "react";
import TodoItem from "./TodoItem";

function AddTodo({onNewItem}) {
    const [todoName,setTodoName ] = useState()
    const [dueDate,setDueDate] = useState() 

    const handleNameChange = (event) => {
        setTodoName(event.target.value)
    }
    const handleDateChange = ( event) =>{
        setDueDate(event.target.value)
    }


    // state declare kiya then use hum add button click hone ke baad usko parent ke pass bhejenge then empty string karenge
    const handleAddButtonClicked = () =>{
        onNewItem(todoName,dueDate)
        setDueDate("")
        setTodoName("")
    }
    return (
        <div className="container">
            <div className="row kg-row">
            <div className="col-6">
                <input type="text" value = {todoName} placeholder="Enter Todo  Here" onChange={handleNameChange}/>
            </div>
            <div className="col-4">
                <input type="date" value = {dueDate} onChange={handleDateChange}/>
            </div>
            <div className="col-2">
                <button type="button" className="btn btn-success kg-button"
                onClick={handleAddButtonClicked}
                >Add</button>
            </div> 
            </div>
        </div>
    )
}
export default AddTodo;