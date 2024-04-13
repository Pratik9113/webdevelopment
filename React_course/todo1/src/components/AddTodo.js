import { useState ,useRef} from "react";
function AddTodo({onNewItem}) {
    // const [todoName,setTodoName ] = useState()
    // const [dueDate,setDueDate] = useState() 
    const todoNameElement = useRef()
    const dueDateElement = useRef()


    // when you use useref over here 

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value)
    // }
    // const handleDateChange = ( event) =>{
    //     setDueDate(event.target.value)
    // }


    // state declare kiya then use hum add button click hone ke baad usko parent ke pass bhejenge then empty string karenge
    const handleAddButtonClicked = (event) =>{
        // console.log(event)
        // event.preventDefault();
        const todoName =  todoNameElement.current.value;
        const dueDate = dueDateElement.current.value;
        onNewItem(todoName,dueDate)
        todoNameElement.current.value = "";
        dueDateElement.current.value = ""
        // setDueDate("")
        // setTodoName("")
        // preventDefault 
   }
    return (
        <div className="container">
            <form  className="row kg-row"
            onSubmit={handleAddButtonClicked}
            >
            
                <div className="col-6">
                    <input type="text" 
                    //value = {todoName}  two way bounding is not required over here 
                    placeholder="Enter Todo  Here"
                    // onChange={handleNameChange}
                    ref = {todoNameElement}
                    />
                </div>
                <div className="col-4">
                    <input type="date" 
                    // value = {dueDate} 
                    // onChange={handleDateChange}
                    ref = {dueDateElement}
                    />
                </div>
                <div className="col-2">
                    <button 
                    type = "submit"
                    className="btn btn-success kg-button"
                    >Add</button>
                </div> 
            </form>
        </div>
    )
}
export default AddTodo;