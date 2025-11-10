
interface TextStandardProps extends React.ReactElement<HTMLSpanElement>{
    className?:string;
    children:React.ReactNode | string;
}

const TextStandard = ({className, children, ...props}:TextStandardProps) => {
  return (
    <span className={className || ''} {...props}>{children || "Add text to this span"}</span>
  )
}

export default TextStandard