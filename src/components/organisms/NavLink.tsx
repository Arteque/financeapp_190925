import clsx from "clsx"
import LinkIcon from "../molecules/Links/LinkIcon"
import type { IconType } from "react-icons";

interface NavLinkProps {
    icon:IconType;
    children: string;
    to:string;
    className?:string;
}

const NavLink = ({icon, children, to, className}:NavLinkProps) => {
  return (
    <LinkIcon icon={icon} children={children} className={clsx(className)} to={to}/>
  )
}

export default NavLink