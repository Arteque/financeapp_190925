import type { IconType } from "react-icons";
import { Icon } from "../../atoms/Icons"
import LinkTag from "../../atoms/Link/LinkTag"
import type { LinkTagProps } from "../../atoms/Link/LinkTag"

interface LinkIconProps extends LinkTagProps{
    icon:IconType;
} 

const LinkIcon = ({to, icon, children, ...props}:LinkIconProps) => {
  return (
    <LinkTag to={to} {...props}>
        <span><Icon icon={icon} /></span> 
        <span>{children}</span>
    </LinkTag>
  )
}

export default LinkIcon