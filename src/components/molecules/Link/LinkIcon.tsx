import SpanContainer from "../../atoms/Containers/SpanContainer"
import Anchor from "../../atoms/Link/Anchor"
import SpanIcon from "../SpanIcon";
import { twMerge } from "tailwind-merge";

interface LinkIconProps extends React.HTMLProps<HTMLAnchorElement>{
    href:string;
    text:React.ReactNode | string;
    icon?: React.ReactElement<SVGElement | HTMLImageElement>
    iconAfterText:boolean;
}

const LinkIcon = ({className, href, text, icon, iconAfterText = false, ...props}:LinkIconProps) => {
  return (
    <Anchor href={href} className={twMerge(className || "", iconAfterText ? "flex flex-row-reverse":"flex flex-row")} {...props}>
        {
            icon && !iconAfterText && <SpanIcon>{icon}</SpanIcon>
        }
        <SpanContainer>
            {text}
        </SpanContainer>
        {
            icon && iconAfterText && <SpanIcon>{icon}</SpanIcon>
        }
    </Anchor>
  )
}

export default LinkIcon