import TodoItem from "./TodoItem";
const TodoItems = ({todoItems}) => {
    return  ( <>
        <div className="item-container">
            {todoItems.map(item =>{ 
                return(
                    <TodoItem todoDate = {item.dueDate} todoName= {item.name}></TodoItem>
                )
            })}
        </div>
    </>
    )
};
export default TodoItems;