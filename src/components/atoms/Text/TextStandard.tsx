import clsx from "clsx"


export interface TextStandardProps extends React.ReactHTMLElement<HTMLSpanElement>{
    className?:string;
    children:React.ReactNode | string;
}

const TextStandard = ({className='', children, ...props}:TextStandardProps) => {
  return (
    <span className={clsx(className)} {...props}>{children}</span>
  )
}

export default TextStandard