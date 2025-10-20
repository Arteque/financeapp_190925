import InputLabeld from "../../molecules/Form/InputLabeld";
import InfoFormText from "../../molecules/Form/InfoFormText";
import ButtonCall from "../../molecules/Buttons/ButtonCall";
interface InputTextProps extends React.HTMLAttributes<HTMLInputElement>{
    id: string;
    labelText: string;
    infoText?: string;
    role?: "alert" | "status" | "note";
    type: string;
    hasIcon?: boolean;
    icon?: React.ReactElement<SVGElement | HTMLImageElement>;
    clickHanlder?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    required?:boolean;
    placeholder?:string;
      }

  const InputText = ({ id, labelText, infoText, role, type, hasIcon = false, icon, clickHanlder,required = false, placeholder }: InputTextProps) => {
    return (
      <div  className={hasIcon ? "relative" : ""}>
          <InputLabeld id={id} labelText={labelText} type={type} required={required} placeholder={placeholder} />
          {hasIcon && <ButtonCall className="absolute right-2 top-[55%]" type="button" role="toggle" icon={icon} onClick={clickHanlder} />}
          <InfoFormText text={infoText || ""} role={role} />
      </div>
    );
  };

  export default InputText;

