import Button from "../../atoms/Button/Button"
import Icon from "../../atoms/Icons/Icon"
import TextSpan from "../../atoms/Text/TextSpan"

interface ButtonCallProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    icon?: React.ReactElement<SVGElement | HTMLImageElement>;
    text?: React.ReactNode | string;
}

const ButtonCall = ({className, icon, text, ...props}:ButtonCallProps) => {
  return (
    <Button className={`${className || ""}`} {...props}>
        {icon && <Icon>{icon}</Icon>}
        {text && <TextSpan>{text}</TextSpan>}
    </Button>
    )
}

export default ButtonCall