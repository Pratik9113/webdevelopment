import TodoItem from "./TodoItem";
const TodoItems = ({todoItems,onDeleteClick}) => {
    return  ( <>
        <div className="item-container">
            {todoItems.map(item =>{ 
                return(
                    <TodoItem todoDate = {item.dueDate} todoName= {item.name} onDeleteClick = {onDeleteClick}></TodoItem>
                )
            })}
        </div>
    </>
    )
};
export default TodoItems;