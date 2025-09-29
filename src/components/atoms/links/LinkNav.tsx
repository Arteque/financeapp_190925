import { NavLink } from "react-router-dom";
import type { LinkProps } from "../../../types/linkType";

const LinkNav = ({
  href,
  children,
  className,
  isActive,
  ...props
}: LinkProps) => {
  return (
    <NavLink to={href} className={`${className || ""} ${isActive}`} {...props}>
      {children}
    </NavLink>
  );
};

export default LinkNav;
