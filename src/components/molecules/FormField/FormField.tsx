import Input, { type InputProps } from "../../atoms/Input/";
import { Label } from "../../atoms/Text";

interface FormFieldProps extends Omit<InputProps, 'id' | 'aria-describedby' | 'variant' | 'error'>{
  id: string;
  label:string;
  required?:boolean;
  error?:string |  null;
  helperText?:string;
  type:string;
  Icon?:React.ReactNode;
}


const FormField = ({id, label, required = false, error, helperText, type, Icon, ...inputProps}:FormFieldProps) => {
  return (
    <>
    <Label variant="default" htmlFor={id} required={required}  className="text_xs--bold text-grey-400">
      {label}
    </Label>
    {
      type === "password" ? (
        <div className="relative">
          <Input id={id} variant={error ? "error" : "default"} error={!!error} aria-describedby={error ? `${id}-error`: helperText? `${id}-helper`:undefined} {...inputProps} />
    {type === "password" && (
      Icon
    )}
        </div>
      ) : (
        <Input id={id} variant={error ? "error" : "default"} error={!!error} aria-describedby={error ? `${id}-error`: helperText? `${id}-helper`:undefined} {...inputProps} />
      )
    }
    {error && (
      <span className="text-red-500">{error}</span>
    )}
    </>
  )
}

export default FormField