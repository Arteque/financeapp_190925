import clsx from "clsx"
import { useRef } from "react";
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
  required : boolean;
  variant: "default" | "error" | "success"
}

const Label = ({children, required = false, variant="default", className="",...props}: LabelProps) => {

    const ref = useRef(null)
    const baseClasses = "text_xs--bold"
    const variantClasses = {
      default: "text-grey-400",
      error: "text-red-100",
      success: "text-gree-100"
    }

    const classes = `${baseClasses} ${variantClasses} ${className}`.trim()

  return (
    <label ref={ref} className={clsx(classes)}  {...props}>
       {children}
      {required && <span className="text-red-100" aria-label="Required"><b>*</b></span>}
    </label>
  )
}

export default Label