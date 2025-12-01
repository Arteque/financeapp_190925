import { forwardRef } from "react";
import clsx from "clsx";
import type { ButtonProps } from "./interface";


const Button = ({
    variant="primary",
    children, 
    className="",
    disabled = false,
    ...props
}:ButtonProps) => {
  return (
    <button 
    className={className}
    disabled={disabled}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button