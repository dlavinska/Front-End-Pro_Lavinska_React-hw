const TodoListItem = ({ title, completed, handleCheck, removeTodo, id }) => {
    return (
        <li>
            <input type="checkbox" checked={completed} onChange={(e) => handleCheck(e.target.checked, id)} />
            <span>{title}</span>
            <button className="delete-btn" onClick={() => removeTodo(id)}>x</button>
        </li>
    )
}

export default TodoListItem;