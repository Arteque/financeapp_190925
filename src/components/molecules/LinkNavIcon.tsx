import type { LinkProps } from "../../types/linkType";
import Icon from "../atoms/Icons/Icon";
import LinkNav from "../atoms/links/LinkNav";
import SpanText from "../atoms/text/SpanText";

interface LinkNavIconProps extends LinkProps {
  icon: React.ReactNode | string;
  src: string;
  children: React.ReactNode | string;
  href: string;
}

const LinkNavIcon = ({
  src,
  href,
  children,
  icon,
  ...props
}: LinkNavIconProps) => {
  return (
    <LinkNav href={href} {...props}>
      <Icon>{icon}</Icon>
      <SpanText>{children}</SpanText>
    </LinkNav>
  );
};

export default LinkNavIcon;
