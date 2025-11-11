import Input, { type InputProps } from "../../atoms/Input/";
import { Label } from "../../atoms/Text";

interface FormFieldProps extends Omit<InputProps, 'id'>{
  id: string;
  label:string;
  required?:boolean;
  error?:string |  null;
  helperText?:string;
}


const FormField = ({id, label, required = false, error, helperText, ...inputProps}:FormFieldProps) => {
  return (
    <>
    <Label variant="default" htmlFor={id} required={required}>
      {label}
    </Label>
    <Input id={id} error={!!error} aria-describedby={error ? `${id}-error`: helperText? `${id}-helper`:undefined} {...inputProps} />
    {error && (
      <span className="text-red-500">{error}</span>
    )}
    </>
  )
}

export default FormField