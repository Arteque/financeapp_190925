import type { ButtonProps } from "../../../types/buttonType";
import type { LinkProps } from "../../../types/linkType";

interface ButtonVariant extends ButtonProps {
  variant?: ButtonVariantKey;
}

interface LinkPropsExtended extends LinkProps {
  variant?: ButtonVariantKey;
}

const ButtonVariantStyling = {
  default: "rounded-[.3125rem] duration-300",
  fulldark:
    "block p-[1rem] bg-grey-500 text-grey-100 text_sm--bold hover:bg-grey-400",
  fullbeige:
    "block p-[1rem] bg-beige-500 text-grey-500 text_sm--bold border-2 border-transparent hover:bg-grey-100 hover:border-beige-200",
  fullorangered:
    "block p-[1rem] bg-red-100 text-grey-100 text_sm--bold border-2 border-transparent hover:bg-red-200 border-grey-100",
  withIcon: "flex text-grey-400 items-center gap_12 text_sm",
  withIcon_bold: "flex text-grey-400 items-center gap_12 text_sm--bold",
};

type ButtonVariantKey = keyof typeof ButtonVariantStyling;

export default ButtonVariantStyling


export type {ButtonVariantKey, ButtonVariant, LinkPropsExtended}