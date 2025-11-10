
interface LabelProps extends React.ReactElement<HTMLLabelElement>{
    htmlFor:string;
    children: React.ReactNode | string;
    className?:string;
}

const Label = ({htmlFor, children, className}:LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className || ''}>{children}</label>
  )
}

export default Label