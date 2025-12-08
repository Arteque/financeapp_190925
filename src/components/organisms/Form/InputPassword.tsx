import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../../atoms/Input";
import { Label } from "../../atoms/Text";

const InputPassword = ({id, label, placeholder, type,info, className, ...props}:{
    id:string;
    label:string;
    placeholder?:string;
    type:string; 
    info?:string;
    className?:string;
}) => {

    const inputHandler = () => {

    }
    const showPasswordHandler = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowPassword(prev => !prev)
    }

    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
    <> 
    <Label variant="default" htmlFor="pass" required className={`text-grey-400  ${className}`}>Password</Label>   
    <div className="relative">
        <Input variant="default" type={showPassword?"password":"text"} required placeholder={placeholder} className="input w-full" onChange={inputHandler} id="pass" {...props} min={8}/> 
        <button className="absolute top-0 bottom-0 px-4 right-0 " type="button" onClick={showPasswordHandler}>
        {showPassword ? (
            <FaEye />
            ) : (
            <FaEyeSlash />
            )}  
        </button>
    </div>
    {info && info.length > 0 && <span className="block w-full text-right text-grey-400 text_xs">{info}</span>}
    </>
  )
}

export default InputPassword