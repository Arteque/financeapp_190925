import Label from "../../atoms/Text/Label"

type FormFieldProps = {
    htmlFor: string;
    children: React.ReactNode | string;
    className?: string;
}

const FormField = ({htmlFor, children, className}: FormFieldProps) => {
  return (
    <Label className={className || ""} htmlFor={htmlFor}>{children}</Label>
  )
}

export default FormField