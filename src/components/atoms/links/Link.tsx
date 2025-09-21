import { Link as Lk } from "react-router-dom";
import type { LinkProps } from "../../../types/linkType";
import type { ButtonVariantKey } from "../Buttons/Button";
import { ButtonVariantStyling } from "../Buttons/Button";

interface LinkPropsExtended extends LinkProps {
  variant?: ButtonVariantKey;
}

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
