import { Link } from "react-router-dom"

export interface LinkTagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
    to:string;
    children: React.ReactNode | string;
}

const LinkTag = ({to, children, ...props}:LinkTagProps) => {
  return (
    <Link to={to} {...props}>
        {children}
    </Link>
  )
}

export default LinkTag