import type { ButtonProps } from "../../../types/buttonType";

interface ButtonVariant extends ButtonProps {
  variant?: ButtonVariantKey;
}

const ButtonVariantStyling = {
  default: "block p-[1rem] border-none rounded-[.3125rem] duration-300",
  fulldark: "bg-grey-500 text-grey-100 text_sm--bold hover:bg-grey-400",
};

type ButtonVariantKey = keyof typeof ButtonVariantStyling;

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
