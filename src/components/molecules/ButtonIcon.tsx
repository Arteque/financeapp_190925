import Button from "../atoms/Buttons/Button";
import Icon from "../atoms/Icons/Icon";

import { FaCaretRight } from "react-icons/fa";
import SpanText from "../atoms/text/SpanText";

interface ButtonIconProps {
  children?: React.ReactNode | string;
}

const ButtonIcon = ({ children = "Place holder" }: ButtonIconProps) => {
  return (
    <Button variant="withIcon">
      <SpanText>{children}</SpanText>
      <Icon>
        <FaCaretRight />
      </Icon>
    </Button>
  );
};

export default ButtonIcon;
