import { forwardRef } from "react"
import clsx from "clsx"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  variant:"default" | "error" | "success";
  error?:boolean
}


const Input = forwardRef<HTMLInputElement, InputProps>(({variant = "default", error="false", className="",type="text",...props}, ref) => {
  
  
  const baseClasses = "input w-full"
  const variantClasses = {
    default: !error ? "border-grey-300 focus::ring-grey-200" : "border-red-100 focus:ring-2",
    error: "border-red-100 focus:ring-red-100",
    success: "border-green-100 focus:ring-green-200"
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  
  return (
    <input type={type} className={clsx(classes)} ref={ref} {...props} aria-invalid={error?"true":"false"} />
  )
})
Input.displayName = "Input"
export default Input