interface InfoTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
  text: string;
}
const InfoText = ({ className, text, ...props }: InfoTextProps) => {
  return (
    <span className={`text_xs ${className || ""}`} {...props}>
      {text}
    </span>
  );
};

export default InfoText;
