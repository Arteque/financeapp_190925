import FormField from "../../molecules/FormField/FormField"

const InputText = ({id, label, placeholder,required=false,  ...props}:{
    id:string;
    label:string;
    placeholder?:string;
    required: boolean;
}) => {
  return (
    <FormField id={id} label={label} placeholder={placeholder} type="text" {...props} required={required}/>
  )
}

export default InputText