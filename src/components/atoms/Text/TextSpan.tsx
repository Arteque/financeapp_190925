
interface TextSpanProps extends React.HTMLProps<HTMLSpanElement>{
    className?:string;
    children: React.ReactNode | string;
}

const TextSpan = ({className, children, ...props}:TextSpanProps) => {
  return (
    <span className={`${className ||""}`} {...props}>{children}</span>
  )
}

export default TextSpan