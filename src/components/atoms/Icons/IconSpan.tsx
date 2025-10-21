interface IconProps{
    className?:string;
    children:React.ReactNode;
}

const IconSpan = ({className, children,...props}:IconProps) => {
  return (
    <span className={`${className || ""}`} {...props}>{children}</span>
  )
}

export default IconSpan