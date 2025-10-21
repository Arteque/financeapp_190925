import Label from "../../atoms/FormElements/Label";
import Input from "../../atoms/FormElements/Input";

interface InputLabeldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelText: string;
}

const InputLabeld = ({ id, labelText, ...props }: InputLabeldProps) => {
  return (
    <>
      <Label labelText={labelText} htmlFor={id} />
      <Input id={id} {...props} />
    </>
  );
};

export default InputLabeld;