import FormField from "../../molecules/Forms/FormField/FormField"

const InputText = ({id, label, placeholder,required=false, error, ...props}:{
    id:string;
    label:string;
    placeholder?:string;
    required: boolean;
    error?:string | null;
}) => {
  return (
    <FormField id={id} label={label} placeholder={placeholder} type="text" {...props} required={required} error={error}/>
  )
}

export default InputText