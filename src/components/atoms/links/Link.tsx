import { Link as Lk } from "react-router-dom";
import ButtonVariantStyling from "./Variants";
import type { LinkPropsExtended } from "./Variants";


const Link = ({
  href,
  className,
  children,
  variant = "default",
  ...props
}: LinkPropsExtended) => {
  return (
    <Lk
      to={href}
      className={`${ButtonVariantStyling.default} ${
        ButtonVariantStyling[variant]
      } ${className || ""}`}
      {...props}
    >
      {children}
    </Lk>
  );
};

export default Link;
