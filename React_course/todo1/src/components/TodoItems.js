import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClick }) => {
    return (
        <div className="item-container">
            {todoItems.map((item, index) => ( 
                <TodoItem
                    key={index} // Use index as key, but ideally, use a unique identifier from your data
                    todoDate={item.dueDate} 
                    todoName={item.name} 
                    onDeleteClick={onDeleteClick}
                />
            ))}
        </div>
    );
};

export default TodoItems;
