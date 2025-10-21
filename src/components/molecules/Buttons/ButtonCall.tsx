import Button from "../../atoms/Button/Button"
import IconSpan from "../../atoms/Icons/IconSpan";
import TextSpan from "../../atoms/Text/TextSpan"
import {twMerge} from "tailwind-merge"

interface ButtonCallProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    icon?: React.ReactElement<SVGElement | HTMLImageElement>;
    text?: React.ReactNode | string;
    textThenIcon:boolean;
}

const ButtonCall = ({className, icon, text, textThenIcon=false, ...props}:ButtonCallProps) => {
  return (
    <Button className={`${twMerge(className || "", textThenIcon ? "flex-row-reverse" : "")}`} {...props}>
        {icon && !textThenIcon && <IconSpan>{icon}</IconSpan>}
        {text && <TextSpan>{text}</TextSpan>}
        {icon && textThenIcon && <IconSpan>{icon}</IconSpan>}
    </Button>
    )
}

export default ButtonCall