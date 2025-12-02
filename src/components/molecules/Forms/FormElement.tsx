import clsx from "clsx"

interface FormElementProps extends React.FormHTMLAttributes<HTMLFormElement>{
    children:React.ReactNode|string;
    className?:string;
}

const FormElement = ({children, className='', ...props}:FormElementProps) => {
  return (
    <form className={clsx(className)} {...props}>{children}</form>
  )
}

export default FormElement