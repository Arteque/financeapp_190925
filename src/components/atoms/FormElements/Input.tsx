interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return <input className={`input ${className || ''}`} {...props} />;
};

export default Input;