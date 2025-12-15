import FormField from "../../molecules/Forms/FormField/FormField"

const InputText = ({id, label, placeholder,required=false, error, className, autoComplete, ...props}:{
    id:string;
    label:string;
    placeholder?:string;
    required: boolean;
    error?:string | null;
    className?:string;
    autoComplete?:string;
}) => {
  return (
    <FormField autoComplete={autoComplete} id={id} label={label} placeholder={placeholder} type="text" {...props} required={required} error={error} className={className}/>
  )
}

export default InputText