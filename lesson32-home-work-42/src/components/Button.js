const Button = ({ title, handleClickFunc }) => {
    return (
        <button className="btn" onClick={handleClickFunc}>{title}</button>
    )
}

export default Button;