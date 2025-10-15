import InputLabeld from "../../molecules/Form/InputLabeld";
import InfoFormText from "../../molecules/Form/InfoFormText";

interface InputTextProps {
  id: string;
  labelText: string;
  infoText?: string;
  role?: "alert" | "status" | "note";
  type: string;
}

const InputText = ({ id, labelText, infoText, role, type }: InputTextProps) => {
  return (
    <div>
      <InputLabeld id={id} labelText={labelText} type={type} />
      <InfoFormText text={infoText || ""} role={role} />
    </div>
  );
};

export default InputText;
