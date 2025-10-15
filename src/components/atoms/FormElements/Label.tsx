interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  labelText: string;
}

const Label = ({ labelText, className, ...props }: LabelProps) => {
  return (
    <label className={`text_xs--bold ${className}`} {...props}>
      {labelText}
    </label>
  );
};

export default Label;
