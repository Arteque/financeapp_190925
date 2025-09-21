import { FaCaretRight } from "react-icons/fa";
import Icon from "../atoms/Icons/Icon";
import Link from "../atoms/links/Link";
import SpanText from "../atoms/text/SpanText";

interface LinkIconProps {
  children?: React.ReactNode | string;
}

const LinkIcon = ({ children = "Place holder", ...props }: LinkIconProps) => {
  return (
    <Link
      href="#"
      variant="withIcon"
      className=" hover:[&_svg]:translate-x-2"
      {...props}
    >
      <SpanText>{children}</SpanText>
      <Icon>
        <FaCaretRight className="transition-all duration-300" />
      </Icon>
    </Link>
  );
};

export default LinkIcon;
