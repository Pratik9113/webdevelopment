import { useState ,useRef} from "react";
function AddTodo({onNewItem}) {
    const [todoName,setTodoName ] = useState()
    const [dueDate,setDueDate] = useState() 
    const noOfUpdates = useRef(0)


    const handleNameChange = (event) => {
        setTodoName(event.target.value)
        noOfUpdates.current += 1;
    }
    const handleDateChange = ( event) =>{
        setDueDate(event.target.value)
        console.log(`no of updates are : ${noOfUpdates.current}`)
    }


    // state declare kiya then use hum add button click hone ke baad usko parent ke pass bhejenge then empty string karenge
    const handleAddButtonClicked = (event) =>{
        console.log(event)
        event.preventDefault();
        onNewItem(todoName,dueDate)
        setDueDate("")
        setTodoName("")
        // preventDefault 
   }
    return (
        <div className="container">
            <form  className="row kg-row"
            onSubmit={handleAddButtonClicked}
            >
            
                <div className="col-6">
                    <input type="text" value = {todoName} placeholder="Enter Todo  Here" onChange={handleNameChange}/>
                </div>
                <div className="col-4">
                    <input type="date" value = {dueDate} onChange={handleDateChange}/>
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