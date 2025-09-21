import type { ButtonProps } from "../../../types/buttonType";

interface ButtonVariant extends ButtonProps {
  variant?: ButtonVariantKey;
}

const ButtonVariantStyling = {
  default: "rounded-[.3125rem] duration-300",
  fulldark:
    "block p-[1rem] bg-grey-500 text-grey-100 text_sm--bold hover:bg-grey-400",
  fullbeige:
    "block p-[1rem] bg-beige-500 text-grey-500 text_sm--bold border-2 border-transparent hover:bg-grey-100 border-grey-400 hover:border-grey-400",
  withIcon: "flex items-center gap_12",
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
export { ButtonVariantStyling };
export type { ButtonVariantKey };
export type { ButtonVariant };
