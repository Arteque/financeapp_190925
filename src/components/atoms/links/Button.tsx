import ButtonVariantStyling from "./Variants";
import type {ButtonVariant } from "./Variants";



const Button = ({ className, children, variant, ...props }: ButtonVariant) => {
  return (
    <button
      className={`${ButtonVariantStyling.default} ${
        variant ? ButtonVariantStyling[variant] : ""
      }  ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
