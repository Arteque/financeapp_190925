interface IconProps{
    className?:string;
    children:React.ReactNode;
}

const Icon = ({className, children,...props}:IconProps) => {
  return (
    <span className={`${className || ""}`} {...props}>{children}</span>
  )
}

export default Icon