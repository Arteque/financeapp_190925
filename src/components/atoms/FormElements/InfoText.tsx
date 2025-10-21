import { twMerge } from "tailwind-merge";
interface InfoTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  text: string;
}
const InfoText = ({ className, text, ...props }: InfoTextProps) => {
  return (
    <span className={`${twMerge("text_xs", className || "")}`} {...props}>
      {text}
    </span>
  );
};

export default InfoText;
