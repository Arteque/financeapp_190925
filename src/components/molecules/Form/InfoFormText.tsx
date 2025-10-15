import InfoText from "../../atoms/FormElements/InfoText";
interface InfoFormTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  role?: "alert" | "status" | "note";
}

const InfoFormText = ({
  className,
  text,
  role,
  ...props
}: InfoFormTextProps) => {
  return (
    <InfoText
      className={`text-grey-500 ${className || ""}`}
      text={text}
      role={role}
      aria-live={role === "alert" ? "assertive" : "off"}
      {...props}
    />
  );
};

export default InfoFormText;
