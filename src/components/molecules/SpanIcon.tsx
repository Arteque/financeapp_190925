import SpanContainer from "../atoms/Containers/SpanContainer";

interface SpanIconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
}

const SpanIcon = ({ children, className, ...props }: SpanIconProps) => {
  return (
    <SpanContainer className={`p-6 ${className || ""}`} {...props}>
      {children}
    </SpanContainer>
  );
};

export default SpanIcon;
