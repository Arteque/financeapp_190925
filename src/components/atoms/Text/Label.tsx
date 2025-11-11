import {forwardRef} from "react"
import clsx from "clsx"
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>{
  required : boolean;
  variant: "default" | "error" | "success"
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({children, required = false, variant="default", className="",...props}, ref) => {

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
)

Label.displayName = "Label"
export default Label