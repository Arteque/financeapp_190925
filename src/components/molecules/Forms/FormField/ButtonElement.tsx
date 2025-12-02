import { FaCaretRight } from "react-icons/fa"
import Button from "../../../atoms/Link"
import type { ButtonProps } from "../../../atoms/Link"

interface ButtonElementProps extends ButtonProps{
    icon?:boolean;
    className?:string;
}

const ButtonElement = ({type, variant, children, className='', icon = false, ...props}:ButtonElementProps) => {
  return (
    <Button className={`${icon ? "flex gap-5 items-center justify-center" :"text-center"} ${className}`} type={type} variant={variant}  {...props} >
        <span>{children}</span> 
        {icon && <FaCaretRight className="text-grey-100" />}
    </Button>
  )
}

export default ButtonElement