import FormField from "../../molecules/FormField/FormField"

const InputText = ({id, label, placeholder, ...props}:{
    id:string;
    label:string;
    placeholder?:string;
}) => {
  return (
    <FormField id={id} label={label} placeholder={placeholder} type="text" {...props}/>
  )
}

export default InputText