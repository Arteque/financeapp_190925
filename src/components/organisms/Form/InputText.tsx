import InputLabeld from "../../molecules/Form/InputLabeld";
import InfoFormText from "../../molecules/Form/InfoFormText";
import ButtonCall from "../../molecules/Buttons/ButtonCall";
import { twMerge } from "tailwind-merge";

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
    textThenIcon?:boolean;
    className?:string;
    value?:string;
    name?:string;
    disabled?:boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Explizit hinzufügen
}

const InputText = ({ 
    id, 
    labelText, 
    infoText, 
    role, 
    type, 
    hasIcon = false, 
    icon, 
    clickHanlder,
    required = false, 
    placeholder, 
    textThenIcon=false, 
    className, 
    value, 
    name,
    disabled,
    onChange,
    ...props // Alle anderen Props
}: InputTextProps) => {
    return (
        <div className={twMerge(`${hasIcon ? "relative" : ""} ${className || ''}`)}>
            <InputLabeld 
                id={id} 
                labelText={labelText} 
                type={type} 
                required={required} 
                placeholder={placeholder} 
                value={value} 
                name={name}
                disabled={disabled}
                onChange={onChange}
                {...props} // Props weiterleiten
            />
            {hasIcon && (
                <ButtonCall 
                    textThenIcon={textThenIcon}  
                    className="absolute right-2 top-[55%]" 
                    type="button" 
                    role="toggle" 
                    icon={icon} 
                    onClick={clickHanlder} 
                />
            )}
            <InfoFormText text={infoText || ""} role={role} />
        </div>
    );
};

export default InputText;