import clsx from "clsx";
import { useRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  variant:"default" | "error" | "success";
  error?:boolean;
  required?:boolean;
  autoComplete?:string;
}


const Input = ({ variant = "default", error = false, className = "", type = "text", required, autoComplete, ...props }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  
  const baseClasses = "input w-full"
  const variantClasses = {
    default: !error ? "border-grey-300 focus::ring-grey-200" : "border-red-100 focus:ring-2",
    error: "border-red-100 focus:ring-red-100",
    success: "border-green-100 focus:ring-green-200"
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  
  return <input autoComplete={autoComplete} type={type} className={clsx(classes)} ref={ref} {...props} aria-invalid={error?"true":"false"} required={required}/>
  
}

export default Input