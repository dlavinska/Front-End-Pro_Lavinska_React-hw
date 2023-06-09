import { clsx } from 'clsx';

const Button = (props) => {

    const { type = "button", variant = "primary" } = props;
    return (
        <button
            className={clsx({
                "btn": true,
                "btn-primary": variant === "primary",
                "btn-secondary": variant === "secondary",
                "btn-success": variant === "success",
                "btn-danger": variant === "danger",
                "btn-warning": variant === "warning"
            })}
            type={type}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;