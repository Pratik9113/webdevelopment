import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import TodoItem from "./TodoItem";
const TodoItems = () => {
    const contextObj = useContext(TodoItemsContext)
    const todoItems = contextObj.todoItems
    // const {deleteItem} = useContext(TodoItemsContext)
    console.log(todoItems)
    return (
        <div className="item-container">
            {todoItems.map((item) => ( 
                <TodoItem
                    todoDate={item.dueDate} 
                    todoName={item.name} 
                    // onDeleteClick={deleteItem}
                />
            ))}
        </div>
    );
};

export default TodoItems;
