const Button = ({ title, addNewToDo }) => {
    return (
        <button className="btn" onClick={addNewToDo}>{title}</button>
    )
}

export default Button;