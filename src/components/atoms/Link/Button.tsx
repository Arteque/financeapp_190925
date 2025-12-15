import clsx from "clsx";
import type { ButtonProps } from "./interface";


const Button = ({
    variant="primary",
    children, 
    className="",
    disabled = false,
    ...props
}:ButtonProps) => {

  const btnBase = "p-5 font-bold rounded-[8px] block w-full my-[2rem] duration-300"
  //p-5 bg-grey-500 text-grey-100 font-bold rounded block w-full my-[2rem] 
  const btnVariants =  {
    primary: "bg-grey-500 text-grey-100 hover:bg-grey-400",
    secondary:"bg-beige-100 text-grey-500",
    tertiary:"bg-wight-100 text-grey-400",
    destroy:"bg-red-100 text-grey-100"
  }

  const classes = `${btnBase} ${btnVariants[variant]} ${className}`.trim()

  return (
    <button 
    className={clsx(classes)}
    disabled={disabled}
    {...props}
    >
        {children}
    </button>
  )
}

export default Button